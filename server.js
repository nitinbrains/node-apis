const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const addMovie = require('./controllers/addMovie');

const app = express();

// Middleware
app.use(express.json());

// DB
connectDB();

// Models
require('./models/movies.model');

// Routes
app.post('/api/movies', addMovie);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
