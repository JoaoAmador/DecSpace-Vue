<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-card>
              <v-toolbar color="light-blue" dark>
                <v-toolbar-title text-xs-center>Method Catalog</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon title="Search">
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon title="Settings" @click.native.stop="dialog = true">
                  <v-icon>settings</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list two-line>
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile avatar v-else :key="item.title" router-link :to="item.path">
                    <v-list-tile-action>
                      <v-icon color="orange"> bookmark_border </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-if=checkbox v-html="item.description"></v-list-tile-sub-title>
                      <v-list-tile-sub-title v-if=checkbox3 v-html="item.references"></v-list-tile-sub-title>
                      <v-list-tile-sub-title v-if=checkbox2 v-html="item.date"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">Method Catalog Preferences</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-checkbox
                      v-model="checkbox"
                      label="Description"
                      @change="$v.checkbox.$touch()"
                      @blur="$v.checkbox.$touch()"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkbox3"
                      label="References"
                      @change="$v.checkbox3.$touch()"
                      @blur="$v.checkbox3.$touch()"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkbox2"
                      label="Date"
                      @change="$v.checkbox2.$touch()"
                      @blur="$v.checkbox2.$touch()"
                    ></v-checkbox>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialog2" persistent max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">Order</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-checkbox
                      v-model="checkbox4"
                      label="Date"
                      @change="$v.checkbox4.$touch()"
                      @blur="$v.checkbox4.$touch()"
                    ></v-checkbox>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="dialog2 = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        dialog2: false,
        checkbox: true,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        items: [
          {header: 'Local Methods'},
          {
            title: 'AdditiveAggregation',
            description: "Orders a group of options by their calculated aggregated value based on criteria.",
            references: "link",
            date: '16-08-2017',
            path: "/method-catalog/AdditiveAggregation"
          },
          {divider: true, inset: true},
          {
            title: 'CAT-SD',
            description: "CAT-SD is a multiple criteria decision aiding method for nominal classification problems.",
            references: "link",
            date: '6-08-2017',
            path: "/method-catalog/CAT-SD"
          },
          {divider: true, inset: true},
          {
            title: 'Inquiry',
            description: "Mostly used for obtaining an opinion, judgment or choice consensus.",
            references: "link",
            date: '11-01-2018',
            path: "/method-catalog/Inquiry"
          },
          {divider: true, inset: true},
          {
            title: 'Order By',
            description: "Orders a given group of actions by a certain criterion in a specific direction (ascendant and descendant).",
            references: "link",
            date: '12-02-2018',
            path: "/method-catalog/OrderBy"
          },
          {divider: true, inset: true},
          {
            title: 'Sort',
            description: "List various objects (only the name is needed) and then reorder them by their importance.",
            references: "link",
            date: '12-12-2017',
            path: "/method-catalog/SortBy"
          },
          {divider: true, inset: true},
          {
            title: 'SRF',
            description: "Mainly used for determining the weights of a certain criteria set with a revised Simos' procedure.",
            references: "link",
            date: '7-03-2017',
            path: "/method-catalog/SRF"
          },
          {divider: true, inset: true},
        ],
      }
    }
  }
</script>
