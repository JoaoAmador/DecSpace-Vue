<template>
  <v-app id="inspire">
  <div id="app">

  <p id="header">Project - {{$store.state.project}}</p>
    <v-flex xs12 sm6>
      <div class="text-xs-left">
        <div>
          <!-- Execute Area -->
          <v-btn color="white" fab small dark title = 'Execute Workflow' @click.native="hidden6 = !hidden6; dialog5 = false">
            <v-icon color="black">play_arrow</v-icon>
          </v-btn>

          <!-- Delete Area -->
          <v-btn color="red" fab small dark @click="deleteWorkflow()" title = 'Delete Workflow'>
            <v-icon color="black">delete</v-icon>
          </v-btn>

          <!-- Save Area -->
          <v-dialog v-model="dialog4" persistent max-width="800"  :overlay="true">
            <v-btn color="green" @click.stop="dialog4 = true" dark slot="activator"  fab small dark title = 'Save Workflow'>
            <v-icon color="black">save</v-icon>
          </v-btn>
            <v-card class="black--text">
              <v-toolbar tabs>
                <v-toolbar-title  id="title">Save Workflow</v-toolbar-title>
              </v-toolbar>
              <v-container fluid>
                <v-card-text>
                  <v-text-field prepend-icon="comment" name="Comment" label="Comment" type="text" v-model="comment"></v-text-field>
                </v-card-text>
              </v-container>
              <v-layout row wrap>
                <v-flex xs12>


                </v-flex>
              </v-layout>
              <v-toolbar tabs>
                <v-spacer></v-spacer>
                <v-btn class="black--text" flat @click.native="dialog4 = false, saveAs(comment)">Save</v-btn>
                <v-btn class="black--text" flat @click.native="dialog4 = false">Close</v-btn>
              </v-toolbar>
            </v-card>

          </v-dialog>

          <!-- Import Area -->
          <v-menu offset-y>
            <v-btn color="orange" fab small dark title = 'Import Workflow' slot="activator">
              <v-icon color="black" >import_export</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in imports" :key="index" v-if="item.title === 'Import Input File'" @click="Inputdatadialog = !Inputdatadialog">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile v-for="(item, index) in imports" :key="index" v-if="item.title === 'Import Workflow'" @click="ImportWorkflow = !ImportWorkflow">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile v-for="(item, index) in imports" :key="index" v-if="item.title === 'Import XMCDA Workflow'" @click="ImportXMCDAWorkflow = !ImportXMCDAWorkflow">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>

              <v-dialog v-model="Inputdatadialog" max-width="500px">
                <v-card color="white" class="black--text"  >
                    <v-toolbar tabs>
                      <v-toolbar-title  id="title">Import Input File</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                  <br>
                  <div class = 'modal-body'>

                    <div class = 'row'>
                      <div class = 'col-md-4'></div>
                      <input id = 'input-files' type = 'file' multiple>
                    </div>

                    <br>

                    <div class = 'row'>
                      <div class = 'col-md-5'></div>
                      <v-btn color="blue" class = 'white--text btn btn-primary col-md-2' >
                        Import
                      </v-btn>
                    </div>

                    <p><sub>Only CSV and JSON formats are accepted.</sub></p>

                  </div>
                    <v-toolbar tabs>
                      <v-spacer></v-spacer>
                      <v-btn class="black--text" flat @click.native="Inputdatadialog = false">Close</v-btn>
                    </v-toolbar>
                </v-card>
              </v-dialog>

              <v-dialog v-model="ImportWorkflow" max-width="500px">
                <v-card color="white" class="black--text"  >
                  <v-toolbar tabs>
                    <v-toolbar-title  id="title">Import Workflow</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <br>
                  <div class = 'modal-body'>

                    <div class = 'row'>
                      <div class = 'col-md-4'></div>
                      <input id = 'input-files' type = 'file' multiple>
                    </div>

                    <br>

                    <div class = 'row'>
                      <div class = 'col-md-5'></div>
                      <v-btn color="blue" class = 'white--text btn btn-primary col-md-2'>
                        Import
                      </v-btn>
                    </div>

                    <p><sub>Only ZIP format is accepted.</sub></p>

                  </div>
                  <v-toolbar tabs>
                    <v-spacer></v-spacer>
                    <v-btn class="black--text" flat @click.native="ImportWorkflow = false">Close</v-btn>
                  </v-toolbar>
                </v-card>
              </v-dialog>
            </v-list>
          </v-menu>

          <!-- Methods Area -->
          <v-dialog v-model="dialog" persistent max-width="800"  :overlay="true">
          <v-btn color="light-blue" @click.stop="dialog = true" dark slot="activator"  fab small dark title = 'Methods'>
            <v-icon color="black">library_books</v-icon>
          </v-btn>

            <v-card color="blue" class="white--text">
              <v-toolbar tabs>
                <v-toolbar-title  id="title">Methods</v-toolbar-title>
              </v-toolbar>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-list subheader>
                    <v-subheader>Local Methods</v-subheader>
                    <v-list-tile v-for="item in testar" :key="item.title" avatar @click="">
                      <v-list-tile-avatar>
                        <v-icon color="orange"> bookmark_border </v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <td class="justify-left layout px-0">
                        <v-btn v-if="item.title === 'Local Method'" icon @click.native="hidden7=!hidden7; dialog = false" class="mx-0" title="Add Method">
                          <v-icon :color="item.active ? 'cyan' : 'grey'" >add_circle</v-icon>
                        </v-btn>
                          <v-btn v-if="item.title === 'CAT-SD'" icon @click.native="hidden4=!hidden4; dialog = false" class="mx-0" title="Add Method">
                            <v-icon :color="item.active ? 'cyan' : 'grey'">add_circle</v-icon>
                          </v-btn>
                          <v-btn v-if="item.title === 'Inquiry'" icon @click.native="hidden5=!hidden5; dialog = false" class="mx-0" title="Add Method">
                            <v-icon :color="item.active ? 'cyan' : 'grey'">add_circle</v-icon>
                          </v-btn>
                          <v-btn v-if="item.title === 'Order By'" icon @click.native="hidden=!hidden; dialog = false" class="mx-0" title="Add Method">
                            <v-icon :color="item.active ? 'cyan' : 'grey'">add_circle</v-icon>
                          </v-btn>
                          <v-btn v-if="item.title === 'Sort'" icon @click.native="hidden2=!hidden2; dialog = false" class="mx-0" title="Add Method">
                            <v-icon :color="item.active ? 'cyan' : 'grey'">add_circle</v-icon>
                          </v-btn>
                          <v-btn v-if="item.title === 'SRF'" icon @click.native="hidden3=!hidden3; dialog = false" class="mx-0" title="Add Method" >
                            <v-icon :color="item.active ? 'cyan' : 'grey'">add_circle</v-icon>
                          </v-btn>
                          <v-btn icon :to="item.reference" class="mx-0" title="References">
                            <v-icon color="cyan">book</v-icon>
                          </v-btn>
                        </td>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>

                  <v-toolbar tabs>
                  <v-spacer></v-spacer>
                  <v-btn class="black--text" flat @click.native="dialog = false">Close</v-btn>
                  </v-toolbar>

              </v-card>
            </v-dialog>

          <!-- Archive Area -->
          <v-dialog v-model="dialog3" persistent max-width="800"  :overlay="true">
            <v-btn color="blue" @click.stop="dialog3 = true" dark slot="activator"  fab small dark title = 'Project Menu'>
              <v-icon color="black">archive</v-icon>
            </v-btn>
            <v-card class="black--text">
              <v-toolbar tabs>
                <v-toolbar-title  id="title">Project Menu</v-toolbar-title>
              </v-toolbar>
              <v-container fluid>
                <v-card-text>
                  {{$store.state.project}}

                  <v-card>
                   <br>

                  <v-list one-line subheader>
                    <v-card color="orange accent-2" >
                    <v-subheader class="black--text" inset>Saves</v-subheader>
                    </v-card>
                    <v-card color="grey lighten-3" >
                    <v-list-tile v-for="item in saves" :key="item.id" avatar @click="">
                      <v-list-tile-avatar>
                        <v-icon class='orange white--text'>save</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title  >{{ item  }}</v-list-tile-title>
                        <v-list-tile-sub-title >{{ item.date }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <td class="justify-left layout px-0"  >
                          <v-btn icon class="mx-0" title="Reload Workflow" @click="editItem(props.item)">
                            <v-icon color="teal">autorenew</v-icon>
                          </v-btn>
                          <v-btn icon class="mx-0" title="Export Workflow" @click.native="save">
                            <v-icon color="blue">cloud_download</v-icon>
                          </v-btn>
                          <v-btn icon class="mx-0" title="Delete Workflow" @click="deleteItem(props.item)">
                            <v-icon color="pink">delete</v-icon>
                          </v-btn>
                        </td>
                      </v-list-tile-action>
                    </v-list-tile>
                    </v-card>
                  </v-list>

                  </v-card>

                </v-card-text>
              </v-container>
              <v-layout row wrap>
                <v-flex xs12>


                </v-flex>
              </v-layout>

            <v-toolbar tabs>
              <v-spacer></v-spacer>
              <v-btn class="black--text" flat @click.native="dialog3 = false">Close</v-btn>
            </v-toolbar>

            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-flex>

    <div id = 'workspace'>
    <!-- SVG Area -->

      <!-- LocalMethod Template -->
      <template id = 'localmethodtemp' >

        <div :class="['module-template module-localM', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden7">
          <div id = 'localM' class = 'module-template module-localM  '>

            <a slot="activator"  @click.stop="dialog6 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -30%'>Local Method</a>

            <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
              <v-icon small>close</v-icon>
            </a>

            <button id = 'localM-input' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 3%; margin-left: -49%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -37%'>Input</span>

            <button id = 'localM-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 38%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 6.5%'>Output</span>
          </div>
        </div>
      </template>

      <!-- LocalMethod modal -->
      <v-dialog v-model="dialog6" persistent max-width="800"  :overlay="true">
        <v-card color="white" class="black--text"  >
          <v-card-title><div class="headline " id="title">Local Method</div></v-card-title>
          <p class = 'header-1'>Choose your method</p>
            <v-container grid-list-md>
              <v-select :items="listmethods" single-line label="Privacy Setting"  v-model="methodChoice.name" item-value="text"></v-select>
            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" flat @click.native="dialog6 = false, chooseMethod(methodChoice.name)">OK</v-btn>
            <v-btn color="black darken-1" flat @click.native="dialog6 = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Output Template -->
      <template id = 'outputfile-temp'>

          <div :class="['module-template module-outputfile', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden6">
            <div id = 'outputfile' class = 'module-template module-outputfile  '>

              <a slot="activator"  @click.stop="dialog5 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -20%'>Output File</a>

          <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
            <v-icon small>close</v-icon>
          </a>

          <button id = 'outputfile-input' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 2.5%; margin-left: 39%'></button>
          <span class = 'module-circle-span' style = 'margin-top: 1%; margin-left: 13%'>Output</span>
        </div>
          </div>
      </template>

      <v-dialog v-model="dialog5" persistent max-width="1600"  :overlay="true">
        <v-card color="white" class="black--text"  >
          <div>
            <v-toolbar tabs>
              <v-toolbar-title  id="title">Output File</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tabs
                slot="extension"
                v-model="tabs"
                fixed-tabs
                color="transparent"
              >
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#mobile-tabs-5-1" title="Data Table" class="primary--text">
                  <v-icon>table_chart</v-icon>
                </v-tab>
                <v-tab href="#mobile-tabs-5-2"  title="Graphic" class="primary--text">
                  <v-icon>graphic_eq</v-icon>
                </v-tab>
              </v-tabs>
            </v-toolbar>
            <v-tabs-items v-model="tabs" class="white elevation-1">
              <v-tab-item
                v-for="i in 2"
                :key="i"
                :id="'mobile-tabs-5-' + i"
              >
                <v-card v-if="i === 1">
                  <div id="subheader">
                    Order
                  </div>

                  <div class = 'row text-center'>
                    <ul class = 'draglist' >
                      <li class = 'sort-drop' v-for="item in sorttable">
                        <div class = 'sort-drag'>{{ item.name }}</div>

                        <div v-if = 'sorttable.length > 1'>
                          <p v-if = 'sorttable.indexOf(item) == 0' style = 'margin-top: 20%'>Most Important</p>
                          <p v-if = 'sorttable.indexOf(item)== sorttable.length - 1' style = 'margin-top: 20%'>Least Important</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br>
                </v-card>
                <v-card v-if="i === 2">
                  <v-card-text>
                    <v-btn @click.native="lineCH = !lineCH, barCH = false, dougCH= false, bubbCH=false"title="Line Chart" icon>
                      <v-icon color="teal">timeline</v-icon>
                    </v-btn>
                    <v-btn @click.native="barCH = !barCH, lineCH=false, dougCH= false, bubbCH=false"  title="Bar Chart" icon>
                      <v-icon color="teal">bar_chart</v-icon>
                    </v-btn>
                    <v-btn @click.native="dougCH = !dougCH, lineCH=false, barCH = false, bubbCH=false"  title="Doughnut Chart" icon>
                      <v-icon color="teal">donut_small</v-icon>
                    </v-btn>
                    <v-btn @click.native="bubbCH = !bubbCH, lineCH=false, barCH = false, dougCH=false"  title="Bubble Chart" icon>
                      <v-icon color="teal">bubble_chart</v-icon>
                    </v-btn>

                    <br>
                    <div class="medium">
                      <div id="subheader" v-show="lineCH">
                        Line Chart
                      </div>
                      <bar-chart v-show="lineCH">Line Chart</bar-chart>
                      <div id="subheader" v-show="barCH">
                        Bar Chart
                      </div>
                      <line-chart v-show="barCH"></line-chart>
                      <div id="subheader" v-show="dougCH">
                        Doughnut Chart
                      </div>
                      <doughnut v-show="dougCH"></doughnut>

                      <div id="subheader" v-show="bubbCH">
                        Bubble Chart
                      </div>
                      <bubble-chart v-show="bubbCH"></bubble-chart>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
          <v-toolbar tabs>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" flat @click.native="dialog5 = false">OK</v-btn>
          </v-toolbar>
        </v-card>
      </v-dialog>

      <!-- OrderBy Template -->
      <template id = 'orderbytemp' >

        <div :class="['module-template module-orderby', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden">
        <div id = 'orderby' class = 'module-template module-orderby  '>

          <a slot="activator"  @click.stop="dialog2 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -20%'>Order By</a>

          <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
            <v-icon small>close</v-icon>
          </a>

          <button id = 'orderby-criteria' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 3%; margin-left: -49%'></button>
          <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -37%'>Criteria</span>

          <button id = 'orderby-actions' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 15%; margin-left: -49%'></button>
          <span class = 'module-circle-span' style = 'margin-top: 13.5%; margin-left: -37%'>Actions</span>

          <button id = 'orderby-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 38%'></button>
          <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 6.5%'>Output</span>
        </div>
        </div>
      </template>

      <!-- OrderBy modal -->
       <v-dialog v-model="dialog2" persistent max-width="800"  :overlay="true">
         <v-card color="blue" class="white--text"  >
           <v-card-title><div class="headline " id="title">Order By</div></v-card-title>
           <!-- Criteria -->
           <p class = 'header-1'>Criteria</p>

           <p class = 'header-1'>Actions</p>
           <v-data-table
             :headers="headers"
             :items="items"
             hide-actions
             class="elevation-1"
           >
             <template slot="items" slot-scope="props">
               <v-layout row>
                 <v-subheader></v-subheader>
                 <v-flex xs8>
               <v-text-field
                 name="input-1-3"
                 label="Name"
                 single-line
               ></v-text-field>
                 </v-flex>
                 <td class="justify-center layout px-0">
                   <v-btn icon fab class="mx-0" @click.native="save">
                     <v-icon color="blue">add</v-icon>
                   </v-btn>
                   <v-btn icon fab class="mx-0" @click="editItem(props.item)">
                     <v-icon color="teal">edit</v-icon>
                   </v-btn>
                   <v-btn icon fab class="mx-0" @click="deleteItem(props.item)">
                     <v-icon color="pink">delete</v-icon>
                   </v-btn>
                 </td>
               </v-layout>

             </template>

           </v-data-table>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="white darken-1" flat @click.native="dialog2 = false">OK</v-btn>
           <v-btn color="white darken-1" flat @click.native="dialog2 = false">Close</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>

      <!-- SortBy Template -->
      <template id = 'sortbytemp'  >

        <div :class="['module-template module-sort', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden2" >
          <div id = 'sortby' class = 'module-template module-sort  '>

            <a slot="activator"  @click.stop="Sortdialog = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -10%'>Sort</a>

            <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
              <v-icon  small>close</v-icon>
            </a>

            <button id = 'sort-criteria' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 3%; margin-left: -49%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -37%'>Objects</span>

            <button id = 'sort-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 38%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 6.5%'>Output</span>
          </div>
        </div>
      </template>

      <!-- SortBy modal -->
      <v-dialog v-model="Sortdialog" persistent max-width="1000" :overlay="true">
        <v-card color="white" class="black--text"  >
          <v-toolbar tabs>
            <v-toolbar-title  id="title">Sort</v-toolbar-title>
          </v-toolbar>
          <br>
          <div id="subheader">
            Objects

            <v-container fluid>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Name:</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-10-2"
                    label="Enter Name"
                    value=""
                    class="input-group--focused"
                    v-model="editedItem.name"
                  ></v-text-field>

                </v-flex>

              </v-layout>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                @click.native="save"
              >
                Add
              </v-btn>

            </v-container>
            <v-data-table id="sorttable"
                          :headers="headers"
                          :items="sorttable"
                          hide-actions
                          class="elevation-5"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="justify-left layout px-0">
                  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </template>

            </v-data-table>
          </div>

          <div id="subheader">
            Order
          </div>

            <div class = 'row text-center'>
              <ul class = 'draglist' >
                <li class = 'sort-drop' v-for="item in sorttable" >
                      <div class = 'sort-drag' v-dragged="onDraggedForSort" >{{ item.name }}</div>

                  <div v-if = 'sorttable.length > 1'>
                    <p v-if = 'sorttable.indexOf(item) == 0' style = 'margin-top: 20%'>Most Important</p>
                    <p v-if = 'sorttable.indexOf(item)== sorttable.length - 1' style = 'margin-top: 20%'>Least Important</p>
                  </div>
                </li>
              </ul>
            </div>

            <v-toolbar tabs>

            <v-spacer></v-spacer>
            <v-btn color="black darken-1" flat @click.native="Sortdialog = false">OK</v-btn>
            </v-toolbar>

        </v-card>
      </v-dialog>

         <!-- SRF Template -->
      <template id = 'srftemp'  >

        <div :class="['module-template module-srf', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden3" >
          <div id = 'srf' class = 'module-template module-srf  '>

            <a slot="activator"  @click.stop="dialog2 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -20%'>SRF</a>

            <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
              <v-icon  small>close</v-icon>
            </a>

            <button id = 'srf-criteria' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 3%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -39%'>Criteria</span>

            <button id = 'srf-white-cards' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 13%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 11.5%; margin-left: -39%'>White Cards</span>

            <button id = 'srf-ranking' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 23%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 21.5%; margin-left: -39%'>Ranking</span>

            <button id = 'srf-ratio-z' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 33%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 31.5%; margin-left: -39%'>Ratio Z</span>

            <button id = 'srf-decimal-places' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 43%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 41.5%; margin-left: -39%'>Decimal Places</span>

            <button id = 'srf-weight-type' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 53%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 51.5%; margin-left: -39%'>Weight Type</span>

            <button id = 'srf-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 41%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 15.5%'>Output</span>
          </div>
        </div>
      </template>

      <!-- cat-sd Template -->
      <template id = 'cat-sdtemp'  >

        <div :class="['module-template module-cat-sd', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden4" >
          <div id = 'cat-sd' class = 'module-template module-cat-sd  '>

            <a slot="activator"  @click.stop="dialog2 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -20%'>CAT-SD</a>

            <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
              <v-icon  small>close</v-icon>
            </a>


            <button id = 'cat-sd-criteria' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 3%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -39.5%'>Criteria</span>

            <button id = 'cat-sd-scales' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 12%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 10.5%; margin-left: -39.5%'>Scales</span>

            <button id = 'cat-sd-functions' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 21%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 19.5%; margin-left: -39.5%'>Functions</span>

            <button id = 'cat-sd-actions' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 30%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 28.5%; margin-left: -39.5%'>Actions</span>

            <button id = 'cat-sd-categories' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 39%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 37.5%; margin-left: -40%'>Categories</span>

            <button id = 'cat-sd-reference-actions' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 48%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 46.5%; margin-left: -39.5%'>Reference Actions</span>

            <button id = 'cat-sd-interaction-effects' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 57%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 55.5%; margin-left: -40%'>Interaction Effects</span>

            <button id = 'cat-sd-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 42%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 18.5%'>Output</span>
          </div>
        </div>
      </template>

      <!-- Inquiry Template -->
      <template id = 'inquirytemp'  >

        <div :class="['module-template module-inquiry', {'dragged': dragged}]" v-dragged="onDragged" v-show="hidden5" >
          <div id = 'inquiry' class = 'module-template module-inquiry'>

            <a slot="activator"  @click.stop="dialog2 = true" class = 'module-circle-anchor'  style = 'margin-top: 0%; margin-left: -20%'>Inquiry</a>

            <a style = 'display: block; margin-top: 0%; margin-left: 87%'  >
              <v-icon  small>close</v-icon>
            </a>

            <button id = 'inquiry-subject' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 3%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: -40%'>Subject</span>

            <button id = 'inquiry-description' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 13%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 11.5%; margin-left: -40%'>Description</span>

            <button id = 'inquiry-emails' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 23%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 21.5%; margin-left: -40%'>Specialists' Emails</span>

            <button id = 'inquiry-characterization-questions' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 33%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 31.5%; margin-left: -40%'>Characterization Questions</span>

            <button id = 'inquiry-questions' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 43%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 41.5%; margin-left: -40%'>Q-Sort Questions</span>

            <button id = 'inquiry-color-scheme' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 53%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 51.5%; margin-left: -40%'>Q-Sort Color Scheme</span>

            <button id = 'inquiry-scale' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 63%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 61.5%; margin-left: -40%'>Q-Sort Scale</span>

            <button id = 'inquiry-glossary' type = 'button' class = 'module-circle module-circle-input'  style = 'margin-top: 73%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 71.5%; margin-left: -40%'>Glossary</span>

            <button id = 'inquiry-suggestions' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 83%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 81.5%; margin-left: -40%'>Suggestions</span>

            <button id = 'inquiry-personalized-email' type = 'button' class = 'module-circle module-circle-input' style = 'margin-top: 93%; margin-left: -48%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 91.5%; margin-left: -40%'>Personalized Email</span>

            <button id = 'inquiry-output' type = 'button' class = 'module-circle module-circle-output' style = 'margin-top: 3%; margin-left: 40.5%'></button>
            <span class = 'module-circle-span' style = 'margin-top: 1.5%; margin-left: 18%'>Output</span>
          </div>
        </div>
      </template>

    </div>

    <span style = 'display: inline-block;' id="connect">Creating Connection:</span>
    <div class = 'connection-circle'   ></div>
  </div>
  </v-app>
</template>

<script>
  import LineChart from '../Graphics/LineChart'
  import BarChart from '../Graphics/BarChart'
  import Doughnut from '../Graphics/Doughnut'
  import BubbleChart from '../Graphics/BubbleChart'
  //import SortDataService from './Methods/SortDataService'

  export default {
    components: { LineChart, BarChart, Doughnut, BubbleChart},
    data: () => ({
      selected: [2],
      comment: null,
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      Sortdialog: false,
      Inputdatadialog: false,
      ImportWorkflow: false,
      methodChoice: {
        name: '',
      },
      new_object: {
        name: '',
      },
      tabs: null,
      sorttable: [],
      hidden: false,
      hidden2: false,
      hidden3: false,
      hidden4: false,
      hidden5: false,
      hidden6: false,
      hidden7: false,
      lineCH: true,
      barCH: false,
      dougCH: false,
      bubbCH: false,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      clientX: 0,
      clientY: 0,
      dragged: false,
      modules: [],
      valid: false,
      editedIndex: -1,
      editedItem: {
        name: ''
      },
      defaultItem: {
        name: ''
      },
      listmethods: [
        { text: 'CAT-SD' },
        { text: 'Inquiry' },
        { text: 'Order By' },
        { text: 'Sort' },
        { text: 'SRF' },
      ],
      headers: [
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          value: 'name'
        }
      ],
      headersArchive: [
        {
          text: 'Comment',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Creation Date',
          align: 'left',
          sortable: false,
          value: 'name'
        },

      ],
      testar: [
        { active: false, title: 'Local Method', reference: '/method-catalog'},
        { active: false, title: 'CAT-SD', reference: "/method-catalog/CAT-SD"},
        { active: false, title: 'Inquiry', reference: "/method-catalog/Inquiry"},
        { active: false, title: 'Order By', reference: "/method-catalog/OrderBy"},
        { active: true, title: 'Sort', reference: "/method-catalog/SortBy"},
        { active: false, title: 'SRF', reference: "/method-catalog/SRF"},
      ],
      imports: [
        { title: 'Import Input File'},
        { title: 'Import Workflow' },
        { title: 'Import XMCDA Workflow' }
      ],
      items: [
        {
          value: false,
        }
      ],
      saves: [
        {name: "save1", date: "11-06-2018", icon:"save", iconClass: 'orange white--text'},
        {name: "save2", date: "11-06-2018", icon:"save", iconClass: 'orange white--text'}
      ]
    }),
    methods: {
      onDragged({el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last}) {
        if (first) {
          this.dragged = true
          return
        }
        if (last) {
          this.dragged = false
          return
        }
        var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
        var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
        el.style.left = l + deltaX + 'px'
        el.style.top = t + deltaY + 'px'
      },
      onDraggedForSort({el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last}) {
        if (first) {
          this.dragged = true
          return
        }
        if (last) {
          this.dragged = false
          return
        }
        var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0


        el.style.left = l + deltaX + 'px'

      },
      deleteItem(item) {
        const index = this.sorttable.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.sorttable.splice(index, 1)
      },
      deleteWorkflow() {
        confirm('Are you sure you want to delete your workflow?')

      },
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.sorttable[this.editedIndex], this.editedItem)
        } else {
          this.sorttable.push(this.editedItem)
        }
        this.close()
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      chooseMethod(meth) {
            console.log(meth)
        if(meth === "Sort"){
              console.log("entrou")
          this.items.push(this.methodChoice)


        }
      },

      saveAs (comment) {
        this.$http.post('http://localhost:8082/saveproject', {
          username: this.$store.state.user,
          name: this.$store.state.project,
          saveFile: comment,
        }).then(function (response) {
        })
      },

      initialize () {
        this.$http.get('http://localhost:8082/getprojects').then(function(response) {
          var id = [];
          var sv = [];
          console.log(response)
          for(id in response.data)
            if(response.data[id].username === this.$store.state.user && response.data[id].name === this.$store.state.project)
              for(sv in response.data[id].saveFile)
                  this.saves.push(response.data[id].saveFile[sv]);
        });
        this.saves = [
        ]
      },
    },
    created () {
      this.initialize()
    },
  }
</script>


<style scoped>

  .medium {
    max-width: 600px;
    margin:  10px auto;
  }

  #title {
    justify-content: flex-start !important;
    max-width: 1600px;
    width: 100%;
  }

  #button {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 15%;
    margin-left: 35%;


  }

  #connect {
    justify-content: flex-start !important;
    margin-left: 80%;
    margin-top: 2%;

  }

  .module-template {
    position: absolute;

    background-color: #d6d6c2;
    color: black;

    border: black 1px solid;

    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }

  .module-inputfile {
    height: 46px;
    width: 150px;
  }

  .module-localM {
    height: 61.5px;
    width: 140px;
  }

  .module-orderby {
    height: 61.5px;
    width: 140px;
  }

  .module-sort {
    height: 45.5px;
    width: 140px;
  }

  .module-cat-sd {
    height: 146.5px;
    width: 190px;
  }

  .module-inquiry {
    height: 216px;
    width: 190px;
  }

  .module-srf {
    height: 131.5px;
    width: 170px;
  }

  .module-outputfile {
    height: 65px;
    width: 175px;
    background-color: #87EC73;
    color: black;
  }


  #workspace {
    height: 55vh;
    border: black 1px solid;
    margin-top: 0.5%;
    margin-left: 0.2%;
  }

  #svg {
    width: 100%;
    height: 100%;
  }

  #header {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 5px;
    font-size: 30px;
    line-height: 1.5;
  }

  .module-circle {
    position: absolute;
    width: 12px;
    height: 12px;
    border: black 1px solid;
    padding: 0;
  }

  .module-circle-input {
    background-color: yellow;
  }

  .module-circle-output {
    background-color: red;
  }

  .module-circle-span {
    position: absolute;
    font-size: 12px;
    color: black;
  }

  .module-circle-anchor {
    color: black;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
  }

  /*** CONNECTION STATUS ***/

  .connection-circle {
    display: inline-block;
    border: 1px solid black;
    width: 20px;
    height: 20px;
  }

  .green-light {
    background-color: #40ff00;
  }

  .red-light {
    background-color: #ff3300;
  }

  /*** CONNECTOR LINES ***/

  line {
    stroke: green;
    stroke-width: 3;
  }

  line:hover {
    stroke-width: 5;
  }

  /*** MODALS ***/

  .custom-modal .modal-dialog {
    cursor: default;
    width: 95%;
  }

  /*** Sort ***/

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sort-drag {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: move;
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

  .sort-drag.dragging {
    opacity: 0.5;
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

  .sort-drop.drag-enter {
    border: solid 1px red;
  }

  .sort-drop span.title {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 20px;
    margin-left: -100px;
    margin-top: -10px;
  }

  .sort-drop div {
    position: relative;
    z-index: 2;
  }

  .draglist {
    display: inline-block;
    margin: 0 auto;
  }


  #headerbutt{
    left: 40%
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
