<template>
  <div class="container">
    <h2 class="text-center mt-5">{{ msg }}</h2>
    <!-- Input -->
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter text"
        class="form-control"
      />
      <button @click="submitTask" class="btn btn-warning rounded-0">
        SUBMIT
      </button>
    </div>
    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, index) in tasks"
          :key="index"
          :style="[
            task.status === 'to-do' && { backgroundColor: '#fcd5ce' },
            task.status === 'in-progress' && { backgroundColor: '#fefae0' },
            task.status === 'finished' && { backgroundColor: '#e9edc9' },
          ]"
        >
          <td>
            <span :class="{ finished: task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td style="width: 120px">
            <span
              class="pointer"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-warning': task.status === 'in-progress',
                'text-success': task.status === 'finished',
              }"
            >
              {{ firstCharUpper(task.status) }}
            </span>
          </td>
          <td>
            <div class="text-center" @click="editTask(index)">
              <span class="fa fa-pen pointer"></span>
            </div>
          </td>
          <td>
            <div class="text-center" @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["to-do", "in-progress", "finished"],
      tasks: [
        {
          name: "Steal banana from the store",
          status: "to-do",
        },
        {
          name: "Eat 1kg chocolate in 1 our",
          status: "in-progress",
        },
        {
          name: "jumb over the road for 30 minutes",
          status: "in-progress",
        },
      ],
    };
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = "";
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
    firstCharUpper(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.finished {
  text-decoration: line-through;
}
</style>
