<template>
    <div class="container" v-if="computedPica">
        <div class="row mb-4 d-flex justify-content-center">
            <div class="col-md-4">
                <select class="form-control" v-model="forma.pice">
                <option v-for="s in computedSvaPica" :key="s.id"
                v-bind:value="s.id"> {{s.Naziv_Pica}}, {{s.Cena_Pica}}din </option>
                </select>
            </div>
            <div class="col-md-4">
                <input class="form-control" type="number" v-model="forma.kolicina">
            </div>
            <div class="col-md-2">
                <button class="btn btn-success" @click="dodajPice()">Dodaj pice</button>
            </div>
        </div>
        <table class="table text-center table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pice</th>
                    <th scope="col">Kolicina</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Ukupno</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (p, i) in computedPica" :key="p.id">
                    <th scope="row"> {{ i + 1 }} </th>
                    <td>{{p.pice.Naziv_Pica}}</td>
                    <td>{{p.kolicina}}</td>
                    <td>{{p.pice.Cena_Pica}}din</td>
                    <td>{{ p.pice.Cena_Pica * p.kolicina }}din</td>
                    <td>
                        <button class="btn btn-danger btn-sm ml-1" @click="obrisiPice(p.id)">Obrisi</button>
                    </td>
                </tr>
                <tr style="background-color: lightgray;">
                    <td></td>
                    <th>Ukupno: </th>
                    <td></td> <td></td> <td></td>
                    <th>{{computedUkupno}}din.</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import racunPiceService from '../../services/racunPice.service';
import piceService from '../../services/pice.service';

export default {
    created() {
        racunPiceService.getAllForRacun(this.$route.params.id)
        .then((res) => {
            this.pica = res['data'];
            this.ukupno = 0; 
            for(var pice of this.pica) {
                this.ukupno += (pice.kolicina * pice.pice.Cena_Pica);
            }
            piceService.getAllPice()
            .then((res) => {
                this.sva_pica = res['data'];
            })
            .catch((err) => {
                this.$toastr.e('Doslo je do greske prilikom preuzimanja pica.', 'Greska');
            })
            
        })
    },
    data: function() {
        return {
            pica: [],
            ukupno: 0,
            sva_pica: [],
            forma: {
                pice: null,
                kolicina: 0
            }
        }
    },
    computed: {
        computedPica() {
            return this.pica;
        },
        computedUkupno() {
            return this.ukupno;
        },
        computedSvaPica() {
            return this.sva_pica;
        }
    },
    methods: {
        dodajPice() {
            const data = {
                "pice_id": this.forma.pice,
                "racun_id": this.$route.params.id,
                "kolicina": this.forma.kolicina 
            };
            console.log(data);
            racunPiceService.dodajRacunPice(data)
            .then((res) => {
                console.log(res['data'])
                this.$toastr.s('Pice uspesno dodato na racun.', 'Pice dodato');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Doslo je do greske dodavanja pica.', 'Greska');
            })
        },
        obrisiPice(id) {
            racunPiceService.obrisiRacunPice(id)
            .then((res) => {
                this.$toastr.s('Pice uspesno uklonjeno sa racuna.', 'Pice obrisano');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Doslo je do greske prilikom brisanja.', 'Greska');
            });
        }
    }
}
</script>

<style>

</style>