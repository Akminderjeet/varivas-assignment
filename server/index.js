const express = require("express");
const app = express();
const cors = require('cors');
const https = require('https');
const axios = require('axios');
const { rmSync } = require("fs");
app.use(cors());
require("dotenv").config();

var imageURL = "https://image.tmdb.org/t/p/w500/";
var trailerURL = "https://api.themoviedb.org/3/movie/"

const port = process.env.PORT || 9000;
app.get("/", function (req, res) {
  axios.get(process.env.ROOTURL).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch(err => {
    console.log('Error: ', err.message);
  });

})

app.get("/latest", function (req, res) {
  axios.get(process.env.LATESTURL).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch(err => {
    console.log('Error: ', err.message);
  });
});

app.get("/movie/:movieid", function (req, res) {
  var movieId = req.params.movieid;
  var finalURL = "https://api.themoviedb.org/3/movie/" + movieId + process.env.VIDEOMOVIEURL;
  axios.get(finalURL).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch(err => {
    console.log('Error: ', err.message);
  });
});
app.get("/movie/details/:movieid", function (req, res) {
  var movieId = req.params.movieid;
  var finalURL = "https://api.themoviedb.org/3/movie/" + movieId + process.env.MOVIEURL;
  axios.get(finalURL).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch(err => {
    console.log('Error: ', err.message);
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
