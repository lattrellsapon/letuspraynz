const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to the database
connectDB();

// Bring router in
const prayerIntentions = require('./routes/prayerIntentions');

// Initialise express
const app = express();

// Bodyparser middleware so that it can take in values from a form in the client
app.use(express.json());

// Routes
app.use('/api/prayer-intentions', prayerIntentions);

// PORT
const PORT = process.env.PORT || 5000;

// Listen to a port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
