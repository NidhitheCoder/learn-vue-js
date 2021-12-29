<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div  v-for="blog in blogs" :key="blog.id" class="single-blog">
      <h4>{{blog.title}}</h4>
      <p>
        {{blog.body}}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data)
      this.blogs = data.body.slice(0,10)
    })
  }
}
</script>

<style scoped>

</style>
