const { default: mongoose } = require("mongoose");

const userSchema = new mongoose({
    username: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favourite_genres: {
        
    }
})