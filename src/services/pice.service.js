import axios from '../axios';
import constants from '../constants';

export default {
    addPice(data) {
        return axios.post(`${constants.API}/pice`, data);
    },
    getAllPice() {
        return axios.get(`${constants.API}/pice`);
    },
    getPiceById(id){
        return axios.get(`${constants.API}/pice/${id}`);
    },
    editPice(data, id) {
       return axios.put(`${constants.API}/pice/${id}`, data, id);
    },
    deletePice(id) {
        return axios.delete(`${constants.API}/pice/${id}`);
    }
}