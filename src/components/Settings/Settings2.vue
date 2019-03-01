<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-toolbar color="light-blue" dark>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div id="subheader">
                Change Password
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs4>
                      <v-subheader>Current Password:</v-subheader>
                    </v-flex>
                    <v-flex xs8>
                      <v-text-field
                        name="input-10-2"
                        label="Enter your password"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e1 = !e1)"
                        value=""
                        class="input-group--focused"
                        :type="e1 ? 'password' : 'text'"
                        v-model="password1"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4>
                      <v-subheader>New Password:</v-subheader>
                    </v-flex>
                    <v-flex xs8>
                      <v-text-field
                        name="input-10-2"
                        label="Enter your password"
                        :append-icon="e2 ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (e2 = !e2)"
                        value=""
                        class="input-group--focused"
                        :type="e2 ? 'password' : 'text'"
                        v-model="password2"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-btn
                    class="blue lighten-2 mt-4"
                    dark
                    v-on:click="changePass(),  alert = true"
                  >
                    Submit
                  </v-btn>
                  <v-alert v-if= !$store.state.success3 v-model="alert" type="error" dismissible>
                    {{$store.state.msg3}}
                  </v-alert>
                  <v-alert v-if= $store.state.success3 v-model="alert" type="success" dismissible>
                    {{$store.state.msg3}}
                  </v-alert>
                </v-container>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        e1: true,
        e2: true,
        password1: '',
        password2: '',
        alert: false,
      }
    },
    methods: {
      changePass: function () {
        this.$http.post('http://localhost:8082/changePassword', {
          //   this.$http.post('http://app.decspacedev.sysresearch.org/api/changePassword', {
          password1: this.password1,
          password2: this.password2,
          username: this.$store.state.user,
        }).then(function (response) {
          this.$store.dispatch('setMsg3', response.data.msg)
          this.$store.dispatch('setSuccess3', response.data.success)
          console.log(response.data)
        },  function (err) {
          console.log('err', err)
        })
      }
    }
  }
</script>

<style>
  #header {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 5px;
    font-size: 30px;
    line-height: 1.5;
  }

  #subheader {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
</style>
