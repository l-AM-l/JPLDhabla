require('dotenv').config(); // Load environment variables from .env file

const express = require('express'); // Import express to create server

const https = require('https'); // Import https for secure HTTP requests
const app = express(); // Initialize express application

// Middleware configurations
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from "public" folder



// Server Environment variables
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`<|Berkeley listening port ${PORT}|>`); // Log server start and port information
});