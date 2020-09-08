<template>
  <div v-if="computedRacun" class="mt-5 mb-5">
    <div class="d-flex justify-content-center" style="height: 100%">
      <div class="card bg-dark mb-3" v-if="racun">
        <div class="text-justify card-header text-warning">Klijent</div>
        <div class="card-body">
          <h5 class="card-title text-warning">Ukupno: {{ racun.ukupno }} RSD</h5>
          <p v-if="racun.placeno" class="card-text text-white">Racun placen</p>
          <p v-else class="card-text text-white">Racun nije placen</p>
          <p class="card-text text-white">
            Datum kreiranja: {{ racun.created_at }}
          </p>

          <a href="#" @click="showDeleteModal" class="btn btn-danger">Obrisi</a>
        </div>
        
        <div v-if="showDelete">
          <RacunDeleteModal
            :showMe="showDelete"
            :racun="racun"
            @closeModal="hideModalDelete()"
          />
        </div>
      </div>
    </div>

    <PicaComponent />
    <div class="container" v-if="!computedRacun.placeno">
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
            <select class="form-control" v-model="forma_popust">
            <option v-for="p in computedPopusti" :key="p.id"
            v-bind:value="p"> {{p.oznaka_popust}}, {{p.vrednost_popust}}% </option>
            </select>
        </div>
        <div class="col-md-2">
            <button class="btn btn-success" @click="plati()">Plati</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import RacunDeleteModal from "@/components/racun/RacunDeleteModalComponent.vue";
import racunService from "../../services/racun.service";
import popustService from '../../services/popust.service';
import racunPopustService from '../../services/racunPopust.service';

import PicaComponent from "./PicaComponent";

export default {
  components: {
    RacunDeleteModal,
    PicaComponent
  },
  data: function() {
    return {
      showEdit: false,
      showDelete: false,
      racun: null,
      forma_popust: null,
      popusti: []
    };
  },
  methods: {
    showDeleteModal() {
      this.showDelete = true;
    },
    hideModalDelete() {
      this.showDelete = false;
      this.$router.push({ path: "/racun" });
    },

    plati() {
      const data = {
        ukupno: this.racun.ukupno,
        placeno: 1
      }
      if(this.forma_popust.vrednost_popust != 0) {
        data.ukupno = Math.round(data.ukupno * (1.0 - (this.forma_popust.vrednost_popust/100)));
      }

      racunService.putRacun(this.$route.params.id, data)
      .then((res) => {
        const rp = {
          popust_id: this.forma_popust.id,
          racun_id: this.racun.id
        };
        if(this.forma_popust.vrednost_popust != 0) {
          racunPopustService.addRacunPopust(rp)
          .then((res) => {
            this.$toastr.s('Racun uspesno placen.', 'Racun placen.');
            this.$router.go('/');
          })
          .catch((err) => {
            this.$toastr.e('Dodavanje poputa nije uspelo', 'Greska');
          });
        } else {
          this.$router.go('/');
        }
      })
      .catch((err) => {
        this.$toastr.e('Racun nije placen', 'Greska');
      });
    }
  },
  created() {
    racunService
      .getById(this.$route.params.id)
      .then((res) => {
        this.racun = res["data"];
        popustService.getAllPopusti()
        .then((res) => {
            const nema = {
                id: 0,
                oznaka_popust: "Puna cena",
                vrednost_popust: 0
            }
            this.popusti = [nema, ... res['data']];
        })
        .catch((err) => {
            this.$toastr.e('Greska prilikom ucitavanja popusta.', 'Greska');
        })
      })
      .catch((err) => {
        this.$toastr.e("Racun nije pronadjen!", "ERROR Bill not found.");
        console.log(err);
      });
  },
  computed: {
    computedFormaPopust() {
      return this.forma_popust;
    },
    computedPopusti() {
      return this.popusti;
    },
    computedRacun() {
      return this.racun;
    }
  }
};
</script>
