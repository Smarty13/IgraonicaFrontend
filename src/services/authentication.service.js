import axios from '../axios';
import constants from '../constants';


export default {

    login(data) {
        return axios.post(`${constants.AUTH_API}/login`,data);
    },
    register(data) {
        return axios.post(`${constants.AUTH_API}/register`, data);
    },
    logout() {
        localStorage.removeItem('token');
        return axios.post(`${constants.AUTH_API}/logout`);
    },
    setToken(token) {
        localStorage.setItem('token', token);
    },
    getToken() {
        localStorage.getItem('token');
    },
    me() {
        return axios.post(`${constants.AUTH_API}/me`);
    },
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }


}