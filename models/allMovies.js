const { default: mongoose } = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    coverImage: {
        data: Buffer,
        contentType: String

    },
    availabilityStatus: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('allMovies', movieSchema);