import authService from '../services/authentication.service';

export default (to, from, next) => {
    if(authService.getToken() && authService.getUser()) {
        next();
    }
    window.location.href = "/login";
} 