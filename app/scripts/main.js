var userProfile = {
  name: "Billy Bob Joe",
  location: "Table Top Rock",
  avatar: "http://www.lorempixel.com/150/150/people/3"
};

var Tweet = function (userProfile) {
  this.name = userProfile.name;
  this.location = $('.sharelocation').val();
  this.msg = $('.share').val();
  this.avatar = userProfile.avatar;
  this.time = 'Feb 1, 2014 6:30pm';
  this.isFavorite = false;
};

tweetArray = [];

var postTemplate = _.template($('.tweet-template').text());


$('.sharebutton').click( function() {
  var tweet = new Tweet(userProfile);
  tweetArray.push(tweet);
  $('.tweets').prepend( postTemplate(tweet) );
});