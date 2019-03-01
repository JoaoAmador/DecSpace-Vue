<template>
  <v-app id="inspire">
  <div id="header">
  My Projects

    <br>
    <br>


    <v-data-table id="table"
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-5"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.update }}</td>
        <td class="text-xs-left">{{ props.item.privacy }}</td>
        <td class="justify-left layout px-0">
          <v-btn icon class="mx-0" title="Edit Project" @click="editItem(props.item)">
          <v-icon color="teal">edit</v-icon>
        </v-btn>
          <v-btn icon class="mx-0" title="Open Project" @click="openitem(props.item)">
            <v-icon color="blue">folder_open</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" title="Delete Project" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <br>
    <v-layout row justify-center>

      <v-btn color="blue lighten-2 mt-1" dark slot="activator" @click.native.stop="dialog = true" class="mb-2">Add Project</v-btn>
      <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Name" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Creation Date" v-model="editedItem.date"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last Update" v-model="editedItem.update"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-select   :items="privacy" single-line label="Privacy Setting" v-model="editedItem.privacy" item-value="text"></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>
  </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Creation Date', value: 'date' },
        { text: 'Last Update', value: 'update' },
        { text: 'Privacy Setting', value: 'privacy' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [],
      privacy: [
        { text: 'Public' },
        { text: 'Private' },
        ],
      editedIndex: -1,
      editedItem: {
        name: '',
        date: 0,
        update: 0,
        privacy: 0,
      },
      defaultItem: {
        name: '',
        date: 0,
        update: 0,
        privacy: 0,
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
        this.items = [
          {
            name: 'Projecto 1',
            date: '16-05-2018',
            update: '16-05-2018',
            privacy: 'Public',
          },
          {
            name: 'Projecto 2',
            date: '16-05-2018',
            update: '16-05-2018',
            privacy: 'Private',
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
          this.$http.post('http://localhost:8082/addproject', {
            name: this.editedItem.name,
            username: this.$store.state.user,
            creation: this.editedItem.date,//fix date
            update: this.editedItem.update,
            privacy: this.editedItem.privacy
          }).then(function (response) {
            console.log(response.data)
          },  function (err) {
            console.log('err', err)
          })

        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      },
      getDate(){
        var myDate = new Date();
        var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
        var date = ('0' + myDate.getDate()).slice(-2);
        var year = myDate.getFullYear();
        var formattedDate = year + '/' + month + '/' + date;
        return formattedDate;
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


</style>
