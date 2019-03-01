<template>
  <v-app id="inspire">
  <div id="header">
    Settings

    <div id="subheader">
      Password Reset

      <v-container fluid>
        <v-layout row>
        <v-flex xs4>
          <v-subheader>Current Password:</v-subheader>
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
          class="blue lighten-2 mt-5"
          dark
          v-on:click="changePass()"
        >
          Reset
        </v-btn>
      </v-container>

      <br>

    </div>
  </div>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        e1: false,
        e2: false,
        e3: false,
        e4: false,
        password1: '',
        password2: '',
      }
    },
    methods: {
      changePass: function () {
        this.$http.post('http://localhost:8082/changePassword', {
          password1: this.password1,
          password2: this.password2,
        }).then(function (response) {
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
