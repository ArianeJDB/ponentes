<template>
  <main class="home-grid">
    <section class="hero">
      <p class="hero_text">
        Mensaje super chévere de Fran. Hola! aquí puedes encontrar ponentes muy
        top para tus eventos.
      </p>
    </section>
    <section class="cards_container">
      <div class="talks-container">
        <h4 class="card_text">
          Mira quienes son y qué charlas tienen para dar.
        </h4>
        <button class="btn" @click="$router.push('/talks')">Ver Charlas</button>
      </div>
      <div class="speakers-container">
        <h4 class="card_text">O si quieres ver la lista de ponentes:</h4>
        <button class="btn" @click="$router.push('/speakers')">
          Ver Ponentes
        </button>
      </div>
      <div class="registration-container">
        <h4 class="card_text">
          Si quieres dar de alta a tu charla y que los eventos la tengan en
          cuenta:
        </h4>
        <button class="btn" @click="$router.push('/registration')">
          Regístrate
        </button>
      </div>
      <div class="login-container">
        <h4 class="card_text">Y si ya tienes cuenta:</h4>
        <button class="btn" @click="$router.push('/login')">Login</button>
      </div>
    </section>
  </main>
</template>

<script>
import { getSpeakers } from "../services/services";
export default {
  data() {
    return {
      speakersData: [],
    };
  },
  name: "Home",
  components: {},
  mounted() {
    this.getSpeakersData();
  },
  methods: {
    getSpeakersData() {
      getSpeakers()
        .then((res) => {
          localStorage.setItem("data", JSON.stringify(res.data));
          res.data.map((speaker) => {
            this.speakersData.push(speaker);
          });
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>
<style scoped>
.hero {
  background-color: teal;
  height: 20rem;
}
.hero_text {
  margin: 0;
}

.home-grid div {
  -webkit-box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.75);
  margin-right: 2rem;
  width: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cards_container {
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 350px;
  z-index: 9;
}

.card_text {
  padding: 1.5rem;
  margin: 0;
  font-weight: 200;
}

.link {
  text-decoration: none;
  color: #2c3e50;
}

.btn {
  width: 100%;
  background-color: rgb(169, 83, 226);
  border: none;
  padding: 0.75rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}
</style>
