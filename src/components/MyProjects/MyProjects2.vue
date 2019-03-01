<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-toolbar color="light-blue" dark>
            <v-toolbar-title>My Projects</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon title="Search">
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon title="Settings" @click.native.stop="dialog3 = true">
              <v-icon >settings</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="amber darken-1"
              bottom
              left
              absolute
              @click.native.stop="dialog = true"
              title="Add Project"
            >
              <v-icon color="white">add</v-icon>
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
                <v-list-tile-sub-title v-if=checkbox>{{ item.privacy }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <td id="iconsmyproj" class="justify-left layout px-0"  >
                  <v-btn icon class="mx-0" title="Open Project" @click="open(item)">
                    <v-icon color="blue">open_in_browser</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" title="Change Privacy" @click="editItem(item)">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" title="Duplicate Project" @click="duplicate(item)">
                    <v-icon color="amber">perm_media</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" title="Delete Project" @click="deleteItem(item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </v-list-tile-action>
            </v-list-tile>
            <v-list two-line subheader>
              <v-subheader inset>Folders</v-subheader>
              <v-list-tile v-for="item in items2" :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title v-if=checkbox2>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-list>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">Add Project</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-text-field label="Name" v-model="editedItem.name"></v-text-field>
                    <v-select :items="privacy" single-line label="Privacy Setting" v-model="editedItem.privacy" item-value="text"></v-select>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialog3" persistent max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">My Projects Preferences</span>
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
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="dialog3 = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-card>
      </v-flex>
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
      items: [],
      items2: [
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Projects Example', subtitle: 'Jan 9, 2018' }
        ],
      privacy: [
        { text: 'Public' },
        { text: 'Private' },
      ],
      editedIndex: -1,
      editedItem: {
        icon: '',
        iconClass: '',
        name: '',
        privacy: '',
        creation: '',
      },
      defaultItem: {
        icon: 'assignment',
        iconClass: '',
        name: '',
        privacy: '',
        creation: '',
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
          //  this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects').then(function(response) {
          var id = [];
          console.log(response)
          for(id in response.data)
            if(response.data[id].username === this.$store.state.user)
              this.items.push(response.data[id]);
        });
        this.items = [
      ]
      },
      icons(){},

      editItem (item) {

        if(item.privacy === 'Public'){
          item.privacy = 'Private'
          item.icon= 'assignment_late'
          item.iconClass= 'amber white--text'}

        else {item.privacy = 'Public'
        item.icon = 'assignment'
        item.iconClass= 'blue white--text'}

        console.log(item.privacy)
        this.$http.post('http://localhost:8082/editproject', {
          id: item.id,
          privacy: item.privacy,
          icon: item.icon,
          iconClass: item.iconClass,
        }).then(function (response) {
          console.log(response)
        })
        this.$http.get('http://localhost:8082/getprojects').then(function(response) {  });
       // this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects').then(function(response) {  });
        this.close()
      },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') &&  this.$http.post('http://localhost:8082/deleteproject', {
          // confirm('Are you sure you want to delete this item?') &&  this.$http.post('http://app.decspacedev.sysresearch.org/api/
          id: item.id,
          username: item.username}).then(function (response) {
        }) && this.items.splice(index, 1)
      },


      close () {
        this.dialog = false
        this.dialog2 = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        var icon = '';
        var iconClass = '';
        const creation = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
        if(this.editedItem.privacy === 'Public'){
           icon = 'assignment'
          iconClass= 'blue white--text'
        }
        else {
          icon= 'assignment_late'
          iconClass= 'amber white--text'
        }
        var project_id = 0;
        this.$http.get('http://localhost:8082/getprojects').then(function(response) {
          //  this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects').then(function(response) {
          var id = [];
          console.log(response)
          for(id in response.data)
            if(response.data[id].username === this.$store.state.user  && response.data[id].id > project_id)
              project_id = response.data[id].id;

          project_id++;

        this.$http.post('http://localhost:8082/addproject', {
          //  this.$http.post('http://app.decspacedev.sysresearch.org/api/addproject', {
          id: project_id,
          name: this.editedItem.name,
          username: this.$store.state.user,
          creation: creation,
          privacy: this.editedItem.privacy,
          icon: icon,
          iconClass: iconClass,
        }).then(function (response) {
          console.log(response.data)
        },  function (err) {
          console.log('err', err)
        })

          this.dialog = false
          setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            location.reload();
          }, 1)
        });
      },
      duplicate (item) {
        const index = this.items.indexOf(item)
        alert("Project sucessfully duplicated.")
        //define the copy number
        let copy_number = 0;

        this.$http.get('http://localhost:8082/getprojects').then(function(response) {
          // this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects').then(function(response) {
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
            if(response.data[id].name === item.name && response.data[id].username === this.$store.state.user && response.data[id].copy > copy_number)
              copy_number = response.data[id].copy;

          copy_number++;
          console.log(copy_number)

          this.$http.post('http://localhost:8082/addproject', {
            // this.$http.post('http://app.decspacedev.sysresearch.org/api/addproject', {
            id:  project_id,
            name: item.name,
            username: this.$store.state.user,
            creation: item.creation,
            privacy: item.privacy,
            icon: item.icon,
            iconClass: item.iconClass,
            copy: copy_number
          }).then(function (response) {
            console.log(response.data)
          },  function (err) {
            console.log('err', err)
          })
          this.dialog2 = false
          setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            location.reload();
          }, 1)

        });
      },

      open (item) {
        this.$store.dispatch('setProject', item.name)
        this.$router.push('/workspace?id=' + item.id)

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

  #iconsmyproj {
    justify-content: flex-start !important;
    /* margin-top: 50%; */

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
