<template>
    <div>
        <div> {{speakerData.name}}</div>
        <div> {{speakerData.email}}</div>
        <div> {{speakerData.biography}}</div>
        <div> {{speakerData.name}}</div>
        <div> {{speakerData.linkedin}}</div>
        <div> {{speakerData.github}}</div>
        <div> {{speakerData.twitter}}</div>
        <div> {{speakerData.website}}</div>
       Charlas:
       <ul>
           <li v-for="(talk, index) in speakerData.talks" :key="index">
               {{talk.title}}
               {{talk.description}}
               <router-link :to="`/speaker/${speakerData._id}/edit-talk/${talk._id}`">Editar esta charla</router-link>
           </li>
       </ul>
     <router-link :to="`/edit-profile/${speakerData._id}`">editar mi perfil</router-link>

     <router-link :to="`/speaker/${speakerData._id}/new-talk`">Añadir Charla</router-link>

    </div>
</template>
<script>
export default {
  name: 'Login',
  components: {},
  data() {
      return {
        speakerData: null
      }
  },
  mounted() {
      this.getSpeakerData()
      

  },
  methods: {
    getSpeakerData() {
        const data = JSON.parse(localStorage.getItem('data'));
        const email= JSON.parse(localStorage.getItem('email'));
        const speakerData = data.filter(speaker => speaker.email === email)
        speakerData.map(item => {
          this.speakerData = item
          localStorage.setItem('speakerData', JSON.stringify(item))

          })
 
      },

          
  }
}
</script>