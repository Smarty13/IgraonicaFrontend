import authService from '../services/authentication.service';

export default (to, from, next) => {
    if(to['params']['id'] == authService.getUser()['lokacija_trenutna_id']) {
        next();
    } else {
        next('/');
    }
} 