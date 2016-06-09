var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'KhT2RcthrwWO1TmEzfEZkcJg4',
  consumer_secret: 'b8neQpszI9brBj4WRH8Ii7IRnOfS0u4gI2KMWTZHdVlN8wKlPA',
  access_token_key: '56072785-ChDB6L9Ru4z71z8nWEWDWaqymDhfzBVyy1Q9Kvcnx',
  access_token_secret: 'K4aEqyuHyEdFerMzynv9W2IXLpWLmSKf1uEX0qOFqFzLB'
});
 
var params = {screen_name: 'benneyboy444', count: 1};
client.get('statuses/user_timeline', params, function(error, data, response){
  if (!error) {
    console.log("Name: " + data[0].user.name);
    console.log("Tweet: " + data[0].text);
  }
});

// client.post('statuses/update', {status: 'Hey'}, function(error, data, response) {
//   if (!error) {
//     console.log(data);
//   }
// });