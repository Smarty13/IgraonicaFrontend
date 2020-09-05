import axios from "../axios";
import constants from "../constants";

export default {
  getUserById(id) {
    return axios.get(`${constants.API}/user/${id}`);
  },

  getLokacijaById(id) {
    return axios.get(`${constants.API}/lokacija/${id}`);
  },

  getPozicijaById(id) {
    return axios.get(`${constants.API}/pozicija/${id}`);
  },
  getGradById(id) {
    return axios.get(`${constants.API}/grad/${id}`);
  },
  putById(id, user) {
    return axios.put(`${constants.API}/user/${id}`, user, id);
  },

  getByLokacijaId(id) {
    return axios.get(`${constants.API}/user/lokacija/${id}`);
  },
  getAllGrad() {
    return axios.get(`${constants.API}/grad`);
  },
  getAllLokacijaByGradId(id) {
    return axios.get(`${constants.API}/lokacija/grad/${id}`);
  },

  /*    fireUser(id,lokacija_id, pozicija_id) {
        return axios.patch(`${constants.API}/user/${id}`,)*/
};
