<template>
  <v-app id="inspire">
    <v-toolbar  class="white--text" color="light-blue" dark tabs >
      <router-link a style="text-decoration:none;"   to="/method-catalog"> <v-btn flat><v-icon>arrow_back</v-icon></v-btn></router-link>
      <v-toolbar-title id="srftitle">SRF</v-toolbar-title>
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
          <v-card-text>Mainly used for determining the weights of a certain criteria set with a revised Simos' procedure
            It is available as a standalone method, but it is also integrated with other methods that can make use of it.</v-card-text>
          <template>
            <div class="text-xs-center">
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
              <td class="text-xs-center">{{ props.item.name }}</td>
            </template>
          </v-data-table>
          </v-container>

          <v-container>
          <v-card-text><strong>Ranking</strong></v-card-text>

          <div class = 'row'>
            <div class = 'col-md-2'>Most Important</div>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'criteria-card undraggable-card' title = 'Consumption'>Consumption</div>
                </li>
                <li>
                  <div class = 'criteria-card undraggable-card' title = 'Safety'>Safety</div>
                </li>
              </ul>
            </div>
          </div>

          <br>

          <div class = 'row'>
            <div class = 'col-md-2'></div>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'white-card undraggable-card'></div>
                </li>
                <li>
                  <div class = 'white-card undraggable-card'></div>
                </li>
              </ul>
            </div>
          </div>

          <br>

          <div class = 'row'>
            <div class = 'col-md-2'></div>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'criteria-card undraggable-card' title = '0-100'>0-100</div>
                </li>
                <li>
                  <div class = 'criteria-card undraggable-card' title = 'Power'>Power</div>
                </li>
              </ul>
            </div>
          </div>

          <br>

          <div class = 'row'>
            <div class = 'col-md-2'></div>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'criteria-card undraggable-card' title = 'Price'>Price</div>
                </li>
              </ul>
            </div>
          </div>

          <br>

          <div class = 'row'>
            <div class = 'col-md-2'></div>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'white-card undraggable-card'></div>
                </li>
              </ul>
            </div>
          </div>

          <br>

          <div class = 'row'>

            <div class = 'col-md-9 srf-drop' ng-drop = 'true'>
              <ul class = 'draggable-objects'>
                <li>
                  <div class = 'criteria-card undraggable-card' title = 'CO2'>CO2</div>
                </li>
              </ul>
            </div>
            <div class = 'col-md-2'>Least Important</div>
          </div>
          </v-container>

          <v-card-text><strong>Other Parameters</strong></v-card-text>
          <!-- Example of Ratio Z -->
          <p><strong>Ratio Z</strong>: 4</p>

          <!-- Example of Number Of Decimal Places -->
          <p><strong>Number Of Decimal Places</strong>: 1</p>

          <!-- Example of Weight Type -->
          <p><strong>Weight Type</strong>: Normalized</p>

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
                  <v-stepper-step step="1" :complete="e1 > 1">Import "SRF" Method</v-stepper-step>
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
            name: '0-100',
          },
          {
            name: 'CO2',
          },
          {
            name: 'Consumption',
          },
          {
            name: 'Power',
          },
          {
            name: 'Price',
          },
          {
            name: 'Safety',
          },
        ],
        table3: [
          {
            name: '0-100',
            privacy: "15.6",
          },
          {
            name: 'CO2',
            privacy: "6.2",
          },
          {
            name: 'Consumption',
            privacy: "25",
          },
          {
            name: 'Power',
            privacy: "15.6",
          },
          {
            name: 'Price',
            privacy: "12.5",
          },
          {
            name: 'Safety',
            privacy: "25.1",
          },
        ],
        headers: [
          {
            text: 'Criterion Name',
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
        headers3: [
          {
            text: 'Criterion Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Normalized Weight', align: 'center', sortable: false, value: 'privacy' }
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

  #srftitle {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 80%;
  }

  #i {
    margin-top: 5%;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .srf-drag {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .srf-drag {
    width: 120px;
    height: 45px;
    cursor: move;
    overflow: hidden;
    border: solid 1px black;
    margin-top: 10%;
  }

  .white-card {
    background: white;
    color: black;
  }

  .criteria-card {
    background: black;
    color: white;
  }

  .undraggable-card {
    width: 120px;
    height: 45px;
    overflow: hidden;
    border: solid 1px black;
    margin-top: 10%;
  }

  ul.draggable-objects:after {
    display: block;
    content: "";
    clear: both;
  }

  .draggable-objects ul {
    display: table-row;
  }

  .draggable-objects li {
    display: inline-block;
    width: 120px;
    height: 45px;
    margin-left: 1%;
  }

  .srf-drag.drag-over {
    border: solid 1px black;
  }

  .srf-drag.dragging {
    opacity: 0.5;
  }

  .srf-drop {
    background: rgba(208, 208, 208, 0.5);
    text-align: center;
    width: 100%;
    height: 74px;
    position: relative;
    display: table;
    border: 1px solid black;
  }

  .srf-drop.drag-enter {
    border: 1px solid blue;
  }

  .srf-drop div {
    position: relative;
    z-index: 2;
  }


</style>
