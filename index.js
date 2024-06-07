const multer = require('multer');
const express = require('express');
const connectDb = require('./config/connection');
const router = require('./routes/getMovies');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

connectDb('mongodb://127.0.0.1:27017/movies');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})