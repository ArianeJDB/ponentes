<template>
  <div>
      <label for="">Busca charlas por nombre</label>
      <input type="text" v-model='value'>
  </div>
</template>

<script>
export default {
  name: "AppFilters",
  data() {
    return {
        value: null
    };
  },
  components: {},
  methods: {
    
  },
  computed: {
      inputValue() {
      console.log(this.value)

      }
  }
};
</script>

<style scoped>

</style>
