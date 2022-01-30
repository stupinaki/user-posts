<template>
  <form>
    <select
        name="usernames"
    >
      <option :value="null">
        Выберите значение
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
import {users} from "../data/users";

export default {
  name: "Select",
  data(){
    return {
      users,
    }
  },

}
</script>

<style scoped>

</style>