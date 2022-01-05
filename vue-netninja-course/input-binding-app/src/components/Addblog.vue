<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="check-boxes">
        <label>Lions</label>
        <input type="checkbox" value="lions" v-model="blog.categories" />
        <label>Tigers</label>
        <input type="checkbox" value="tigers" v-model="blog.categories" />
        <label>Elephants</label>
        <input type="checkbox" value="elephants" v-model="blog.categories" />
        <label>Deers</label>
        <input type="checkbox" value="deers" v-model="blog.categories" />
        <label>Birds</label>
        <input type="checkbox" value="birds" v-model="blog.categories" />
      </div>
      <label>Author: </label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted" class="success-msg">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  props: {},
  data() {
    return {
      blog: { title: "", content: "", categories: [], author: "" },
      authors: ["Sara", "Smith", "William", "Helen"],
      submitted: false,
    };
  },
  methods: {
    post: function () {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          content: this.blog.content,
          userId: 1,
        })
        .then(function (data) {
          console.log(data);
          this.submitted = true;
        });
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

#check-boxes input {
  display: inline-block;
  margin-right: 20px;
}

#check-boxes label {
  display: inline-block;
}

.success-msg {
  background-color: lightgreen;
  padding: 1rem;
  border-radius: 8px;
  color: darkgreen;
}
</style>
