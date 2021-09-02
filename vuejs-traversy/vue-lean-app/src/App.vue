<template>
  <div class="container">
    <Header title="Task tracker" />
    <AddTask />
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
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm('Do you want to delete?')) {
       this.tasks = this.tasks.filter(task => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task);
    }
  },
  created() {
    {
      this.tasks = [
        {
          id: 1,
          text: "Doctor appointment",
          day: "March 1st at 2:30pm",
          reminder: true,
        },
        {
          id: 2,
          text: "Meeting at school",
          day: "March 21st at 9:30am",
          reminder: true,
        },
        {
          id: 3,
          text: "Shopping",
          day: "March 2nd at 12:30pm",
          reminder: false,
        },
        {
          id: 4,
          text: "Deliver content",
          day: "March 13th at 10:30am",
          reminder: true,
        },
        {
          id: 5,
          text: "Buy tickets",
          day: "March 10th at 10:30pm",
          reminder: false,
        },
      ];
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
