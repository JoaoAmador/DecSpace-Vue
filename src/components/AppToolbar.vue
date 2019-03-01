<template>
  <div>
  <v-toolbar color="light-blue darken-4" dark>
    <div class="hidden-md-and-up">
      <v-toolbar-side-icon v-if="$store.state.isUserLoggedIn" @click.stop="drawer2 = !drawer2"></v-toolbar-side-icon>
    </div>
    <div class="hidden-sm-and-down">
    <v-toolbar-side-icon  v-if="$store.state.isUserLoggedIn" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </div>
    <router-link a style="text-decoration:none;" to="/" ><v-toolbar-title class="white--text" >DecSpace</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <div class="hidden-md-and-up">
      <router-link a style="text-decoration:none;"  v-if="!$store.state.isUserLoggedIn" to="/signup"><v-btn dark >Sign Up</v-btn></router-link>
      <router-link a style="text-decoration:none;" v-if="!$store.state.isUserLoggedIn" to="/login"><v-btn dark >Login</v-btn></router-link>
      <router-link a style="text-decoration:none;" v-if="$store.state.isUserLoggedIn" to="/"><v-btn dark v-on:click="logout()">Logout</v-btn></router-link>
    </div>
    <div class="hidden-sm-and-down">
      <router-link a style="text-decoration:none;" v-if="$store.state.isUserLoggedIn && $store.state.email === 'admin@admin'"  to="/admin"><v-btn flat>Administrator</v-btn></router-link>
      <router-link a style="text-decoration:none;" to="/method-catalog"><v-btn flat>Method Catalog</v-btn></router-link>
      <router-link a style="text-decoration:none;" to="/faq"><v-btn flat>FAQ</v-btn></router-link>
      <router-link a style="text-decoration:none;"  v-if="!$store.state.isUserLoggedIn" to="/signup"><v-btn dark >Sign Up</v-btn></router-link>
      <router-link a style="text-decoration:none;" v-if="!$store.state.isUserLoggedIn" to="/login"><v-btn dark >Login</v-btn></router-link>
      <router-link a style="text-decoration:none;" v-if="$store.state.isUserLoggedIn" to="/"><v-btn dark v-on:click="logout()">Logout</v-btn></router-link>
    </div>
  </v-toolbar>
    <v-navigation-drawer
      dark
      temporary
      absolute
      v-model="drawer"
      height="400px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-avatar class="indigo">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> {{$store.state.user}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :to="item.link" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title >  {{ item.title }}  </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      dark
      temporary
      absolute
      v-model="drawer2"
      height="400px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-avatar class="indigo">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> {{$store.state.user}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items2" :to="item.link" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title >  {{ item.title }}  </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import auth from '../auth'
  export default {
    data: function() {
      return {
        drawer: null,
        drawer2: null,
        items: [
          { title: 'My Projects', icon: 'star', link:"/myprojects2" },
          { title: 'Public Projects', icon: 'public', link:"/publicprojects2"  },
          { title: 'Settings', icon: 'settings', link:"/settings2"  }
        ],
        items2: [
          { title: 'My Projects', icon: 'star', link:"/myprojects2" },
          { title: 'Public Projects', icon: 'public', link:"/publicprojects2"  },
          { title: 'Settings', icon: 'settings', link:"/settings2"  },
          { title: 'Method Catalog', icon: 'search', link:"/method-catalog"  },
          { title: 'FAQ', icon: 'question_answer', link:"/faq"  }
        ]
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push('/')
      },
    }
  }
</script>
