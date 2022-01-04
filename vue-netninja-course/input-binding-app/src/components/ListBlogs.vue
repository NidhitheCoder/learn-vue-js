<template>
  <div id="show-blogs">
    <h1>List blog titles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs">
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h4 v-rainbow>{{blog.title | to-uppercase}}</h4>
      <p>
        {{blog.body | snippet}}
      </p>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.blogs = data.body.slice(0, 10);
    })
  },
  computed: {
    // filteredBlogs: function() {
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   })
    // }
  },
  filters: {
   
  },
  directives: {
    
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs {
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem;
  background: lightsalmon;
}

.single-blog {
  padding: 1rem;
  margin: 1rem;
  box-sizing:border-box;
  border-radius: 8px;
  background-color: lightblue;
}
</style>

