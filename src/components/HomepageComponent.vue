<template>
    <h1 class="display-1">Homepage</h1>
</template>

<script>
import authService from '../services/authentication.service';

export default {
    created() {
        let pozicija = null;
        if(!authService.getToken()) {
            pozicija = "Anoniman";
        } else {
            pozicija = authService.getUser()['pozicija']['naziv'];
        }
        console.log(pozicija);
        if(pozicija == "Poslovodja") {
            console.log('poslovodja');
            this.$router.push('/register');
        } 
        else if (pozicija == "Anoniman") {
            console.log('neaut');
            this.$router.push('/login');
        }
        else {
            console.log('radnik')
            this.$router.push('/pica');
        }
    }
}
</script>

<style>

</style>