<template>
  <div class="container">
    <h2 class="text-center mt-5">{{ msg }}</h2>
    <!-- Input -->
    <div class="d-flex">
      <input type="text" placeholder="Enter text" class="form-control">
      <button class="btn btn-warning rounded-0">SUBMIT</button>
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
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{task.name}}</td>
          <td>{{task.status}}</td>
          <td>
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div class="text-center">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  data() {
    return {
      tasks : [
        {
          name: 'Steal banana from the store',
          status: 'to-do'
        },
        {
          name: 'Eat 1kg chocolate in 1 our',
          status: 'in-progress'
        }, 
        {
          name: 'jumb over the road for 30 minutes',
          status: 'in-progress'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
