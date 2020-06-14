<template>
<!-- <div>
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
      
        <label for="">¿Has dado ya esta charla en otro evento?</label>
        <input type="checkbox" name="isRepeated" v-model="isRepeated">
       <button type="button"  @click="setPayload">Enviar</button>
    </form>
  

    </div> -->
</template>

 <script>
// import { createNewSpeaker } from '../services/services'
// export default {
//   name: 'Registration',
//   components: {},
//   data() {
//     return {
//       name: null,
//       email: null,
//       password: null,
//       bio: null,
//       pic: null,
//       twitter: null,
//       github: null,
//       linkedin: null,
//       website: null,
//       selectedPic: null,
//       titleTalk: null,
//       descriptionTalk: null,
//       isRepeated: false,
//       payload: {}
//     }
//   },
//   methods: {
//     uploadPic(event) {
//       const pic = this.$refs.file.files[0];
//       this.selectedPic = pic
//     },
//     setPayload() {
//       const payload = {
//         name: this.name, 
//         email: this.email,
//         password: this.password,
//         biography: this.bio,
//         twitter: this.twitter,
//         github: this.github,
//         linkedin: this.linkedin,
//         website: this.website,
//         talks: [{
//           title: this.titleTalk,
//           description: this.descriptionTalk, isRepeated: this.isRepeated
//           }]
//       }
//       createNewSpeaker(payload)
//     },

//   }
// }
// </script>
