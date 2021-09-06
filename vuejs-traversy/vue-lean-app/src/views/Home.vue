<template>
  <div>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
  import Tasks from "../components/TasksComp.vue";
  import AddTask from "../components/AddTaskComp.vue";

  export default {
    name: "App",
    props: {
      showAddTask: Boolean
    },
    components: {
      Tasks,
      AddTask,
    },
    data() {
      return  {
       tasks: []
      }
    },
     methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      console.log(await res);

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Do you want to delete?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      });

      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      // replace http://localhost:5000 with api
      const res = await fetch(`api/tasks`);
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      // replace http://localhost:5000 with api
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    {
      this.tasks = await this.fetchTasks();
    }
  }
  }
</script>
