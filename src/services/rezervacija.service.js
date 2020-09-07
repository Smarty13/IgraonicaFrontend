import axios from "../axios";
import constants from "../constants";

export default {
  getAllRezervacije() {
    return axios.get(`${constants.API}/rezervacija`);
  },
  addRezervacija(data) {
    return axios.post(`${constants.API}/rezervacija`, data);
  },
  getRezervacijaById(id) {
    return axios.get(`${constants.API}/rezervacija/${id}`);
  },
  editRezervacija(data, id) {
    console.log(data);
    return axios.put(`${constants.API}/rezervacija/${id}`, data);
  },
  deleteRezervacija(id) {
    return axios.delete(`${constants.API}/rezervacija/${id}`, id);
  },
};
