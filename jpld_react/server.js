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