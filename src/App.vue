<template>
  <div id="app">
    <div class="wall-background"></div>
    <div class="art-container">
    <img class="art-image" v-for="image in results" :src="image.baseimageurl" v-bind:key="image.baseimageurl">
    </div>
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
        `https://api.harvardartmuseums.org/image?sort=random&q=height:800&width:1024&size=3&apikey=${API_KEYS.Harvard}`
      );
      const result = await response.json();
      this.results = result.records;
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
}

.wall-background {
  content:url('./assets/wall2.jpg');
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.art-container {
  width: 83%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

.art-image {
  width: 25%;
  height: 20%;
  margin: 11.5% 5%;
}
</style>
