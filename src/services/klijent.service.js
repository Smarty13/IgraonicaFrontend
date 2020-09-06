import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/klijent`);
  },
  getById(id) {
    return axios.get(`${constants.API}/klijent/${id}`);
  },
};
