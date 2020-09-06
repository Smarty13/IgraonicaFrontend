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
        axios.post(`${constants.AUTH_API}/me`)
        .then((res) => {
            axios.post(`${constants.AUTH_API}/logout`)
            .then((res) => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = "/";
            })
        })
        .catch((err) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = "/login";
        })
    },
    setToken(token) {
        localStorage.setItem('token', token);
    },
    getToken() {
        return localStorage.getItem('token');
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