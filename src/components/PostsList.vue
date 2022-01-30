<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
        {{post.title}}
    </li>
  </ul>
</template>

<script>
import {posts} from "../data/posts";

export default {
  name: 'PostList',
  data(){
    return {
      posts,
    }
  }
}


</script>

<style>

</style>
