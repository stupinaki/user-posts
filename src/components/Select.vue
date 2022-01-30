<template>
  <form>
    <select
        class="form-select"
        aria-label="Default select example"
        name="usernames"
        @change="handleFilter"
        v-model="optionValue"
    >
      <option :value="null">
        Выберите автора
      </option>
      <option
          v-for="user in users"
          :key="user.id"
          :value="user.id"
      >
        {{user.username}}
      </option>
    </select>
  </form>
</template>

<script>

export default {
  name: "Select",
  data(){
    return {
      optionValue: null,
    }
  },
  props:{
    posts: Array,
    users: Array,
  },
  methods: {
    handleFilter() {
      const posts = this.$props.posts;
      const userId = this.optionValue;
      const filteredPosts = posts.filter(post => post.userId === userId);
      console.log({filteredPosts})
    },
  }


}
</script>

<style scoped>

</style>