import axios from "../axios";
import constants from "../constants";

export default {
  getUserById(id) {
    return axios.get(`${constants.API}/user/${id}`);
  },
  putById(id, user) {
    return axios.put(`${constants.API}/user/${id}`, user, id);
  },
};
