import axios from "../axios";
import constants from "../constants";

export default {
  getAllLokacija() {
    return axios.get(`${constants.API}/unpaginated-lokacija`);
  },
  getById(id) {
    return axios.get(`${constants.API}/lokacija/${id}`);
  },
  deleteLokacija(id) {
    return axios.delete(`${constants.API}/lokacija/${id}`);
  },
};
