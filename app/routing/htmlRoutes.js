//Require path
var path = require('path');

module.exports = function(app) {
	//route to get the home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname,'../public/home.html'));
	});

	//route to get the survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname,'../public/survey.html'));
	});
};