<template>
  <ul class="list list-group-flush">
    <li
      v-for="post in posts"
      :key="post.id"
      class="list-group-item"
    >
        <router-link :to="`/post:${post.id}`">
          {{post.title}}
        </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'PostList',
  props: {
    posts: Array,
  }
}


</script>

<style>
.list{
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
