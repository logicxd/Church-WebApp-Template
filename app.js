const PORT = process.env.PORT || 8081;

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');

// Server
var server = app.listen(PORT, function () {
    console.log('Server has started on port ' + PORT);
});

// Routes
var index = require('./routes/index');
var contact = require('./routes/contact');

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routing
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/contact', contact);

// 404 error
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    if (res.app.get('env') === 'development')
        next(err);
});

module.exports = app;
