import axios from '../axios';
import constants from '../constants';


export default {

    getAllPozicija() {
        return axios.get(`${constants.API}/pozicija`);
    },
    addPozicija(data) {
        return axios.post(`${constants.API}/pozicija`, data);
    },
    getPozicijaById(id) {
        return axios.get(`${constants.API}/pozicija/${id}`);
    },
    editPozicija(data, id) {
        return axios.put(`${constants.API}/pozicija/${id}`, data, id);
    },
    deletePozicija(id) {
        return axios.delete(`${constants.API}/pozicija/${id}`);
    }

}