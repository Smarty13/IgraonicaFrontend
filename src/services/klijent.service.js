import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/klijent`);
  },
  getById(id) {
    return axios.get(`${constants.API}/klijent/${id}`);
  },
  postKlijent(data) {
    return axios.post(`${constants.API}/klijent/`, data);
  },
  putKlijent(id, data) {
    return axios.put(`${constants.API}/klijent/${id}`, data);
  },
  deleteKlijent(id) {
    return axios.delete(`${constants.API}/klijent/${id}`);
  },
};
