<template>
  <v-app id="inspire">
    <v-toolbar  class="white--text" color="light-blue" dark tabs >
      <router-link a style="text-decoration:none;"   to="/method-catalog"> <v-btn flat><v-icon>arrow_back</v-icon></v-btn></router-link>
      <v-toolbar-title id="ordertitle">Order By</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        centered
        color="light-blue"
        slot="extension"
        slider-color="yellow"
        v-model="model"
      >
        <v-tab
          v-for="item in items"
          :key="item.id"
          :href="`#tab-${item.id}`"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="item in items"
        :key="item.id"
        :id="`tab-${item.id}`"
      >
        <v-card v-if="item.id === 1"flat>
          <v-card-text>Orders a given group of actions by a certain criterion in a specific direction (ascendant and descendant.</v-card-text>
          <template>
            <div class="text-xs-center">
              <!--<v-btn fab dark color="indigo" @click="zippado()" title="Download OrderBy Example">
                <v-icon dark>file_download</v-icon>
              </v-btn>-->
            </div>
          </template>
        </v-card>


        <v-card v-if="item.id === 2"flat>

          <v-container>
          <v-card-text><strong>Criteria</strong></v-card-text>
          <v-data-table id="table"
                        :headers="headers"
                        :items="table1"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <v-icon id="i" class="mx-1">{{ props.item.name }}</v-icon>
              <td class="text-xs-center">{{ props.item.date }}</td>
              <td class="text-xs-center">{{ props.item.update }}</td>
              <td class="text-xs-center">{{ props.item.privacy }}</td>
            </template>
          </v-data-table>
          </v-container>

          <br>

          <v-container>
          <v-card-text><strong>Actions</strong></v-card-text>
          <v-data-table id="table2"
                        :headers="headers2"
                        :items="table2"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.date }}</td>
              <td class="text-xs-center">{{ props.item.update }}</td>
              <td class="text-xs-center">{{ props.item.privacy }}</td>
            </template>
          </v-data-table>
          </v-container>

          <br>

          <v-container>
          <v-card-text><strong>Results</strong></v-card-text>
          <v-data-table id="table3"
                        :headers="headers3"
                        :items="table3"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.date }}</td>
              <td class="text-xs-center">{{ props.item.update }}</td>
              <td class="text-xs-center">{{ props.item.privacy }}</td>
            </template>
          </v-data-table>
          </v-container>
          <v-subheader></v-subheader>
        </v-card>


        <v-card v-if="item.id === 3"flat>
          <template>
            <v-stepper  v-model="e1">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="e1 > 1">Import "Order By" Method</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="e1 > 2">Fill in the Data</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" :complete="e1 > 3">Run the Workflow</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4">Check Results</v-stepper-step>
                <v-divider></v-divider>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card color="grey lighten-1" class="mb-5" height="200px" ></v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="primary" @click.native="e1 = 1">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"> </v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="primary" @click.native="e1 = 3">Back</v-btn>
                  <v-btn color="red  white--text" @click.native="e1 = 1">Finish</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </template>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        model: 'tab-1',
        e1: 0,
        table1: [
          {
            name: 'clear',
            date: 'Number Of Albums',
            update: 'Number',
            privacy: 'Descendant',
          },
          {
            name: 'check',
            date: 'Genre',
            update: 'Text',
            privacy: 'Ascendant',
          },
          {
            name: 'clear',
            date: 'Best Song',
            update: 'Text',
            privacy: 'Descendant',
          }
        ],
        table2: [
          {
            name: 'Queens Of The Stone Age',
            date: '6',
            update: 'Hard Rock',
            privacy: 'No One Knows',
          },
          {
            name: 'The White Stripes',
            date: '6',
            update: 'Blues Rock',
            privacy: 'Seven Nation Army',
          },
          {
            name: 'St. Vincent',
            date: '5',
            update: 'Indie',
            privacy: 'Digital Witness',
          },
          {
            name: 'Kendrick Lamar',
            date: '4',
            update: 'Hip Hop',
            privacy: 'Humble',
          }
        ],
        table3: [
          {
            name: 'The White Stripes',
            date: '6',
            update: 'Blues Rock',
            privacy: 'Seven Nation Army',
          },
          {
            name: 'Queens Of The Stone Age',
            date: '6',
            update: 'Hard Rock',
            privacy: 'No One Knows',
          },
          {
            name: 'Kendrick Lamar',
            date: '4',
            update: 'Hip Hop',
            privacy: 'Humble',
          },
          {
            name: 'St. Vincent',
            date: '5',
            update: 'Indie',
            privacy: 'Digital Witness',
          }
        ],
        headers: [
          {
            text: 'Order By',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Criterion Name',align: 'center', sortable: false, value: 'date' },
          { text: 'Type',align: 'center', sortable: false, value: 'update' },
          { text: 'Direction',align: 'center', sortable: false, value: 'privacy' }
        ],
        headers2: [
          {
            text: 'Action Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Number Of Albums',align: 'center', sortable: false, value: 'date' },
          { text: 'Genre', align: 'center',sortable: false, value: 'update' },
          { text: 'Best Song', align: 'center',sortable: false, value: 'privacy' }
        ],
        headers3: [
          {
            text: 'Action Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Number Of Albums',align: 'center', sortable: false, value: 'date' },
          { text: 'Genre',align: 'center', sortable: false, value: 'update' },
          { text: 'Best Song',align: 'center', sortable: false, value: 'privacy' }
        ],
        items: [
          {
            title: "Description",
            text: "Orders a given group of actions by a certain criterion in a specific direction (ascendant and descendant).",
            id: 1
          },
          {
            title: "Example",
            id: 2
          },
          {
            title: "Step by Step",
            id: 3
          }
        ],
        methods: {
          close () {
            this.dialog = false
            setTimeout(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            }, 300)
          },
          /*** EXPORT FUNCTION ***/
          zippado() {
            console.log("asjjdhsuhuj");
            const zip_file_path = '/Catalog/examples/' + 'OrderBy' + '/' + 'OrderBy' + '.zip';
            const zip_file_name = 'OrderBy' + '.zip';
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.href = zip_file_path;
            a.download = zip_file_name;
            a.click();
            document.body.removeChild(a);
          }
        }

      }
    }
  }
</script>

<style>
  #header {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #ordertitle {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 80%;
  }

  #i {
    margin-top: 5%;
  }
</style>
