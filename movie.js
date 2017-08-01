var keyInfo = require('./env.js');
var request = require('request');

// module exports a function named get(movieTitle)
function get(movieTitle) {
// get(movieTitle) makes request to api with movieTitle as argument
// Hint: what do you need to do to use the request library?
	request("https://www.googleapis.com/customsearch/v1?key=" + keyInfo.apiKey + "&cx=" + keyInfo.apiId + "&q=" + movieTitle, function(err, res, body){
	// parse the response you receive
	// console.log() something received from the api for each movie
	// console.log() each search item's snippet field from it. 
	console.log(JSON.parse(body).items[0].snippet);
    });
}

module.exports = get;

// test file by running it with node to verify that it works

// var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + keyInfo.apiKey + "&cx=" + keyInfo.apiId + "&q=face+off+movie";
// console.log(apiUrl);
