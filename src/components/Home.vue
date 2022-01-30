<template>
  <div class="home">
    <Loader v-if="loading"/>
    <template v-else>
      <Select
          :users="users"
          @userChange="onUserChange"
      />
      <PostsList
          :posts="posts"
      />
    </template>
  </div>
</template>

<script>
import Select from "./Select";
import Loader from "./Loader";
import PostsList from "./PostsList";
import {fetchPosts} from "../api/fetchPosts";
import {fetchUsers} from "../api/fetchUsers";


export default {
  name: "Home",
  components: {
    Select,
    Loader,
    PostsList,
  },
  data(){
    return {
      posts: [],
      users: [],
      loading: true,
    }
  },
  mounted: async function() {
    const [users, posts] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
    ])
    this.$data.users = users;
    this.$data.posts = posts;
    this.$data.loading = false;
  },
  methods: {
    async onUserChange(userId) {
      this.loading = true;
      this.$data.posts = await fetchPosts({userId});
      this.loading = false;
    }
  }
}
</script>

<style>
.home {
  margin: 12px;
}
</style>