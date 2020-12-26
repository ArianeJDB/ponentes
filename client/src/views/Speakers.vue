<template>
    <div>
      SPEAKERSSSSSSS
        <ul>
       <li v-for="(speaker, index) in speakersData" :key='index'>
           <router-link class="link" :to="`/speaker/${speaker._id}`">
           {{speaker.name}}
           </router-link>
       </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Speakers',
  components: {},
  data() {
      return {
          speakersData: JSON.parse(localStorage.getItem('data')),
      }
  },
  methods: {}
}
</script>
