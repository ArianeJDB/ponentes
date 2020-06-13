<template>
<div>
    <h1>Reigstrateeeee</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="text">
      <label for="email">Contraseña</label>
      <input type="password">
      <label for="name">Nombre</label>
      <input type="text">
      <label for="bio">Descripción/biografía</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
        CHARLAS
      <label for="title">Título de tu charla</label>
      <input type="text">
          <label for="bio">Descripción de tu charla</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      ¿Has dado ya esta charla en otro evento?
        <label for="">Sí</label>
        <input type="checkbox" name="yes" id="">
        <label for="">No</label>
        <input type="checkbox" name="no" id="">
    </form>
    </div>
</template>

<script>
import { createNewSpeaker } from '../services/services'
export default {
  name: 'Registration',
  components: {},

  methods: {

    // register() {
    //   createNewSpeaker()
    //     .then(data => {
    //       console.log('post data', data)
    //     })
    //     .catch (error => {
    //       throw error
    //     })
    // }
  }
}
</script>
