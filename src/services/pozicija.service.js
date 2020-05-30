import axios from '../axios';
import constants from '../constants';


export default {

    getAllPozicija() {
        return axios.get(`${constants.API}/pozicija`);
    }

}