
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}))



require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

var port = 3000;
app.listen(3000, function(){ console.log('serveer on ', 3000)});