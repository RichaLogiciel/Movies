const {createMovie} = require('../controllers/getAllMoviesController');
const express = require('express');
const router = express.Router();

router.post('/movie', createMovie);

module.exports = router;