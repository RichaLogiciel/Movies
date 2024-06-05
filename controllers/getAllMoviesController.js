const { release } = require('os');
const allMovies = require('../models/allMovies');
const express = require('express');

exports.createMovie = async(req, res) => {
        const { title,description,director,cast, genre, releaseDate,coverImage,  availabilityStatus } = req.body;
        const movies  = new allMovies({
            title, description, director, cast, genre, releaseDate, coverImage, availabilityStatus
        });
        try {
            const allMovies = await movies.save();
            res.status(201).json({ msg: 'Movie Created Successfully'});
        } catch(error) {
            return res.status(400).json({ msg: error.message});
        }
}