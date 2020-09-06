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
    return axios.put(`${constants.API}/rezervacija/${id}`, data, id);
  },
  deleteRezervacija(id) {
    return axios.delete(`${constants.API}/rezervacija/${id}`, id);
  },

  getTerenById(id) {
    return axios.get(`${constants.API}/teren/${id}`);
  },
  getLokacijaById(id) {
    return axios.get(`${constants.API}/lokacija/${id}`);
  },
  getGradById(id) {
    return axios.get(`${constants.API}/grad/${id}`);
  },
  getSportById(id) {
    return axios.get(`${constants.API}/sport/${id}`);
  },
  getKlijentById(id) {
    return axios.get(`${constants.API}/klijent/${id}`);
  },
  getRacunById(id) {
    return axios.get(`${constants.API}/racun/${id}`);
  },
};
