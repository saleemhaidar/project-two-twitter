function User(name, tweets, image) {
  this.name = name;
  this.tweets = tweets;
  this.image = image;
}

var john = new User('John', ['Go Lakers.', 'It is raining.', 'Good night.'], 'images/John.png');
var steph = new User('Steph', ['Tweet 1', 'Tweet 2','Tweet 3']);
var james = new User('James', ['Tweet 1', 'Tweet 2','Tweet 3']);


var userPage = document.getElementById('userPage');

var container = document.createElement('div');
container.setAttribute('class', 'col-md-6 col-md-offset-3');

var subContainer = document.createElement('div');
subContainer.setAttribute('class', 'panel panel-default');

var user =document.createElement('div');
user.setAttribute('class', 'panel-body');

var theName = document.createElement('h3');
theName.textContent = john.name

var theImage = document.createElement('img');
theImage.setAttribute('src', john.image);
theImage.setAttribute('class', 'img-responsive col-md-3' )

theTweets = document.createElement('h5');
theTweets.textContent = john.tweets

document.body.appendChild(userPage);
userPage.appendChild(container);
container.appendChild(subContainer);
subContainer.appendChild(user);
user.appendChild(theName);
user.appendChild(theImage);
theName.appendChild(theTweets);



// window.addEventListener('load', function(e) {
//
// })
