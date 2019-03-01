<template>
  <v-app id="inspire">
    <v-toolbar  class="white--text" color="light-blue" dark tabs >
      <router-link a style="text-decoration:none;"   to="/method-catalog"> <v-btn flat><v-icon>arrow_back</v-icon></v-btn></router-link>
      <v-toolbar-title id="inquititle">Inquiry</v-toolbar-title>
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
          <v-card-text>Mostly used for obtaining an opinion, judgment or choice consensus.
            It is divided in various rounds. In each round, a survey is sent to the specialists.
            The Q-Sort technique is used to answer the surveys.</v-card-text>
          <template>
            <div class="text-xs-center">
            </div>
          </template>
        </v-card>


        <v-card v-if="item.id === 2"flat>
          <v-card-text><strong>Criteria</strong></v-card-text>
          <p>Music Artists<p>

          <br>

          <v-container>
          <v-card-text><strong>Specialists' Emails</strong></v-card-text>
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

          <br>

          <v-container>
          <v-card-text><strong>Questions</strong></v-card-text>
          <v-data-table id="table2"
                        :headers="headers2"
                        :items="table2"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.privacy }}</td>
            </template>
          </v-data-table>
          </v-container>

          <br>

          <v-card-text><strong>Suggestions Toggle</strong></v-card-text>

          <p>Yes</p>

          <br>

          <v-card-text><strong>Results</strong></v-card-text>

          <br>

          <v-card-text><strong>Log</strong></v-card-text>

          <br>

          <v-card-text><strong>Round 1</strong></v-card-text>

          <br>

          <v-card-text><strong>Survey Link</strong></v-card-text>
          <p>http://decspace.sysresearch.org/content/project-management/inquiry-survey.html?round=1</p>

          <br>

          <v-card-text><strong>Status</strong></v-card-text>

          <p>Ended</p>

          <br>

          <v-container>
          <v-card-text><strong>Specialists That Answered</strong></v-card-text>
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

          <br>

          <p><strong>Number of Answers:</strong> 2</p>

          <br>

          <v-container>
          <v-card-text><strong>Suggestions</strong></v-card-text>
          <v-data-table id="table4"
                        :headers="headers4"
                        :items="table4"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.privacy }}</td>
            </template>
          </v-data-table>
          </v-container>

          <br>

          <p><strong>Number of Suggestions:</strong> 3</p>

          <!-- Horizontal Divider -->
          <br><hr class = 'custom-hr'>

          <br>

          <v-card-text><strong>Output</strong></v-card-text>

          <br>

          <v-container>
          <v-card-text><strong>Questions</strong></v-card-text>
          <v-data-table id="table5"
                        :headers="headers5"
                        :items="table5"
                        hide-actions
                        class="elevation-5"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.privacy }}</td>
              <td class="text-xs-center">{{ props.item.score }}</td>
              <td class="text-xs-center">{{ props.item.average }}</td>
            </template>
          </v-data-table>
          </v-container>

          <br>

          <p><strong>Number of Questions:</strong> 15</p>

          <br>
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
        e1:0,
        items: [
          {
            title: "Description",
            id: 1
          },
          {
            title: "Example",
            id: 2
          },
          {
            title: "Step by Step",
            id: 3
          },

        ],
        e1: 0,
        headers: [
          {
            text: 'Email Adress',
            align: 'center',
            sortable: false,
            value: 'name'
          }
          ],
        headers2: [
          {
            text: 'Title',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Description',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        headers3: [
          {
            text: 'Email Address',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Answer Submission Date',
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
        headers4: [
          {
            text: 'Title',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Description',
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
        headers5: [
          {
            text: 'Title',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Description',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Total Score',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Average Score',
            align: 'center',
            sortable: false,
            value: 'name'
          }
        ],
        table1: [
          {
            name: 'decspace2017@gmail.com',
          },
          {
            name: 'decspace2017@ist.utl.pt',
          }
          ],
        table2: [
          {
            name: 'The White Stripes',
            privacy: '2 / Rock'
          },
          {
            name: 'Kendrick Lamar',
            privacy: '1 / Hip-Hop'
          },
          {
            name: 'The Kills',
            privacy: '2 / Rock'
          },
          {
            name: 'Arctic Monkeys',
            privacy: '4 / Rock'
          },
          {
            name: 'Orelha Negra',
            privacy: '5 / Hip-Hop'
          },
          {
            name: 'Miles Davis',
            privacy: '1 / Jazz'
          },
          {
            name: 'Queens Of The Stone Age',
            privacy: '5 / Rock'
          },
          {
            name: 'Beck',
            privacy: '1 / Alternative'
          },
          {
            name: 'Lorde',
            privacy: '1 / Pop'
          },
          {
            name: 'The Raconteurs',
            privacy: '4 / Rock'
          },
          {
            name: 'Bob Dylan',
            privacy: '1 / Folk'
          },
          {
            name: 'Iggy Pop',
            privacy: '1 / Punk'
          },
          {
            name: 'Royal Blood',
            privacy: '2 / Rock'
          },
          {
            name: 'The Black Keys',
            privacy: '2 / Rock'
          },
          {
            name: 'The Dead Weather',
            privacy: '4 / Rock'
          }
        ],
        table3: [
          {
            name: 'decspace2017@gmail.com',
            privacy: '13-6-2017 15:45:02 '
          },
          {
            name: 'decspace2017@ist.utl.pt',
            privacy: '14-5-2016 02:11:15 '
          }
        ],
        table4: [
          {
            name: 'Michael Jackson',
            privacy: '1 / Pop '
          },
          {
            name: 'Jack White',
            privacy: '1 / Rock'
          },
          {
            name: 'Lillie Mae',
            privacy: '1 / Country'
          }
        ],
        table5: [
          {
            name: 'The White Stripes',
            privacy: '2 / Rock',
            score: '1',
            average: '0.5'
          },
          {
            name: 'Kendrick Lamar',
            privacy: '1 / Hip-Hop',
            score: '1',
            average: '0.5'
          },
          {
            name: 'The Kills',
            privacy: '2 / Rock',
            score: '-1',
            average: '-0.5'
          },
          {
            name: 'Arctic Monkeys',
            privacy: '4 / Rock',
            score: '1',
            average: '0.5'
          },
          {
            name: 'Orelha Negra',
            privacy: '5 / Hip-Hop',
            score: '-3',
            average: '-1.5'
          },
          {
            name: 'Miles Davis',
            privacy: '1 / Jazz',
            score: '3',
            average: '1.5'
          },
          {
            name: 'Queens Of The Stone Age',
            privacy: '5 / Rock',
            score: '-2',
            average: '-1'
          },
          {
            name: 'Beck',
            privacy: '1 / Alternative',
            score: '0',
            average: '0'
          },
          {
            name: 'Lorde',
            privacy: '1 / Pop',
            score: '-3',
            average: '-1.5'
          },
          {
            name: 'The Raconteurs',
            privacy: '4 / Rock',
            score: '0',
            average: '0'
          },
          {
            name: 'Bob Dylan',
            privacy: '1 / Folk',
            score: '-1',
            average: '-0.5'
          },
          {
            name: 'Iggy Pop',
            privacy: '1 / Punk',
            score: '0',
            average: '0'
          },
          {
            name: 'Royal Blood',
            privacy: '2 / Rock',
            score: '0',
            average: '0'
          },
          {
            name: 'The Black Keys',
            privacy: '2 / Rock',
            score: '2',
            average: '1'
          },
          {
            name: 'The Dead Weather',
            privacy: '4 / Rock',
            score: '2',
            average: '1'
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

  #inquititle {
    justify-content: flex-start !important;
    max-width: 1500px;
    width: 80%;
  }
</style>
