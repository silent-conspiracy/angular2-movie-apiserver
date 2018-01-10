var express = require('express');
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movies');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Database connected.");
});

var movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    imgPath: String,
    duration: Number,
    genre: Array,
    language: String,
    mpaaRating: Object,
    userRating: String
});
var Movie = mongoose.model('Movie', movieSchema);

var getMovies = function(id) {
    console.log("Fetching movies.");
    if (id) {
        return new Promise(function(resolve, reject) {
            Movie.find({id: id}, function(err, movies) {
                if (err) reject(err);
                else resolve(movies);
            });
        });
    } else {
        return new Promise(function(resolve, reject) {
            Movie.find({}, function(err, movies) {
                if (err) reject(err);
                else resolve(movies);
            });
        });
    }
}

var router = express.Router();

router.get('/movies', function(req, res, next) {
    getMovies().then(function(movies) {
        res.json(movies);
    }, function(err) {
        res.send(err);
    });
});

router.get('/movies/:id', function(req, res, next) {
    var movieId = parseInt(req.params.id);

    getMovies(movieId).then(function(movies) {
        if (movies.length > 0) {
            res.json(movies[0]);
        } else {
            res.send("Invalid request.");
        }
    }, function(err) {
        res.send(err);
    });
});

module.exports = router