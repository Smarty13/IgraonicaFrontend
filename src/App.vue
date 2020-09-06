<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">Igraonica</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav v-if="computedIsLoggedIn">
        <!-- Meni za poslovodju -->
        <b-navbar-nav v-if="computedPozicija == 'Poslovodja'">
        <b-nav-item href="#">Posolovodja</b-nav-item>
        </b-navbar-nav>




        <!-- Meni za ostale -->
        <b-navbar-nav v-else>
        <b-nav-item href="#">Nisi poslovodja</b-nav-item>
        </b-navbar-nav>



        <!-- Logout je uvek tu -->
        <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" @click="logout()">Logout</b-button>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <router-view /> 
  </div>
</template>

<script>
import authService from './services/authentication.service';
import LoginComponent from './components/auth/LoginComponent';
import OkvirComponent from './components/OkvirComponent';

export default {
  name: 'App',
  data: function() {
    return {
      isLoggedIn: null
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
    }
    else {
      this.isLoggedIn = false;
      this.$router.push('/login');

    }
  },
  computed: {
    computedIsLoggedIn() {
      return this.isLoggedIn;
    }
  }

}
</script>

<style>

</style>
