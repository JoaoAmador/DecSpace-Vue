<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-toolbar color="light-blue" dark>
                <v-toolbar-title>Administrator</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-list three-line subheader>
                <v-subheader inset>Files</v-subheader>
                <v-list-tile v-for="item in items" :key="item.id" avatar @click="">
                  <v-list-tile-avatar>
                    <v-icon :class="[item.iconClass]" :title="item.privacy">{{ item.icon }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title  v-if = 'item.copy == undefined'>{{ item.name }}</v-list-tile-title>
                    <v-list-tile-title  v-if = 'item.copy != undefined'>{{item.name}}({{item.copy}})</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.creation }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.username }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.email }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <td id="iconsadmin" class="justify-left layout px-0"  >
                      <v-btn icon class="mx-0" title="Delete Project" @click="deleteItem(item)">
                        <v-icon color="pink">delete</v-icon>
                      </v-btn>
                    </td>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-list two-line subheader>
                <v-subheader inset>Users</v-subheader>
                <v-list-tile v-for="item in users" :key="item.id" avatar @click="">
                  <v-list-tile-avatar>
                    <v-icon class="purple white--text" :title="item.username">supervised_user_circle</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title >{{ item.username }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.email }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <td id="iconsadmin" class="justify-left layout px-0"  >
                      <v-btn icon class="mx-0" title="Delete User">
                        <v-icon color="pink">delete</v-icon>
                      </v-btn>
                    </td>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-subheader></v-subheader>
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
      checkbox3: true,
      items: [],
      users: [],
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
          // this.$http.get('http://app.decspacedev.sysresearch.org/api/getprojects', {
          var id = [];
          console.log(response)
          for(id in response.data)
              this.items.push(response.data[id]);
        });
        this.items = [
        ]
        this.$http.get('http://localhost:8082/getusers').then(function(response) {
          // this.$http.get('http://app.decspacedev.sysresearch.org/api/getusers', {
          var id = [];
          console.log(response)
          for(id in response.data)
            this.users.push(response.data[id]);
        });
        this.users = [
        ]
      },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') &&  this.$http.post('http://localhost:8082/deleteproject', {
          //  confirm('Are you sure you want to delete this item?') &&  ('http://app.decspacedev.sysresearch.org/api/deleteproject', {
          id: item.id,
          username: item.username}).then(function (response) {
        }) && this.items.splice(index, 1)
      },
    }
  }
</script>

<style>
#iconsadmin {
justify-content: flex-start !important;
margin-top: 80%;

}
  </style>
