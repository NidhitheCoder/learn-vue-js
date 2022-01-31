<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h3 v-idColor>Blog Id : {{ blog.id | custom-id }}</h3>
      <router-link :to="`blog/${blog.id}`"><h4 v-rainbow>{{ blog.title | to-uppercase }}</h4></router-link>
      <p>
        {{ blog.content | snippet }}
      </p>
      <p>Author: {{ blog.title | lastWord }}</p>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://vue-sample-19564-default-rtdb.firebaseio.com/posts.json")
      .then(function (data) {
        return data.json();
      }).then(function(data) {
        let blogsArray = [];
        for ( let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {
    // filteredBlogs: function() {
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   })
    // }
  },
  filters: {
    "custom-id": function (value) {
      return value * 100;
    },
    lastWord(value) {
      return value.slice(value.length - 10, value.length);
    },
  },
  directives: {
    idColor: {
      bind(el, binding, vnode) {
        el.style.color = "#345fab";
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 1rem;
  margin: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: lightblue;
}
</style>
