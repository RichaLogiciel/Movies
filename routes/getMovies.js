const {createMovie, getAllMovies,getMovieById, searchMovie} = require('../controllers/getAllMoviesController');
const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer();

router.post('/createMovie', upload.single('coverImage'), createMovie);
router.get('/movie',getAllMovies);
router.get('/movie/:id', getMovieById);
router.get('/searchMovie', searchMovie);

module.exports = router;