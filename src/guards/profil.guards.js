import authService from '../services/authentication.service';

// Dozvoljava da prodje samo korisnik ciji je profil ili poslovodja

export default (to, from, next) => {
    if(to['params']['id'] == authService.getUser()['id'] || authService.getUser()['pozicija']['naziv'] == "Poslovodja") {
        next();
    } else {
        next('/');
    }
} 