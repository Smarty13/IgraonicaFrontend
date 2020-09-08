import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/pojedinac`);
  },
  getById(id) {
    return axios.get(`${constants.API}/pojedinac/${id}`);
  },
  postPojedinac(data) {
    return axios.post(`${constants.API}/pojedinac`, data);
  },
  putPojedinac(id, data) {
    return axios.put(`${constants.API}/pojedinac/${id}`, data);
  },
  deletePojedinac(id) {
    return axios.delete(`${constants.API}/pojedinac/${id}`);
  },
};
