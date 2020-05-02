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
const contact = require('./routes/contact');

// Initialise express
const app = express();

// Bodyparser middleware so that it can take in values from a form in the client
app.use(express.json());

// Routes
app.use('/api/prayer-intentions', prayerIntentions);
app.use('/send-email', contact);

// Serve static asserts if in production
if (process.env.NODE_ENV === 'production') {
  // Set Statoc Folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// PORT
const PORT = process.env.PORT || 5000;

// Listen to a port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
