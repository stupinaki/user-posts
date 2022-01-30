<template>
  <form>
    <select
        v-model="optionValue"
        class="form-select"
        aria-label="Default select example"
        name="usernames"
        @change="$emit('userChange', optionValue)"
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
    users: Array,
  },
}
</script>

<style scoped>

</style>