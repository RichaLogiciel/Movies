const allMovies = require('../models/allMovies');

exports.createMovie = async(req, res) => {
        const { title,description,director,cast, genre, releaseDate, coverImage,  availabilityStatus } = req.body;
        if(!req.file){
            return res.status(400).json({ msg: "Please upload a cover image"});
        } 
        try {
        const movies  = new allMovies({
            title,
            description,
            director,
            cast,
            genre,
            releaseDate,
            coverImage: {
                data: req.file.Buffer,
                contentType: req.file.mimetype
            },
            availabilityStatus
        });

            const allMovie = await movies.save();
            res.status(201).json({ msg: 'Movie Created Successfully',allMovie});
        } catch(error) {
            return res.status(400).json({ msg: error.message});
        }
}

exports.getAllMovies = async(req, res) => {
    try {
        const movies = await allMovies.find({}, 'title description  genre releaseDate availabilityStatus');
        return res.status(200).json(movies);
    } catch(error) {
        return res.status(400).json(400);
    }
}

exports.getMovieById = async(req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await allMovies.findById(movieId, -'coverImage');
        if(!movie) {
            return res.json(404).status({ msg: "Movie not found"});
        }
        return res.json(movie)
    } catch(error) {
        return res.status(400).json({ msg: error.message});
    }
}

exports.searchMovie = async(req, res) => {
    const {title} = req.body;
    try{
        const movie = await allMovies.find({ title: { $regex: title, $options: 'i' }});
        return res.status(200).json(movie);
    } catch(error) {
        return res.status(400).json({ msg: error.message});
    }
}