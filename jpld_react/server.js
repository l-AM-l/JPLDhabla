/*
 * © 2025 [Rodrigo López Gómez, Ramón Alejandro Briseño Martínez, Nahui Metztli Dado Delgadillo, Ana Mariem Pérez Chacón, Karla Avila Navarro, Ana María Guzman Solís]
 * Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 * 
 * You must give appropriate credit to all contributors whenever you use or modify this file.
 * Commercial use or redistribution without permission is prohibited.
 * 
 * Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
 */

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Allow all origins (for development)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Server Environment variables
const PORT = 5000;


app.route('/logIn')
    .post((req, res) =>{
        console.log("LOGGED IN!!!!!!!");
    });

app.listen(PORT, () => {
    console.log(`<|Berkeley listening port ${PORT}|>`); // Log server start and port information
});