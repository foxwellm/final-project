<template>
  <div id="app">
    <img v-for="image in results" :src="image.baseimageurl" v-bind:key="image.baseimageurl">
    <router-view/>
  </div>
</template>

<script>
import API_KEYS from "../API_KEYS";

export default {
  name: "App",
  data() {
    return {
      results: []
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        `https://api.harvardartmuseums.org/image?sort=random&q=height:800&apikey=${API_KEYS.Harvard}`
      );
      const result = await response.json();
      this.results = result.records;
      console.log(this.results[0]);
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
