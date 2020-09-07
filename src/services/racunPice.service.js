import axios from "../axios";
import constants from "../constants";

export default {
  getAllForRacun(racunId) {
    return axios.get(`${constants.API}/pica-za-racun/${racunId}`);
  },
  dodajRacunPice(data) {
    return axios.post(`${constants.API}/racunPice`, data);
  },
  obrisiRacunPice(id) {
    return axios.delete(`${constants.API}/racunPice/${id}`);
  }
};
