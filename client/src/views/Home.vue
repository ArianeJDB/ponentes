<template>
  <div class="home">
   
        Hola! aquí puedes encontrar unos ponentes muy top para tus eventos. Mira quienes son y qué charlas tienen para dar.
        <router-link to="/talks">Ver Charlas</router-link>
        O si quieres ver la lista de ponentes:
        <router-link to="/speakers">Ver Ponentes</router-link>
        Si quieres dar de alta a tu charla y que los eventos la tengan en cuenta, date de alta aquí =)
     <router-link to="/registration">Registrarse</router-link>
     <router-link to="/login">LOGIN</router-link>
    
      </div>
    

</template>

<script>
import { getSpeakers } from '../services/services'
export default {
  data() {
    return {
      speakersData: []
    }
  },
  name: 'Home',
  components: {
  },
  mounted() {
      this.getSpeakersData()
  },
  methods: {
    getSpeakersData() {
      getSpeakers()
        .then(res => {
          localStorage.setItem('data', JSON.stringify(res.data))
          res.data.map(speaker => {
              this.speakersData.push(speaker)
          })
        })
        .catch (error => {
          throw error
        })
    }
  }
}
</script>
