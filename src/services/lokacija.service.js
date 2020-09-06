import axios from "../axios";
import constants from "../constants";

export default {
  getAllLokacija() {
    return axios.get(`${constants.API}/unpaginated-lokacija`);
  },
  deleteLokacija(id) {
    return axios.delete(`${constants.API}/lokacija/${id}`);
  },
  getLokacijaById(id) {
    return axios.get(`${constants.API}/lokacija/${id}`);
  },
  editLokacija(data, id) {
    return axios.put(`${constants.API}/lokacija/${id}`, data, id);
  },
  addLokacija(data) {
    return axios.post(`${constants.API}/lokacija`, data);
  },
  getGradById(id) {
    return axios.get(`${constants.API}/grad/${id}`);
  },
};
