<template>
  <div id="addblog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" required>
      <label>Blog Content:</label>
      <textarea></textarea>
    </form>
    <div class="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:</p>
      <p>Blog content:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addBlog',
  props: {
  }
}
</script>

<style scoped>
</style>
