<template>
  <div>
    <h1>This page is Post Index.</h1>
    <form v-on:submit.prevent="create">
      <label>name</label>
      <input type="text" v-model="name">
      <button>CREATE</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Post",
    data: function() {
      return {
        posts: [],
        name: null
      }
    },
    created: function() {
      this.getPosts();
    },
    methods: {
      getPosts() {
        this.$axios.get("/posts").then((res) => {
          this.posts = res.data
        }).catch((error) => {
          console.log(error);
        })
      },
      create: function() {
        this.$axios.post("/posts", {
          post: {
            name: this.name
          }
        }).then((res) => {
          this.posts.push(res.data);
          this.name = null;
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  };
</script>
