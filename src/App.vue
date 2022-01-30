<template>
  <div>
    <Select/>
    <PostList/>
  </div>
</template>

<script>
import PostList from './components/PostsList.vue'
import Select from "./components/Select";

export default {
  name: 'App',
  components: {
    PostList,
    Select,
  }
}
</script>

<style>

</style>
