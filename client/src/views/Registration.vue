<template>
<div>
    <h1>Reigstrateeeee</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="text" v-model="email">
      <label for="password">Contraseña</label>
      <input type="password" v-model="password">
      <label for="name">Nombre</label>
      <input type="text" v-model="name">
      <label for="bio">Descripción/biografía</label>
      <textarea name="bio" cols="30" rows="10" v-model="bio"></textarea>
      <label for="pic">Sube una foto tuya</label>
      <input type="file" ref="file" @change="uploadPic">
      <button>Guardar</button>
      <label for="twitter" >Twitter</label>
      <input type="text" v-model="twitter">
      <label for="linkedin">LinkedIn</label>
      <input type="text" v-model="linkedin">
      <label for="github" >Github</label>
      <input type="text" v-model="github">
      <label for="website">Website</label>
      <input type="text" v-model="website">
        CHARLAS
      <label for="title">Título de tu charla</label>
      <input type="text" v-model="titleTalk">
          <label for="bio">Descripción de tu charla</label>
      <textarea name="descriptionTalk" id="" cols="30" rows="10" v-model="descriptionTalk"></textarea>
      ¿Has dado ya esta charla en otro evento?
        <label for="">Sí</label>
        <input type="radio" name="isRepeated" v-model="isRepeated">
        <label for="">No</label>
        <input type="radio" name="isNotRepeated" v-model="isNotRepeated">
    </form>
    name: {{this.name}}
    email: {{this.email}}
    password: {{this.password}}
    bio: {{this.bio}}
  twitter: {{this.twitter}}
  github: {{this.github}}
  linkedin: {{this.linkedin}}
  website: {{this.website}}
  titulo: {{this.titleTalk}}
  descriptionTalk: {{this.descriptionTalk}}
  está repetida: {{this.isRepeated}}
  está NO repetida: {{this.isNotRepeated}}




  
    </div>
</template>

<script>
import { createNewSpeaker } from '../services/services'
export default {
  name: 'Registration',
  components: {},
  data() {
    return {
      name: null,
      email: null,
      password: null,
      bio: null,
      pic: null,
      twitter: null,
      github: null,
      linkedin: null,
      website: null,
      selectedPic: null,
      titleTalk: null,
      descriptionTalk: null,
      isRepeated: false,
      isNotRepeated: false,
      payload: {}
    }
  },
  methods: {
    uploadPic(event) {
      const pic = this.$refs.file.files[0];
      this.selectedPic = pic
    },
    setPayload() {
      this.payload = {
        name, email, password, bio, pic, twitter, github, linkedin, website, talks: [{ titleTalk, descriptionTalk, isRepeated}]
      }
    }
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
