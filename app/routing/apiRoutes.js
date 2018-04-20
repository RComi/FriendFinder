// import { ok } from 'assert';

var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        console.log ("REQ " + req);
        var friendName = "";
        var friendPhoto = "";
        var userAboutInfo = req.body;
        var userResponse = userAboutInfo.ratings;
        var totalDiff = 40;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;

            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].ratings[j] - userResponse[j]);
            }

            if (diff < totalDiff) {
                totalDiff = diff;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
            }
        }

        friends.push(req.body);

        res.json({
            name: friendName,
            photo: friendPhoto
        });

        console.log("RES" + res);
    });
};