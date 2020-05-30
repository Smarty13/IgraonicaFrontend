import axios from '../axios';
import constants from '../constants';


export default {


    getAllLokacija() {
        return axios.get(`${constants.API}/unpaginated-lokacija`);
    }
}