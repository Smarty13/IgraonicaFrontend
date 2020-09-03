<template>
    <div class="container">
        <table class="table text-center table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Adresa</th>
                    <th scope="col">Grad</th>
                    <th scope="col">Deo Grada</th>
                    <th scope="col">Naziv</th>
                    <th scope="col">Kvadratura</th>
                    <th scope="col">Opcije</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (l, i) in computedLokacije" :key="l.id">
                    <th scope="row"> {{ i + 1 }} </th>
                    <td>{{l.adresa}}</td>
                    <td>{{l.grad.naziv}}</td>
                    <td>{{l.deo_grada}}</td>
                    <td>{{l.naziv}}</td>
                    <td>{{l.kvadratura}}m</td>
                    <td>
                        <button class="btn btn-success btn-sm" @click="izmeniLokaciju(l.id)">Izmeni</button>
                        <button class="btn btn-danger btn-sm ml-1" @click="obrisiLokaciju(l.id)">Obrisi</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import lokacijaService from '../../services/lokacija.service';

export default{

    data: function(){
        return{
            lokacije: []
        }
    },
    methods:{
        izmeniLokaciju(id) {

        },
        obrisiLokaciju(id) {
            lokacijaService.deleteLokacija(id)
            .then((res) => {
                this.$toastr.s('Lokacija obrisana', 'Brisanje uspesno');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Lokacija nije obrisana', 'Brisanje neuspesno');
            })
        }
    },
    created(){ 
        lokacijaService.getAllLokacija()
        .then((res)=>{
            this.lokacije = res['data'];
            
        })
        .catch((err)=>{
            console.log(err);
        });
    },
    computed: {
        computedLokacije() {
            return this.lokacije;
        }
    }
}
</script>
<style>

</style>