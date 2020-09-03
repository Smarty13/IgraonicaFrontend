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
import SviSportoviComponent from './components/sport/SviSportoviComponent';
import SviGradoviComponent from './components/grad/SviGradoviComponent';
import SvePozicijeComponent from './components/pozicija/SvePozicijeComponent';
import DodajPozicijuComponent from './components/pozicija/DodajPozicijuComponent';
import IzmeniPozicijuComponent from './components/pozicija/IzmeniPozicijuComponent';
import PozicijaComponent from './components/pozicija/PozicijaComponent';


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
    { path: '/sportovi', component: SviSportoviComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/pozicije', component: SvePozicijeComponent },
    { path: '/pozicije/add', component: DodajPozicijuComponent },
    { path: '/pozicije/edit/:id', component: IzmeniPozicijuComponent },
    { path: '/pozicije/:id', component: PozicijaComponent }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
