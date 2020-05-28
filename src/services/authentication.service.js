import axios from '../axios';
import constants from '../constants';


export default {

    login(data) {
        return axios.post(`${constants.AUTH_API}/login`,data);
    },
    setToken(token) {
        localStorage.setItem('token', token);
    },
    getToken() {
        localStorage.getItem('token');
    }



}