<template>
  <v-app id="inspire">
  <div id="header">
    Public Projects

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
        <td class="text-xs-left">{{ props.item.username }}</td>
        <td class="justify-left layout px-2">
          <v-btn icon class="mx-0" title="Open Project" @click="openitem(props.item)">
            <v-icon color="blue">folder_open</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" title="Duplicate Project" @click="duplicateitem(props.item)">
            <v-icon color="teal">cached</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Project Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Creation Date', value: 'date' },
        { text: 'Last Update', value: 'update' },
        { text: 'Username', value: 'username' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        date: 0,
        update: 0,
        username: 0,
      },
      defaultItem: {
        name: '',
        date: 0,
        update: 0,
        username: 0,
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
            username: 'João Amador',
          },
          {
            name: 'Projecto 2',
            date: '16-05-2018',
            update: '16-05-2018',
            username: 'João Amador',
          }
        ]
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
