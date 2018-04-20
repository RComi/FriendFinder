//added required packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();

//set up parser for express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

//set up routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Created a port for node localhost
var port = 3500;
app.listen(port, function () {
    console.log('server on ', port)
});