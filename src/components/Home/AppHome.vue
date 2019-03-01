<template>
    <v-app light>
      <v-content>
        <section>
          <v-parallax>
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="../../assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="black--text mb-2 display-1 text-xs-center">A multi-criteria decision analysis framework</h1>
            <div class="black--text subheading mb-3 text-xs-center">Many more features to come!</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
            router-link a style="text-decoration:none;" to="/workspaceAnonymous"
            >
              Try it now!
            </v-btn>
          </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">A possible solution to various multi-criteria problems with the use of the available methods.</h2>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">explore</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Explore various MCDA methods</div>
                      </v-card-title>
                      <v-card-text>
                        Method Catalog - present a collection of the descriptions of all available methods, so that new users don't have to blindly choose (or research in other sites) the most appropriate method to their new project.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">create</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Create projects and methods</div>
                      </v-card-title>
                      <v-card-text>
                        User Differentiation - users with different levels of experience with web applications and MCDA methods get to work in different manners, so that they can be as efficient as possible. This is accomplished by providing different views to the different users.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">share</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Share your results with others</div>
                      </v-card-title>
                      <v-card-text>
                        Result Comparison - problems of the same nature may have solutions structured in the same way, therefore these kind of results can be directly compared with each other for a better perspective on them.
                        Result Sharing - the results of a certain project (or just a workflow) can be shared with other users.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Info</div>
                  </v-card-title>
                  <v-card-text>
                    DecSpace is a web application that makes use of MCDA methods to support the user (or decision maker) during the decision process by giving a possible solution to the given problem.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-list class="transparent">
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>21-999-999</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Lisboa, PT</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>decspace@gmail.com</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
      </v-content>
    </v-app>
</template>
