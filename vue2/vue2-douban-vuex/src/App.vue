<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header.vue'
  import Hello from './components/Hello';
  import Index from './views/index'
  import VuexDemo from './views/vuex-demo.vue'
  import Movies from './views/movies.vue'
  import MovieList from './views/movie-list.vue'
  import MovieDetail from './views/movie-detail.vue'

  export default {
    name: 'app',
    components: {
      vHeader,
      Hello,
      Index,
      VuexDemo,
      Movies,
      MovieList,
      MovieDetail
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
