<template>
<div>
    <h1>Reigstrateeeee</h1>
    <form action="">
      <label for="email">Email</label>
      <input id="email" type="text">
      <label for="email">Contraseña</label>
      <input id="password" type="password">
      <label for="name">Nombre</label>
      <input id="name" type="text">
      <label for="bio">Descripción/biografía</label>
      <textarea name="" id="title" cols="30" rows="10"></textarea>
        CHARLAS
      <label for="title">Título de tu charla</label>
      <input id ="bio" type="text">
          <label for="bio">Descripción de tu charla</label>
      <textarea name="" id="repeated" cols="30" rows="10"></textarea>
      ¿Has dado ya esta charla en otro evento?
        <label for="yes">Sí</label>
        <input type="checkbox" name="yes" id="yes">
        <label for="no">No</label>
        <input type="checkbox" name="no" id="no">
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
