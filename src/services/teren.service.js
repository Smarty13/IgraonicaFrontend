import axios from '../axios';
import constants from '../constants';


export default {


    getAllTeren() {
        return axios.get(`${constants.API}/unpaginated-teren`);
    },
    deleteTeren(id) {
        return axios.delete(`${constants.API}/teren/${id}`);
    }
}