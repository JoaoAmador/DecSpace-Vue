<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-toolbar color="light-blue" dark>
                <v-toolbar-title>Public Projects</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon title="Settings" @click.native.stop="dialog3 = true">
                  <v-icon>settings</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list two-line subheader>
                <v-subheader inset>Files</v-subheader>
                <v-list-tile v-for="item in items" :key="item.id" avatar @click="">
                  <v-list-tile-avatar>
                    <v-icon v-if=checkbox :class="[item.iconClass]" :title="item.privacy">{{ item.icon }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content @click="open(item)">
                    <v-list-tile-title  v-if = 'item.copy == undefined'>{{ item.name }}</v-list-tile-title>
                    <v-list-tile-title  v-if = 'item.copy != undefined'>{{item.name}}({{item.copy}})</v-list-tile-title>
                    <v-list-tile-sub-title v-if=checkbox2>{{ item.creation }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title v-if=checkbox3>{{ item.username }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <td id="iconspublicproj" class="justify-left layout px-0"  >
                      <v-btn icon class="mx-0"  title="Open Project" @click="open(item)" >
                        <v-icon color="blue">open_in_browser</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-0" title="Duplicate Project" @click="duplicate(item)">
                        <v-icon color="amber">perm_media</v-icon>
                      </v-btn>
                    </td>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-subheader></v-subheader>
            </v-card>
          </v-flex>
          <v-dialog v-model="dialog3" persistent max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Public Projects Preferences</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-checkbox
                    v-model="checkbox"
                    label="Privacy Settings"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="checkbox2"
                    label="Creation Date"
                    @change="$v.checkbox2.$touch()"
                    @blur="$v.checkbox2.$touch()"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="checkbox3"
                    label="User"
                    @change="$v.checkbox3.$touch()"
                    @blur="$v.checkbox3.$touch()"
                  ></v-checkbox>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog3 = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialog3: false,
      checkbox: true,
      checkbox2: true,
      checkbox3: true,
      items: [],
      privacy: [
        { text: 'Public' },
        { text: 'Private' },
      ],
      editedIndex: -1,
      editedItem: {
        icon: '',
        name: '',
        privacy: '',
      },
      defaultItem: {
        icon: '',
        name: '',
        privacy: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$http.get('http://localhost:8082/getprojects').then(function(response) {
          //  this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects', {
          var id = [];
          console.log(response)
          for(id in response.data)
            if(response.data[id].privacy ==='Public')
              this.items.push(response.data[id]);
        });
        this.items = [
        ]
      },
      duplicate (item) {
        const index = this.items.indexOf(item)
        alert("Project sucessfully duplicated.")
        //define the copy number
        let copy_number = 0;

        this.$http.get('http://localhost:8082/getprojects').then(function(response) {
          //  this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects', {
          var id = [];
          console.log(response)

          //get the biggest project_id of the logged user
          var project_id = 0;

          for(id in response.data) {
            if(response.data[id].username === this.$store.state.user  && response.data[id].id > project_id)
              project_id = response.data[id].id;
          }
          project_id++;


          for(id in response.data)
            if(response.data[id].name === item.name && response.data[id].username === this.$store.state.user)
              copy_number++;
          console.log(copy_number)

          if(copy_number > 0)
            item.copy = copy_number;

          this.$http.post('http://localhost:8082/addproject', {
            //  this.$http.post('http://app.decspacedev.sysresearch.org/api/addproject', {
            id:  project_id,
            name: item.name,
            username: this.$store.state.user,
            creation: item.creation,
            privacy: item.privacy,
            icon: item.icon,
            iconClass: item.iconClass,
            copy: item.copy
          }).then(function (response) {
            console.log(response.data)
          },  function (err) {
            console.log('err', err)
          })

        });
      },

      open (item) {
        this.$store.dispatch('setProject', item.name)
        this.$router.push('/workspace?id=' + item.id + '&public=y&user=' + item.username)

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

  #iconspublicproj {
    justify-content: flex-start !important;
    /* margin-top: 80%; */

  }


</style>
