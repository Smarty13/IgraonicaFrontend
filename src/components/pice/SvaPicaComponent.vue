<template>
    <div class="container">
        <p></p>
        <button class="btn btn-secondary" @click="dodajPice">Dodaj pice</button>
        <p></p>
        <table class="table text-center table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Naziv pica</th>
                    <th scope="col">Cena pica</th>
                    <th scope="col">Opcije</th>
                    <th scope="col">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (p) in computedPica" :key="p.id">
                    <th scope="row"> {{ p.id }} </th>
                    <td>{{ p.Naziv_Pica }}</td>
                    <td>{{ p.Cena_Pica }}</td>
                    <td>
                        <button class="btn btn-success btn-sm" @click="izmeniPice(p.id)">Izmeni</button>
                        <button class="btn btn-danger btn-sm ml-1" @click="obrisiPice(p.id)">Obrisi</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import piceService from '../../services/pice.service';

export default{
    data: function(){
        return{
            pica: [],
            pice: {
                Naziv_Pica: "",
                Cena_Pica: ""
            }
        }
    },
    methods:{
        dodajPice() {
            this.$router.push('/pica/add');
        },
        izmeniPice(id) {
            this.$router.push('/pica/edit/'+id);
        },
        obrisiPice(id) {
            piceService.deletePice(id)
            .then((res) => {
                this.$toastr.s('Pice obrisano', 'Brisanje uspesno');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Pice nije obrisano', 'Brisanje neuspesno');
            });
            this.$router.push('/pica');
        }

    },
    created() {
        piceService.getAllPice()
        .then((res) => {
            this.pica = res['data'];
        })
        .catch((err) => {
            console.log(err);
        });
    },
    computed: {
        computedPica() {
            return this.pica;
        }
    }
}
</script>
<style>

</style>
