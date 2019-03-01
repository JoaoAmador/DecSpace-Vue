<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card class="elevation-12">
              <v-toolbar dark color="light-blue">
                <v-toolbar-title>Sign up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container fluid>
                <v-card-text>
                  <v-text-field prepend-icon="person" name="username" label="Username" type="text" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="Email" type="text" v-model="email" ></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-card-text>
                <v-btn class="blue lighten-2 mt-4" dark v-on:click="register(), alert = true">Register</v-btn>
                <v-alert v-if= !$store.state.success2 v-model="alert" type="error" dismissible>
                  {{$store.state.msg2}}
                </v-alert>
                <v-alert v-if= $store.state.success2 v-model="alert" type="success" dismissible>
                  {{$store.state.msg2}}
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
  import Api from '@/services/Api'
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        username: '',
        password: '',
        error: null,
        alert: false,
      }
    },
    methods: {
      register: function () {
        this.$http.post('http://localhost:8082/register', {
          // this.$http.post('http://app.decspacedev.sysresearch.org/api/register', {
          email: this.email,
          username: this.username,
          password: this.password
        }).then(function (response) {
          this.$store.dispatch('setMsg2', response.data.msg)
          this.$store.dispatch('setSuccess2', response.data.success)
          console.log(response.data)
          if (response.status === 200 && response.data.success) {
            this.$router.push('/')
          }
        },  function (err) {
          console.log('err', err)
        })
      }
    }
  }
</script>
