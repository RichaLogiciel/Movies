const { default: mongoose } = require('mongoose');

const movieSchema = mongoose.Schema({
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
    caste: {
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
        type: Buffer,
        required: true
    },
    availabilityStatus: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('allMovies', movieSchema);