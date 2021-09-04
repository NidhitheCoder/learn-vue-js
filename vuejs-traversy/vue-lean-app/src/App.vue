<template>
  <div class="container">
    <Header title="Task tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
        <AddTask @add-task="addTask"/>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue';
import Tasks from './components/TasksComp.vue';
import AddTask from './components/AddTaskComp.vue';

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm('Do you want to delete?')) {
       this.tasks = this.tasks.filter(task => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task);
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      // replace http://localhost:5000 with api
      const res = await fetch(`api/tasks`);
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      // replace http://localhost:5000 with api
      const res = await fetch(`api/tasks${id}`);
      const data = await res.json();
      return data;
    }
  },
  async created() {
    {
      this.tasks = await this.fetchTasks()
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
