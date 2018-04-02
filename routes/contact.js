var express = require('express');
var router = express.Router();
var eventsHandler = require('../database/eventshandler');

router.get('/', function (req, res) {
    var render = {
        googleApiKey: "AIzaSyBiJ5kqZesgcj_sZnUr_pE5DwDhSxCmb5g"
    };
    res.render('contact', render);
});

module.exports = router;
