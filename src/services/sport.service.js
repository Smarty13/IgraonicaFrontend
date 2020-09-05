import axios from '../axios';
import constants from '../constants';


export default {


    getAllSport() {
        return axios.get(`${constants.API}/sport`);
    },
    deleteSport(id) {
        return axios.delete(`${constants.API}/sport/${id}`);
    },
    getSportById(id){
        return axios.get(`${constants.API}/sport/${id}`);
    },
    editSport(data, id){
        return axios.put(`${constants.API}/sport/${id}`, data, id);
    },
    addSport(data){
        return axios.post(`${constants.API}/sport`, data);
    }
}