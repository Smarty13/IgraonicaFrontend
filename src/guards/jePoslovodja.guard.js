import authService from '../services/authentication.service';

export default (to, from, next) => {
    if(authService.getUser()['pozicija']['naziv'] == "Poslovodja") {
        next();
    } else {
        next('/');
    }
} 