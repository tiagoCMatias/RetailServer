const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongodb = require('./mongodb');

const retailRoute = require('./api/routes/retail');
const searchRoute = require('./api/routes/search');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers to allow
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, cache-control, pragma, Accept, Authorization');

    if(req.method === "OPTIONS")
    {
        res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    // Pass to next layer of middleware
    next();
});

/** Routes **/
app.use('/api/retail', retailRoute);
app.use('/api/search', searchRoute);

/** Error Handling */
app.use( (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use( (error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error);
    res.json({
        error: {
            message: 'error'
        }
    });
});

module.exports = app;