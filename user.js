function User(name, tweets, image) {
  this.name = name;
  this.tweets = tweets;
  this.image = image;
}

var john = new User('John', ['Go Lakers.', 'It is raining.', 'Good night.'], 'images/John.png');
var steph = new User('Steph', ['Tweet 1', 'Tweet 2','Tweet 3']);
var james = new User('James', ['Tweet a', 'Tweet b','Tweet c']);

var allUsers = [
  john, steph, james
];

// for (var i = 0; i < allUsers.length; i++) {
//   var thisUser = allUsers[i];
  showUser(john);


function showUser(theUser){


  for (var i = 0; i < theUser.tweets.length; i++) {

    var thisTweet = theUser.tweets[i];
    var userPage = document.getElementById('userPage');

    var container = document.createElement('div');
    container.setAttribute('class', 'col-md-6 col-md-offset-3');

    var subContainer = document.createElement('div');
    subContainer.setAttribute('class', 'panel panel-default');

    var user =document.createElement('div');
    user.setAttribute('class', 'panel-body');

    var theName = document.createElement('h3');
    theName.setAttribute('class', 'name')
    theName.textContent = theUser.name

    var theImage = document.createElement('img');
    theImage.setAttribute('src', theUser.image);
    theImage.setAttribute('class', 'img-responsive col-md-3' )

    theTweets1 = document.createElement('span');
    theTweets1.setAttribute('class', 'col-md-6');
    theTweets1.textContent = thisTweet;

    document.body.appendChild(userPage);
    userPage.appendChild(container);
    container.appendChild(subContainer);
    subContainer.appendChild(user);
    user.appendChild(theName);
    user.appendChild(theImage);
    user.appendChild(theTweets1);
  }
}
