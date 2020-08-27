import axios from '../axios';
import constants from '../constants';


export default {


    getAllLokacija() {
        return axios.get(`${constants.API}/unpaginated-lokacija`);
    },
    deleteLokacija(id) {
        return axios.delete(`${constants.API}/lokacija/${id}`);
    }
}