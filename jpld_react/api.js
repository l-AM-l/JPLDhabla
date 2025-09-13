import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': "application/json"
    }
});

api.interceptors.response.use(
    res => res,
    err => { 
        if(err.response.status === 401){
            console.log("Error 401 -!!");
        }
        return Promise.reject(err);
    }
)

export default api;