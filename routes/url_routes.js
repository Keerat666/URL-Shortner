var express = require('express');
var router = express.Router();

const Url_model = require('../models/url_model')
const url = require('../controllers/url');
const crud = require('../middlewares/crud');

router.get('/test', function(req, res) {
    res.send('URL Shortie Service is Up and Running.');
});


router.post('/shorten', function(req, res) {
    url.shorten_url(req, res)
});

router.get('/getAll', function(req, res) {
    crud.getAllEntries(req, res,Url_model )
});

router.get('/:code', function(req, res) {
    url.redirect_url(req, res)
});

module.exports = router;