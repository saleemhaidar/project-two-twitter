var express = require('express');
var app = express();
var allTweets = {
    john: {name: 'John', tweets: ['Go Lakers.', 'It is raining.', 'Good night.'], image: 'images/John.png'},
    peter: {name: 'Peter', tweets: ['Tweet 1.', 'Tweet 2.', 'Tweet 3.'], image: 'images/peter-griffin.jpeg'},
    homer: {name: 'Homer', tweets: ['Tweet a.', 'Tweet b.', 'Tweet c.'], image: 'images/homer-simpson.gif-c200'}
    // {user: 'Steph', tweet: 'Tweet 1.'},
    // {user: 'John', tweet: 'It is raining'},
    // {user: 'James', tweet: 'Tweet a.'},
    // {user: 'James', tweet: 'Tweet b.'},
    // {user: 'John', tweet: 'Good night.'},
    // {user: 'Steph', tweet: 'Tweet 2.'},
    // {user: 'Steph', tweet: 'Tweet 3.'},
    // {user: 'James', tweet: 'Tweet c.'},

}

app.use(express.static('./'))

app.get('/tweets/:user', function(req, res){
  var matched = [];
  allTweets.forEach(function(thisTweet) {
    if(thisTweet.user == req.params.user) {
      matched.push(thisTweet)
    }
  });
  res.json(matched);
});

app.get('/data', function(req, res){

  res.send(allTweets.john);
});

app.listen(8080);
