var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
  consumerKey: "KhT2RcthrwWO1TmEzfEZkcJg4",
  consumerSecret: "b8neQpszI9brBj4WRH8Ii7IRnOfS0u4gI2KMWTZHdVlN8wKlPA",
  callback: "https://google.com"
});

twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
	if (error) {
		console.log("Error getting OAuth request token : " + error);
	} else {
		console.log(requestToken);
    console.log(requestTokenSecret);
	}
});