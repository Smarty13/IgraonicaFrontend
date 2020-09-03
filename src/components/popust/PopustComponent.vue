<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div v-if="popust!=null" class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <div>
                    <h5 class="card-title">Popust</h5>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h6 class="card-subtitle mb-2 text">{{popust.oznaka_popust}}</h6>
                    <p class="card-text">{{popust.vrednost_popust}}</p>
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
import popustService from '../../services/popust.service';

export default {
    data: function() {
        return{
            popust: {
                oznaka_popust: "",
                vrednost_popust: ""
            }
        }
        
    },
    methods:{
        zavrsi(){
            this.$router.push('/popusti');
        }
    },
    created(){
        popustService.getPopustById(this.$route.params.id)
        .then((res) => {
            this.popust=res['data']
        })
        .catch((err) =>{
            this.$toastr.e('Popust ne postoji', "Greska!");
        });
    }
}
</script>
<style>

</style>