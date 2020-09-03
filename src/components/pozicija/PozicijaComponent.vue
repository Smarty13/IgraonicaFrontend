<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div v-if="pozicija!=null" class="card text-white bg-secondary mb-3" style="max-width: 18 rem;">
            <div class="card-header">
                <div>
                    <h5 class="cart-title">Pozicija</h5>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <p class="card-text">{{pozicija.naziv}}</p>
                </div>
            </div>
            <div class="card-footer">
                <div>
                    <button type="button" class="btn btn-dark mr-5" @click="zavrsi">U redu</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pozicijaService from '../../services/pozicija.service';
export default {
    data: function(){
        return {
            pozicija: {
                naziv: ""
            }
        }
    },
    methods: {
        zavrsi(){
            this.$router.push('/pozicije');
        }
    },
    created(){
        pozicijaService.getPozicijaById(this.$route.params.id)
        .then((res) => {
            this.pozicija=res['data']
        })
        .catch((err) => {
            this.$toastr.e('Pozicija ne postoji', "Greska");
        });
    }
}
</script>
<style>

</style>