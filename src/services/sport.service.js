import axios from "../axios";
import constants from "../constants";

export default {
  getAllSport() {
    return axios.get(`${constants.API}/sport`);
  },
  getById(id) {
    return axios.get(`${constants.API}/sport/${id}`);
  },
  deleteSport(id) {
    return axios.delete(`${constants.API}/sport/${id}`);
  },
};
