import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/grupa`);
  },
  getById(id) {
    return axios.get(`${constants.API}/grupa/${id}`);
  },
  postGrupa(data) {
    return axios.post(`${constants.API}/grupa/`, data);
  },
  putGrupa(id, data) {
    return axios.put(`${constants.API}/grupa/${id}`, data);
  },
  deleteGrupa(id) {
    return axios.delete(`${constants.API}/grupa/${id}`);
  },
};
