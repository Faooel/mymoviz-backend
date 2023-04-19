const fetch = require('node-fetch')
var express = require('express');
var router = express.Router();

const API_KEY = process.env.OWM_API_KEY

router.get('/', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&include_adult=false`)
    .then(response => response.json())
    .then(data => {
        res.json({ movies : data.results });
    });
});

module.exports = router;
