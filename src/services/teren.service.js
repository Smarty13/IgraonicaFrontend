import axios from '../axios';
import constants from '../constants';


export default {


    getAllTeren() {
        return axios.get(`${constants.API}/teren`);
    },
    deleteTeren(id) {
        return axios.delete(`${constants.API}/teren/${id}`);
    },
    getTerenById(id){
        return axios.get(`${constants.API}/teren/${id}`);
    },
    editTeren(data, id){
        return axios.put(`${constants.API}/teren/${id}`, data, id);
    },
    addTeren(data){
        return axios.post(`${constants.API}/teren`, data);
    },
    getSportById(id){
        return axios.get(`${constants.API}/sport/${id}`);
    },
    getLokacijaById(id){
        return axios.get(`${constants.API}/lokacija/${id}`);
    }
}