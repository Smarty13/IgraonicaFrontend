import axios from "../axios";
import constants from "../constants";

export default {
  getAllGrad() {
    return axios.get(`${constants.API}/grad`);
  },
  getById(id) {
    return axios.get(`${constants.API}/grad/${id}`);
  },
  deleteGrad(id) {
    return axios.delete(`${constants.API}/grad/${id}`);
  },
};
