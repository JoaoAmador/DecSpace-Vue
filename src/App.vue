<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>


import auth from './auth'
// Check the users auth status when the app starts
auth.checkAuth()


import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'

  export default {
    name: 'App',
    components:{
      AppToolbar, AppFooter
    }

  }


</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
