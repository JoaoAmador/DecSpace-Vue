<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="elevation-12">
        <v-toolbar color="light-blue " dark>
          <v-toolbar-title class=" text-xs-center" >FAQ</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>New to DecSpace?</v-subheader>
            <v-expansion-panel>
              <v-expansion-panel-content>
                <div slot="header">What is DecSpace?</div>
                <v-card>
                  <v-card-text>DecSpace is a web application that makes use of MCDA methods to support the user during the decision process. For more information, check the About page.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-content>
                <div slot="header">What is MCDA?</div>
                <v-card>
                  <v-card-text>MCDA (Multi-Criteria Decision Analysis) is one of the fields of study of Operations Research.
                    It offers a wide variety of MCDA methods to support the user with the most diverse problems.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">Which MCDA methods are currently available?</div>
              <v-card>
                <v-card-text>Currently, the MCDA methods available in DecSpace are: CAT-SD, Inquiry, OrderBy, Sort and SRF.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-subheader>Signing up and logging in</v-subheader>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">How do I sign up?</div>
              <v-card>
                <v-card-text>On the upper right conner of the screen, you can find a sign up button.
                  If you click it, you are asked to give your email address and a password. After you fill those fields, click the "register" button.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">How do I log in?</div>
              <v-card>
                <v-card-text>Before you can log in, you have to make sure have signed up previously. If you have, then you should click the "Log In" button that can also be found on the upper right corner of the screen.
                  After you click it, insert the credentials you used to sign up and click the "Log In" button. You should be redirected to the dashboard.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">What if I forgot my password?</div>
              <v-card>
                <v-card-text>If you forgot your password, you can simply go the Forgot your password? page. There you should introduce the email address you used to sign up and click the "Recover Password". After that, a message is sent to that email address with the password previously defined.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-subheader>Projects</v-subheader>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">How do I create a new project?</div>
              <v-card>
                <v-card-text>After logging in, you are presented with your list of projects. To add a new one, insert the name of the new project in the respective field and click the "Add Project" button.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">What are the main funcionalities of this feature?</div>
              <v-card>
                <v-card-text>Besides creating new projects, in the "Projects" page, you can also:
                  Open project - go to the "Workspace", where it is possible to build and run a workflow with various methods.
                  Duplicate project - create a project similar to the one that was selected.
                  Delete project - permanently eliminate a certain a project.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">How do I change views?</div>
              <v-card>
                <v-card-text>By default, your projects are displayed in a "Table View", but it is possible to change to a "List View". To do that you just have to click . To change back to the "Table View", click .</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-subheader>Settings</v-subheader>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">How do I change my password?</div>
              <v-card>
                <v-card-text>To change your password, first you must go to the "Settings" page. After that, you are prompted with the "Password Reset" feature.
                  To change your password, you must introduce your current password and the password you want to change to. Just click the "Reset" button and you should have a new password!</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-subheader></v-subheader>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
</script>
