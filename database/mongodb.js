var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var url = ''; // Set this to be your database URL.
var nodeCleanup = require('node-cleanup');
var myDb;

exports.connect = function(callback) {
    if (myDb === undefined) {
        MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          console.log("Connected correctly to server");
          myDb = db;
          callback(null, myDb);
      });
  } else {
    callback(null, myDb);
  }
}

nodeCleanup(function(exitCode, signal) {
    if (myDb !== undefined) {
        myDb.close();
        myDb = undefined;
    }
    console.log("\nDatabase closed due to: " + exitCode + " on " + signal);
});

// MySql
//
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'fake',
//     password: 'fake',
//     database: 'test'
// });
//
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//
//     console.log('connected as id ' + connection.threadId);
// });
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
//
// connection.end();
