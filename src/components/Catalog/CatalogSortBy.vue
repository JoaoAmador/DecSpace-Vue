<template>
  <v-app id="inspire">
    <v-toolbar  class="white--text" color="light-blue" dark tabs >
      <router-link a style="text-decoration:none;"   to="/method-catalog"> <v-btn flat><v-icon>arrow_back</v-icon></v-btn></router-link>
      <v-toolbar-title id="sorttitle">Sort</v-toolbar-title>
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
          <v-card-text>List various objects (only the name is needed) and then reorder them by their importance.
            The object on the left should be the most important and the object on the right should be the least important.</v-card-text>
        </v-card>

        <v-card v-if="item.id === 2"flat>
          <v-container>
          <v-card-text><strong>Objects</strong></v-card-text>
          <v-data-table id="table"
                        :headers="headers"
                        :items="table1"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
            </template>
          </v-data-table>
          </v-container>

          <v-card-text><strong>Order</strong></v-card-text>
          <ul class = 'draglist'>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Music</div>
              <p>Most Important</p>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Photography</div>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Movies</div>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Drawing</div>
              <p>Least Important</p>

            </li>
          </ul>
          <v-card-text><strong>Results</strong></v-card-text>
          <ul class = 'draglist'>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Music</div>
              <p>Most Important</p>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Photography</div>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Movies</div>
            </li>
            <li class = 'drop-obj'>
              <div class = 'drag-obj'>Drawing</div>
              <p>Least Important</p>
            </li>
          </ul>
          <v-subheader></v-subheader>
        </v-card>


        <v-card v-if="item.id === 3"flat>
          <template>
            <v-stepper  v-model="e1">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="e1 > 1">Import "Sort By" Method</v-stepper-step>
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
                  <v-card color="grey lighten-1" class="mb-5" >  <img src="../../assets/sort1.1.png" alt="Sort.js" height="400"></v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5"> <img src="../../assets/sort1.2.png" alt="Sort.js" height="400"></v-card>
                  <v-card color="grey lighten-1" class="mb-5"> <img src="../../assets/sort1.3.png" alt="Sort.js" height="400"></v-card>
                  <v-btn color="primary" @click.native="e1 = 1">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5"> <img src="../../assets/sort1.4.png" alt="Sort.js" height="400"></v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Back</v-btn>
                  <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
                  <v-subheader></v-subheader>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card color="grey lighten-1" class="mb-5"> <img src="../../assets/sort1.5.png" alt="Sort.js" height="400"></v-card>
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
            name: 'Photography',
          },
          {
            name: 'Music',
          },
          {
            name: 'Drawing',
          },
          {
            name: 'Movies',
          }
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
        headers: [
          {
            text: 'Name',
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
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

  #sorttitle {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 80%;
  }

  .sort-drop, .drop-obj {
    text-align: center;
    display: block;
    position: relative;
    padding: 20px;
    width: 140px;
    height: 140px;
    float: left;
  }

  .sort-drag, .drag-obj {
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 255, 0.8);
    color: white;
    text-align: center;
    padding-top: 40px;
    display: block;
  }

  .draglist {
    display: inline-block;
    margin: 0 auto;
  }


</style>
