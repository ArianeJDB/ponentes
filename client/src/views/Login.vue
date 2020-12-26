<template>
  <div>
    LOGIN
    <form action="">
      <label for="email">Email</label>
      <input type="text" v-model="email" />
      <label for="password">Password</label>
      <input type="password" v-model="password" />
      <button type="button" @click="sendLogin">Enviar</button>
    </form>
  </div>
</template>
<script>
import { login } from "../services/services";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    sendLogin() {
      login(this.email, this.password);
    },
  },
};
</script>
