import axios from "../axios";
import constants from "../constants";

export default {
  getAllGrad() {
    return axios.get(`${constants.API}/grad`);
  },
  deleteGrad(id) {
    return axios.delete(`${constants.API}/grad/${id}`);
  },
  getGradById(id) {
    return axios.get(`${constants.API}/grad/${id}`);
  },
  editGrad(data, id) {
    return axios.put(`${constants.API}/grad/${id}`, data, id);
  },
  addGrad(data) {
    return axios.post(`${constants.API}/grad`, data);
  },
};
