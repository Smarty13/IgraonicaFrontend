<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="/">Igraonica</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav v-if="computedIsLoggedIn">
        <!-- Meni za poslovodju -->
        <b-navbar-nav v-if="computedPozicija == 'Poslovodja'">
          <b-nav-item href="#">Posolovodja</b-nav-item>
        </b-navbar-nav>

        <!-- <div v-else-if="computedPozicija == 'Anoniman'">
          <span class="text-muted">Molimo ulogujte se</span>
        </div> -->

        <!-- Meni za ostale -->
        <b-navbar-nav v-else>
          <b-nav-item href="#">Nisi poslovodja</b-nav-item>
        </b-navbar-nav>

        <!-- Logout je uvek tu -->
        <b-navbar-nav v-if="computedPozicija != 'Anoniman'" class="ml-auto">
          <b-button size="sm" class="my-2 my-sm-0" @click="logout()">Logout</b-button>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>



    <router-view /> 
  </div>
</template>

<script>
import authService from './services/authentication.service';

export default {
  name: 'App',
  data: function() {
    return {
      isLoggedIn: null,
      pozicija: null
    }
  },
  methods: {
    logout() {
        authService.logout();
    }
    
  },
  created(){
    if(authService.getToken()) {
      this.isLoggedIn = true;
      this.pozicija = authService.getUser()['pozicija']['naziv'];
    }
    else {
      this.pozicija = "Anoniman"
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  },
  computed: {
    computedIsLoggedIn() {
      return this.isLoggedIn;
    },
    computedPozicija() {
      return this.pozicija;
    }
  }

}
</script>

<style>

</style>
