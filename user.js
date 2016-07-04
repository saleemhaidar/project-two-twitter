
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/data');
  xhr.send();
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.responseText);
    console.log(response);

    for (var i = 0; i < response.tweets.length; i++) {
      var thisTweet = response.tweets[i];
      var userPage = document.getElementById('userPage');

      var container = document.createElement('div');
      container.setAttribute('class', 'col-md-6 col-md-offset-3');

      var subContainer = document.createElement('div');
      subContainer.setAttribute('class', 'panel panel-default');

      var user = document.createElement('div');
      user.setAttribute('class', 'panel-body');

      var theName = document.createElement('h3');
      theName.setAttribute('class', 'name')
      theName.textContent = response.name

      var theImage = document.createElement('img');
      theImage.setAttribute('src', response.image);
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
  });
