import axios from "../axios";
import constants from "../constants";

export default {
  getAllTeren() {
    return axios.get(`${constants.API}/teren`);
  },
  getById(id) {
    return axios.get(`${constants.API}/teren/${id}`);
  },
  deleteTeren(id) {
    return axios.delete(`${constants.API}/teren/${id}`);
  },
};
