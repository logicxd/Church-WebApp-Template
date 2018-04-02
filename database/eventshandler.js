var database = require('./mongodb');
var assert = require('assert');
var collectionName = 'events';
var localEvents = [
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
];


exports.createUpcomingEvents = function(events, callback) {
    database.connect(function (err, db) {
        var collection = db.collection(collectionName);

        collection.insertMany(events, function(err, result) {
            console.log("Inserted 3 documents into the events collection");
            if (callback !== 'undefined') callback(err, result);
        });
    });
}

exports.getUpcomingEvents = function (callback) {
    var date = new Date();

    database.connect(function (err, db) {
        var collection = db.collection(collectionName);
        collection.find({}).toArray(function (err, events) {
            console.log("Found the following records");
            console.dir(events);
            if (callback !== 'undefined') callback(err, events);
            else callback(err, localEvents);
        });
    });
}
