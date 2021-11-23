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
        <tr>
          <td>Steal bananas from the store.</td>
          <td>Todo</td>
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
  }
}
</script>

<style scoped>

</style>
