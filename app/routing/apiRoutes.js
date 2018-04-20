//Require path
var path = require('path');

//Get the friends.js
var friends = require('../data/friends.js');

module.exports = function (app) {
    //get the friends from the friends.js
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //Compares friends input to existing friends and finds the best match to pass
    //back to the modal
    app.post('/api/friends', function (req, res) {
        var friendName = "";
        var friendPhoto = "";
        var userAboutInfo = req.body;
        var userResponse = userAboutInfo.ratings;
        var totalDiff = 40;

        //iterates through the friends from friends.js
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            //iterates through the users input
            for (var j = 0; j < userResponse.length; j++) {
                //calculates the difference between the users response and friends list ratings 
                //and adds the difference
                diff += Math.abs(userResponse[j] - friends[i].ratings[j]);
            }
            //the max possible difference is set at 40 and it will
            //continue to check for the lowest possible diff and assigns 
            //the match to the vars
            if (diff < totalDiff) {
                totalDiff = diff;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
            }
        }
        //adds user input to the friend.js
        friends.push(req.body);
        //sets up the response and sends back to the modal for display
        res.json({
            name: friendName,
            photo: friendPhoto
        });
    });
};