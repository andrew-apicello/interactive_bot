var twitterKeys = require("./keys.js");
var Twitter = require('twitter');
var index= require('./index.js');


switch(process.argv[2]) {
	case "my-tweets":
	console.log("Return: my-tweets")
	runTwitter()
	break;
	case "spotify-this-song":
	console.log("Return: spotify-this-song")
	runSpotify();
	break;
	case "movie-this":
	console.log("Return: movie-this")
	break;
	case "do-what-it-says":
	console.log("Return: do-what-it-says")
	break;
	default:
	console.log("Try a predefined command")
}


//---------------------------------------------------------

function runTwitter(){
	var client = new Twitter({
		consumer_key: twitterKeys.consumer_key,
		consumer_secret: twitterKeys.consumer_secret,
		access_token_key: twitterKeys.access_token_key,
		access_token_secret: twitterKeys.access_token_secret
	});

	var params = {screen_name: 'Social_Bot_4000'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets[0].text);
			console.log(tweets[1].text)
			console.log(tweets[2].text)
			console.log(tweets[3].text)
		}
	});
}

// //---------------------------------------------------------

function runSpotify(){
	var Spotify = require('node-spotify-api');
	
	var spotify = new Spotify({
		id: "23bd6337c0d74d29bdcefa2755892f4e",
		secret: "99e84717d78149eb92883b9368248f59"
	});
	spotify.search({ 
		type: 'track', 
		query: 'All the Small Things',
		limit: "1"
	}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
		console.log("Artist: " + data.tracks.items[0].artists[0].name); 
		console.log("Album: " + data.tracks.items[0].album.name); 
		console.log("Song: " + data.tracks.items[0].name); 
	});
}