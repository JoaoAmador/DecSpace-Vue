<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card class="elevation-12">
              <v-toolbar dark color="light-blue">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container fluid>
                <v-card-text>
                  <v-text-field prepend-icon="email" name="email" label="Email" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-card-text>
                <v-spacer></v-spacer>
                <v-btn class="blue lighten-2 mt-4" dark v-on:click="login(), alert = true ">Login</v-btn>
                <v-alert v-if= !$store.state.success v-model="alert" type="error" dismissible>
                  {{$store.state.msg}}
                </v-alert>
                <v-alert v-if= $store.state.success v-model="alert" type="success" dismissible>
                  {{$store.state.msg}}
                </v-alert>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  //import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null,
        alert: false,
      }
    },
    methods: {
      login: function () {
        this.$store.dispatch('setEmail', this.email)
        this.$http.post('http://localhost:8082/login', {
          // this.$http.post('http://app.decspacedev.sysresearch.org/api/login', {
          email: this.email,
          password: this.password
        }).then(function (response) {
          this.$store.dispatch('setMsg', response.data.msg)
          this.$store.dispatch('setSuccess', response.data.success)
          console.log(response.data)
          if (response.status === 200 && response.data.success) {
            this.$session.start()
            this.$store.dispatch('setToken', response.data.success)
            this.$store.dispatch('setUser', response.data.username)
            this.$router.push('/')
          }
        },  function (err) {
          console.log('err', err)
        })
      }
    }
  }
</script>
