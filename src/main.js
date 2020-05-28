import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


import LoginComponent from './components/auth/LoginComponent';
import RegisterComponent from './components/auth/RegisterComponent';

Vue.config.productionTip = false;


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
