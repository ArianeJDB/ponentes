<template>
  <div id="">
   Charlasssssss
   <app-filters/>
   <ul v-for="(speaker, index) in speakersData"
        :key='index'>
       <li
        v-for="(talk, index) in speaker.talks"
        :key='index'
        class="talk">
             <router-link class="link" :to="`/speaker/${speaker._id}/talk/${talk._id}`">
           <div>
               {{talk.title}}
           </div>
            </router-link>
            por: {{speaker.name}}
       </li>
       
        </ul>
      
  </div>
</template>
<script>
import { getSpeakers, createNewSpeaker } from '../services/services'
import AppFilters from '../components/AppFilters'
export default {
  name: 'Talks',
  components: { AppFilters },
  data() {
      return {
          speakersData: JSON.parse(localStorage.getItem('data')),
      }
  },
  methods: {}
}
</script>
<style lang="scss">

</style>
