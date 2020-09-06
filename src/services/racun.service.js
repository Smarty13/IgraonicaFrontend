import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/racun`);
  },
  getById(id) {
    return axios.get(`${constants.API}/racun/${id}`);
  },
  postRacun(data) {
    return axios.post(`${constants.API}/racun`, data);
  },
  putRacun(id, data) {
    return axios.put(`${constants.API}/racun/${id}`, data);
  },
  deleteRacun(id) {
    return axios.delete(`${constants.API}/racun/${id}`);
  },
};
