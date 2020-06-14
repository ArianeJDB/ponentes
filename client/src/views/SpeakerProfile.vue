<template>
    <div>
      Tu perfil con tu info, para editar y añadir/edirtar charlas
    </div>
</template>
<script>
import { login } from '../services/services'
export default {
  name: 'Login',
  components: {},
  data() {
      return {
          email: null,
          password: null
      }
  },
  methods: {
      sendLogin() {
          login(this.email, this.password)
      }
          
       
  }
}
</script>