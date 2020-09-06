import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueToastr from "vue-toastr";

import RacunPost from "./components/racun/RacunPostComponent";
import RacunGetAll from "./components/racun/RacunGetAllComponent";
import RacunGetById from "./components/racun/RacunGetByIdComponent";
import KlijentGetByIdComponent from "./components/klijent/KlijentGetByIdComponent";
import KlijentPostComponent from "./components/klijent/KlijentPostComponent";
import KlijentAllComponent from "./components/klijent/KlijentGetAllComponent";
import radioUComponent from "./components/radioU/radioUGetAllComponent";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import SveLokacijeComponent from "./components/lokacije/SveLokacijeComponent";
import LokacijaComponent from "./components/lokacije/LokacijaComponent";
import DodajLokacijuComponent from "./components/lokacije/DodajLokacijuComponent";
import IzmeniLokacijuComponent from "./components/lokacije/IzmeniLokacijuComponent";
import SviSportoviComponent from "./components/sport/SviSportoviComponent";
import SportComponent from "./components/sport/SportComponent";
import DodajSportComponent from "./components/sport/DodajSportComponent";
import IzmeniSportComponent from "./components/sport/IzmeniSportComponent";
import SviGradoviComponent from "./components/grad/SviGradoviComponent";
import GradComponent from "./components/grad/GradComponent";
import DodajGradComponent from "./components/grad/DodajGradComponent";
import IzmeniGradComponent from "./components/grad/IzmeniGradComponent";

import UserComponent from "./components/user/UserComponent";
import LoginComponent from './components/auth/LoginComponent';
import RegisterComponent from './components/auth/RegisterComponent';
import SveLokacijeComponent from './components/lokacije/SveLokacijeComponent';
import LokacijaComponent from './components/lokacije/LokacijaComponent';
import DodajLokacijuComponent from './components/lokacije/DodajLokacijuComponent';
import IzmeniLokacijuComponent from './components/lokacije/IzmeniLokacijuComponent';
import SviSportoviComponent from './components/sport/SviSportoviComponent';
import SportComponent from './components/sport/SportComponent';
import DodajSportComponent from './components/sport/DodajSportComponent';
import IzmeniSportComponent from './components/sport/IzmeniSportComponent'
import SviGradoviComponent from './components/grad/SviGradoviComponent';
import GradComponent from './components/grad/GradComponent';
import DodajGradComponent from './components/grad/DodajGradComponent';
import IzmeniGradComponent from './components/grad/IzmeniGradComponent';
import SviTereniComponent from './components/teren/SviTereniComponent';
import TerenComponent from './components/teren/TerenComponent';
import DodajTerenComponent from './components/teren/DodajTerenComponent';
import IzmeniTerenComponent from './components/teren/IzmeniTerenComponent';

import SviPopustiComponent from './components/popust/SviPopustiComponent';
import DodajPopustComponent from './components/popust/DodajPopustComponent';
import IzmeniPopustComponent from './components/popust/IzmeniPopustComponent';
import PopustComponent from './components/popust/PopustComponent';
import SvaPicaComponent from './components/pice/SvaPicaComponent';
import DodajPiceComponent from './components/pice/DodajPiceComponent';
import IzmeniPiceComponent from './components/pice/IzmeniPiceComponent';
import PiceComponent from './components/pice/PiceComponent';
import SvePozicijeComponent from './components/pozicija/SvePozicijeComponent';
import DodajPozicijuComponent from './components/pozicija/DodajPozicijuComponent';
import IzmeniPozicijuComponent from './components/pozicija/IzmeniPozicijuComponent';
import PozicijaComponent from './components/pozicija/PozicijaComponent';
import SveRezervacijeComponent from './components/rezervacija/SveRezervacijeComponent';
import DodajRezervacijuComponent from './components/rezervacija/DodajRezervacijuComponent';
import IzmeniRezervacijuComponent from './components/rezervacija/IzmeniRezervacijuComponent';
import RezervacijaComponent from './components/rezervacija/RezervacijaComponent';
import HomepageComponent from './components/HomepageComponent';

import radiULokacijiGuard from './guards/radiULokaciji.guard';
import jePoslovodjaGuard from './guards/jePoslovodja.guard';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueToastr);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: HomepageComponent },
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent, beforeEnter: jePoslovodjaGuard },
    { path: "/user/:id", component: UserComponent },
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/lokacije', component: SveLokacijeComponent},
    { path: '/lokacije/:id', component: LokacijaComponent, beforeEnter: radiULokacijiGuard},
    { path: '/dodajLokaciju', component: DodajLokacijuComponent},
    { path: '/lokacije/edit/:id', component: IzmeniLokacijuComponent},
    { path: '/sportovi', component: SviSportoviComponent},
    { path: '/sportovi/:id', component: SportComponent},
    { path: '/dodajSport', component: DodajSportComponent},
    { path: '/sportovi/edit/:id', component: IzmeniSportComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/gradovi/:id', component: GradComponent},
    { path: '/dodajGrad', component: DodajGradComponent},
    { path: '/gradovi/edit/:id', component: IzmeniGradComponent},
    { path: '/tereni', component: SviTereniComponent},
    { path: '/tereni/:id', component: TerenComponent},
    { path: '/dodajTeren', component: DodajTerenComponent},
    { path: '/tereni/edit/:id', component: IzmeniTerenComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/popusti', component: SviPopustiComponent },
    { path: '/popusti/add', component: DodajPopustComponent },
    { path: '/popusti/edit/:id', component: IzmeniPopustComponent },
    { path: '/popusti/:id', component: PopustComponent },
    { path: '/pica', component: SvaPicaComponent },
    { path: '/pica/add', component: DodajPiceComponent },
    { path: '/pica/edit/:id', component: IzmeniPiceComponent},
    { path: '/pica/:id', component: PiceComponent },
    { path: '/pozicije', component: SvePozicijeComponent },
    { path: '/pozicije/add', component: DodajPozicijuComponent },
    { path: '/pozicije/edit/:id', component: IzmeniPozicijuComponent },
    { path: '/pozicije/:id', component: PozicijaComponent },
    { path: '/rezervacije', component: SveRezervacijeComponent },
    { path: '/rezervacije/add', component: DodajRezervacijuComponent },
    { path: '/rezervacije/edit/:id', component: IzmeniRezervacijuComponent },
    { path: '/rezervacije/:id', component: RezervacijaComponent }
    { path: "/radioU", component: radioUComponent },
    { path: "/klijent", component: KlijentAllComponent },
    { path: "/klijent/add", component: KlijentPostComponent },
    { path: "/klijent/:id", component: KlijentGetByIdComponent },
    { path: "/user/:id", component: UserComponent },
    { path: "/racun/add", component: RacunPost },
    { path: "/racun/:id", component: RacunGetById },
    { path: "/racun", component: RacunGetAll },
  ]
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
