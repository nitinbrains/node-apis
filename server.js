const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const addMovie = require('./controllers/addMovie');
const getAllMovies = require('./controllers/getAllMovies');
const getSingleMovie = require('./controllers/getSingleMovie');
const editMovie = require('./controllers/editMovie');
const deleteMovie = require('./controllers/deleteMovie');
const movieRecommendation = require('./controllers/movieRecommendation');
const app = express();

// Middleware
app.use(express.json());

// DB
connectDB();

// Models
require('./models/movies.model');

// Routes
app.post('/api/movies', addMovie);
app.get('/api/movies', getAllMovies);
app.get('/api/movies/:id', getSingleMovie);
app.patch('/api/movies/:id', editMovie);
app.delete('/api/movies/:id',deleteMovie);

//openai
app.get('/api/movies/openai/getRecommendations',movieRecommendation);
// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
