<template>
  <form class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Date & Time</label>
      <input type="text" name="day" placeholder="Add date and time" />
    </div>
    <div class="form-control form-control-check">
      <label>Set reminder</label>
      <input type="checkbox" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
  export default {
    name: 'AddTask',
  }
</script>
