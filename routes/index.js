var express = require('express');
var router = express.Router();
var eventsHandler = require('../database/eventshandler');

router.get('/', function (req, res) {
    var render = {
        upcomingEvents: [
            {
                title: 'Children Summer Camp - First',
                about: 'Come make a difference in the life of a child! Children are our first priority and our goal is to provide a fun, safe nurturing environment where children can learn about God.',
                date: 'August 16'
            },
            {
                title: 'Children Summer Camp - Second',
                about: 'Come make a difference in the life of a child! Children are our first priority and our goal is to provide a fun, safe nurturing environment where children can learn about God.',
                date: 'August 23'
            },
            {
                title: 'Children Summer Camp - Third',
                about: 'Come make a difference in the life of a child! Children are our first priority and our goal is to provide a fun, safe nurturing environment where children can learn about God.',
                date: 'August 30'
            }
        ]
    };

    // eventsHandler.getUpcomingEvents(function (err, events) {
    //     if (err === null || err === undefined)
    //         render.upcomingEvents = events;
    //     else
    //         console.error('Could not get events: ' + err);
    
    //     res.render('index', render);
    // });
    res.render('index', render);
});

module.exports = router;
