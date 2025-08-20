require('dotenv').config(); // Load environment variables from .env file

const express = require('express'); // Import express to create server

const https = require('https'); // Import https for secure HTTP requests
const app = express(); // Initialize express application
const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
const nodemailer = require('nodemailer'); // Import nodemailer for email handling
const { google } = require('googleapis'); // Import google APIs for OAuth2
const session = require('express-session'); // Import express-session for session management

// Middleware configurations
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from "public" folder

const cors = require('cors');
app.use(cors());


// Server Environment variables
const PORT = 5000;
