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
<<<<<<< HEAD
import SviTereniComponent from './components/teren/SviTereniComponent';
=======
import SviPopustiComponent from './components/popust/SviPopustiComponent';
import DodajPopustComponent from './components/popust/DodajPopustComponent';
import IzmeniPopustComponent from './components/popust/IzmeniPopustComponent';
import PopustComponent from './components/popust/PopustComponent';

>>>>>>> popust-component

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
    { path: '/tereni', component: SviTereniComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/gradovi', component: SviGradoviComponent},
    { path: '/popusti', component: SviPopustiComponent },
    { path: '/popusti/add', component: DodajPopustComponent },
    { path: '/popusti/edit/:id', component: IzmeniPopustComponent },
    { path: '/popusti/:id', component: PopustComponent },
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
