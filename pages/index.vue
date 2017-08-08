<template>
  <div class="f1 code">
    Hello World
    <ul>
      <li v-for="user in users" :key="user.id">
        {{user.login}}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "~/plugins/axios"

export default {
  asyncData() {
    return axios.get("users")
      .then(res => ({
        users: res.data
      }))
  }
}
</script>