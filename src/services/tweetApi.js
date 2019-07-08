const axios = require('axios');

const api = axios.create({
    baseURL: "http://matheusmelodev.herokuapp.com/api"
});

export default api;