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

// Use environment variable for the base URL (you can define this in your .env file)
const api = axios.create({
    baseURL: 'http://localhost:5000',  // Change this to match your server's base URL
    headers: {
        'Content-Type': 'application/json',
    }
});

// Response interceptor for handling errors like 401 or others
api.interceptors.response.use(
    res => res,
    err => {
        if (err.response) {
            // Server responded with an error
            console.log("API Error Response:", err.response.data);
            console.log("API Error Status:", err.response.status);
            console.log("API Error Headers:", err.response.headers);
        } else if (err.request) {
            // No response from the server
            console.log("No response from server:", err.request);
        } else {
            // General error
            console.log("Error Message:", err.message);
        }

        if (err.response && err.response.status === 401) {
            console.log("Error 401 - Unauthorized access!");
            // Optionally handle redirect or logout here
        } else {
            console.log("API Error:", err.response?.data?.message || err.message);
        }
        return Promise.reject(err);
    }
);

export default api;