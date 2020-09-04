import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueToastr from "vue-toastr";



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




Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueToastr);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/lokacije', component: SveLokacijeComponent},
    { path: '/lokacije/:id', component: LokacijaComponent},
    { path: '/dodajLokaciju', component: DodajLokacijuComponent},
    { path: '/lokacije/edit/:id', component: IzmeniLokacijuComponent},
    { path: '/sportovi', component: SviSportoviComponent},
    { path: '/sportovi/:id', component: SportComponent},
    { path: '/dodajSport', component: DodajSportComponent},
    { path: '/sportovi/edit/:id', component: IzmeniSportComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/gradovi/:id', component: GradComponent},
    { path: '/dodajGrad', component: DodajGradComponent},
    { path: '/gradovi/edit/:id', component: IzmeniGradComponent}
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
