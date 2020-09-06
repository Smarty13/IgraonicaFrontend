import axios from "../axios";
import constants from "../constants";

export default {
  getAll() {
    return axios.get(`${constants.API}/radioU`);
  },
  //   postRadio(radio_id, radio_do, user_id, pozicija_id)
};
