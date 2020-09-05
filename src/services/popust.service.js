import axios from '../axios';
import constants from '../constants';

export default {
    addPopust(data) {
        return axios.post(`${constants.API}/popust`, data);
    },
    getAllPopusti() {
        return axios.get(`${constants.API}/popust`);
    },
    getPopustById(id) {
        return axios.get(`${constants.API}/popust/${id}`);
    },
    editPopust(data, id) {
        return axios.put(`${constants.API}/popust/${id}`, data, id);
    },
    deletePopust(id) {
        return axios.delete(`${constants.API}/popust/${id}`);
    }
}