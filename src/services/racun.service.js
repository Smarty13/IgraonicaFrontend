import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/racun`);
  },
  getById(id) {
    return axios.get(`${constants.API}/racun/${id}`);
  },
};
