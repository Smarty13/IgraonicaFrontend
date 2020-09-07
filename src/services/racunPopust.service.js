import axios from '../axios';
import constants from '../constants';


export default {
    addRacunPopust(data) {
        return axios.post(`${constants.API}/racunPopust`, data)
    }
}