/*
 * © 2025 [Rodrigo López Gómez, Ramón Alejandro Briseño Martínez, Nahui Metztli Dado Delgadillo, Ana Mariem Pérez Chacón, Karla Avila Navarro, Ana María Guzman Solís]
 * Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 * 
 * You must give appropriate credit to all contributors whenever you use or modify this file.
 * Commercial use or redistribution without permission is prohibited.
 * 
 * Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1000',
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