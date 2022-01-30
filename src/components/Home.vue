<template>
  <div class="home">
    <Select
        :users="users"
        @userChange="onUserChange"
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
      userId: null,
      posts: [],
      users: [],
    }
  },
  mounted: async function() {
    this.$data.users = await fetchUsers();
    this.$data.posts = await fetchPosts();
  },
  methods: {
    async onUserChange(userId) {
      this.$data.userId = userId;
      this.$data.posts = await fetchPosts(userId);
    }
  }
}
</script>

<style>
.home {
  margin: 12px;
}
</style>