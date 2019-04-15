// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API_KEYS from '../API_KEYS'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    results: []
  },
  async mounted() {
    try {
      const response = await fetch(`https://api.harvardartmuseums.org/person?q=culture:Dutch&apikey=${API_KEYS.Harvard}`)
      const result = await response.json()
      this.results = result.records
    } catch (error) {
      console.log(error.message)
    }
  }
})
