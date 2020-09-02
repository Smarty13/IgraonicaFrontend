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
import SvaPicaComponent from './components/pice/SvaPicaComponent';
import DodajPiceComponent from './components/pice/DodajPiceComponent';
import IzmeniPiceComponent from './components/pice/IzmeniPiceComponent';
import PiceComponent from './components/pice/PiceComponent';

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
    { path: '/pica', component: SvaPicaComponent },
    { path: '/pica/add', component: DodajPiceComponent },
    { path: '/pica/edit/:id', component: IzmeniPiceComponent},
    { path: '/pica/:id', component: PiceComponent }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
