<template>
  <div>
    <h1>Reigstrateeeee</h1>
    <form action>
      <div v-if="addTalk">
        <label for="email">Email</label>
        <input type="text" v-model="email" />
        <div v-if="editProfile">
          <label for="password">Contraseña</label>
          <input type="password" v-model="password" />
        </div>
        <label for="name">Nombre</label>
        <input type="text" v-model="name" />
        <label for="bio">Descripción/biografía</label>
        <textarea name="bio" cols="30" rows="10" v-model="bio"></textarea>
        <label for="pic">Sube una foto tuya</label>
        <input type="file" ref="file" @change="uploadPic" />
        <button>Guardar</button>
        <label for="twitter">Twitter</label>
        <input type="text" v-model="twitter" />
        <label for="linkedin">LinkedIn</label>
        <input type="text" v-model="linkedin" />
        <label for="github">Github</label>
        <input type="text" v-model="github" />
        <label for="website">Website</label>
        <input type="text" v-model="website" />
      </div>
      <div v-if="editProfile">
        CHARLAS
        <label for="title">Título de tu charla</label>
        <input type="text" v-model="titleTalk" />
        <label for="bio">Descripción de tu charla</label>
        <textarea name="descriptionTalk" id cols="30" rows="10" v-model="descriptionTalk"></textarea>

        <label for>¿Has dado ya esta charla en otro evento?</label>
        <input type="checkbox" name="isRepeated" v-model="isRepeated" />
      </div>
      <button type="button" @click="setMethodButton">Enviar</button>
    </form>
  </div>
</template>

<script>
import { createNewSpeaker } from "../services/services";
export default {
  name: "AppRegistrationForm",
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
      payload: {},
      addTalk: true,
      editProfile: true
    };
  },
  mounted() {
    this.setViewsAsPage();
  },
  methods: {
    uploadPic(event) {
      const pic = this.$refs.file.files[0];
      this.selectedPic = pic;
    },
    // setPayload() {

    //   this.addNewSpeaker(payload)
    // },
    addNewSpeaker() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        biography: this.bio,
        twitter: this.twitter,
        github: this.github,
        linkedin: this.linkedin,
        website: this.website,
        talks: [
          {
            title: this.titleTalk,
            description: this.descriptionTalk,
            isRepeated: this.isRepeated
          }
        ]
      };
      createNewSpeaker(payload);
    },
    setViewsAsPage() {
      console.log(this.$route.name);
      if (this.$route.name === "EditProfile") {
        this.editPage = false;
        this.editProfile = false;
        const speakerData = JSON.parse(localStorage.getItem("speakerData"));
        this.email = speakerData.email;
        this.name = speakerData.name;
        this.bio = speakerData.biography;
        this.twitter = speakerData.twitter;
        this.github = speakerData.github;
        this.linkedin = speakerData.linkedin;
        this.website = speakerData.website;
        speakerData.talks.map(item => {
          this.titleTalk = item.title;
          this.descriptionTalk = item.description;
          this.isRepeated = item.isRepeated;
        });
      }
      if (this.$route.name === "NewTalk") {
        this.addTalk = false;
      }
      if (this.$route.name === "EditTalk") {
        this.addTalk = false;
        const speakerData = JSON.parse(localStorage.getItem("speakerData"));
        const talkId = this.$route.params.talkId;
        const selectedTalk = speakerData.talks.filter(
          item => item._id === talkId
        );
        selectedTalk.map(item => {
          this.titleTalk = item.title;
          this.descriptionTalk = item.description;
          this.isRepeated = item.isRepeated;
        });
      }
    },
    sendNewTalk(event) {
      console.log("send new talk");
      const talks = [];
      const payload = {
        title: this.titleTalk,
        description: this.descriptionTalk,
        isRepeated: this.isRepeated
      };
      talks.push(payload);
      this.$emit("newTalk", talks);
    },
    sendSpeakerEdited(event) {
      console.log("EDIITTTTTTT");
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        biography: this.bio,
        twitter: this.twitter,
        github: this.github,
        linkedin: this.linkedin,
        website: this.website,
        talks: [
          {
            title: this.titleTalk,
            description: this.descriptionTalk,
            isRepeated: this.isRepeated
          }
        ]
      };
      console.log("edit spekaer", payload);
      this.$emit("speakerEdited", payload);
    },
    sendTalkEdited(event) {
      console.log("send talk edited");
      const talk = [];
      const payload = {
        title: this.titleTalk,
        description: this.descriptionTalk,
        isRepeated: this.isRepeated
      };
      talk.push(payload);
      console.log("sentalkedited", talk);
      this.$emit("talkEdited", talk);
    },
    setMethodButton() {
      if (this.$route.name === "AppRegistrationForm") {
        this.addNewSpeaker();
      } else if (this.$route.name === "EditProfile") {
        console.log("aqui EDIT PROFILE");
        this.sendSpeakerEdited();
      } else if (this.$route.name === "EditTalk") {
        this.sendTalkEdited();
      } else if (this.$route.name === "NewTalk") {
        this.sendNewTalk();
      }
    }
  }
};
</script>
