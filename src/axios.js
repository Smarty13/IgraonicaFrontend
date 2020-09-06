import axios from 'axios';

axios.interceptors.request.use(function (config) {
    let route = config.url;
    let token = localStorage.getItem('token');
    if(token && route.localeCompare("http://localhost:8000/api/auth/register")){
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});




export default axios;