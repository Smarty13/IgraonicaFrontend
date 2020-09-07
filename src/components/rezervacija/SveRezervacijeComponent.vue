<template>
  <div class="container">
    <p></p>
    <button class="btn btn-secondary" @click="dodajRezervaciju">Dodaj rezervaciju</button>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Teren</th>
          <th scope="col">Klijent</th>
          <th scope="col">Racun</th>
          <th scope="col">Kreirano</th>
          <th scope="col">Izmenjeno</th>
          <th scope="col">Plati</th>
          <th scope="col">Opcije</th>
        </tr>
      </thead>
      <tbody v-if="rezervacije">
        <tr
          class="static"
          v-bind:class="{ active: r.racun.placeno, 'text-danger': !r.racun.placeno}"
          v-for="(r,i) in computedRezervacije"
          :key="r.id"
          @click="redirekcija(r.id)"
        >
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ r.teren.naziv }}</td>
          <td>{{ r.klijent.ime }} {{ r.klijent.prezime }}</td>
          <td>{{ r.racun.ukupno }}</td>
          <td>{{ r.created_at }}</td>
          <td>{{ r.updated_at }}</td>
          <td>
            <button
              v-if="r.racun.placeno!=1"
              class="btn btn-secondary btn-sm"
              @click="platiRacun(r.racun_id)"
            >Plati racun</button>
          </td>
          <td>
            <button class="btn btn-success btn-sm" @click="izmeniRezervaciju(r.id)">Izmeni</button>
            <button class="btn btn-danger btn-sm ml-1" @click="obrisiRezervaciju(r.id)">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import rezervacijaService from "../../services/rezervacija.service";
export default {
  data: function () {
    return {
      rezervacije: [],
    };
  },
  methods: {
    dodajRezervaciju() {
      this.$router.push("/rezervacije/add");
    },
    izmeniRezervaciju(id) {
      this.$router.push("/rezervacije/edit/" + id);
    },
    obrisiRezervaciju(id) {
      rezervacijaService
        .deleteRezervacija(id)
        .then((res) => {
          this.$toastr.s("Rezervacija obrisana", "Brisanje uspesno");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e("Rezervacija nije obrisana", "Brisanje neuspesno");
        });
    },
    platiRacun(racun_id) {},
    redirekcija(id) {
      this.$router.push("/rezervacije/" + id);
    },
  },
  created() {
    rezervacijaService
      .getAllRezervacije()
      .then((res) => {
        this.rezervacije = res["data"];
        console.log(res["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedRezervacije() {
      return this.rezervacije;
    },
  },
};
</script>
<style>
</style>