import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueToastr from "vue-toastr";
import { ValidationProvider, extend  } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';


import LoginComponent from './components/auth/LoginComponent';
import RegisterComponent from './components/auth/RegisterComponent';


Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueToastr);
Vue.component("ValidationProvider", ValidationProvider);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent }
  ]
});

extend('required', {
  ...required,
  message:  'Ovo polje je obavezno !'
});
extend('email', {
  ...email,
  message: 'Ovo polje mora biti email !'
});


new Vue({
  router,
  components: {
    ValidationProvider
  },
  render: h => h(App),
}).$mount('#app')
