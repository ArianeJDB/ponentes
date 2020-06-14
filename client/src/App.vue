<template>
  <div id="app">
     
    <div id="nav">
<app-header></app-header>
    </div>
    <router-view/>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader"
export default {
  components: {
    AppHeader
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
