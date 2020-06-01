import axios from '../axios';
import constants from '../constants';


export default {


    getAllPice() {
        return axios.get(`${constants.API}/pice`);
    },

    createPice(data) {
        return axios.post(`${constants.API}/pice`, data);
    }
}