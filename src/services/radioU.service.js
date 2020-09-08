import axios from "../axios";
import constants from "../constants";

export default {
  getAllForUser(id) {
    return axios.get(`${constants.API}/radioU/forUser/${id}`);
  },
  postRadioU(data) {
    return axios.post(`${constants.API}/radioU`, data);
  },
  putRadioU(data, id) {
    return axios.put(`${constants.API}/radioU/update/${id}`, data);
  },
};
