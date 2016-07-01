var express = require('express')
var app = express();
var allTweets = [

    {user: 'John', tweet: 'Go Lakers.'},
    {user: 'John', tweet: 'Go Lakers.'},
    {user: 'Steph', tweet: 'Tweet 1.'},
    {user: 'John', tweet: 'It is raining'},
    {user: 'James', tweet: 'Tweet a.'},
    {user: 'James', tweet: 'Tweet b.'},
    {user: 'John', tweet: 'Good night.'},
    {user: 'Steph', tweet: 'Tweet 2.'},
    {user: 'Steph', tweet: 'Tweet 3.'},
    {user: 'James', tweet: 'Tweet c.'},

]

app.get('/tweets/:user', function(req, res){
  var matched = [];
  allTweets.forEach(function(thisTweet) {
    if(thisTweet.user == req.params.user) {
      matched.push(thisTweet)
    }
  });
  res.json(matched);
});

app.listen(8080);
