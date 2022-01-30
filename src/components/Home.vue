<template>
  <div class="home">
    <Select
        :users="users"
        :posts="posts"
    />
    <PostsList
        :posts="posts"
    />
  </div>
</template>

<script>
import Select from "./Select";
import PostsList from "./PostsList";
import {fetchPosts} from "../api/fetchPosts";
import {fetchUsers} from "../api/fetchUsers";


export default {
  name: "Home",
  components: {
    Select,
    PostsList,
  },
  data(){
    return {
      posts: [],
      users: [],
    }
  },
  mounted: async function() {
    this.$data.users = await fetchUsers();
    this.$data.posts = await fetchPosts();
  },
}
</script>

<style>
.home {
  margin: 12px;
}
</style>