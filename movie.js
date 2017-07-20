'use strict'

var keyInfo = require('./env.js');
var request = require('request');

// module exports a function named get(movieTitle)
function get(movieTitle) {
// get(movieTitle) makes request to api with movieTitle as argument
// Hint: what do you need to do to use the request library?
	getJSON("https:///www.googleapis.com/customsearch/v1?key=" + keyInfo.apiKey + "&cx=" + keyInfo.apiId + "&q=movieTitle")
// parse the response you receive
	.done(function(movieTitle){
    	console.log(movieTitle);
    	var favoriteMovies = JSON.parse(data);
    });
// console.log() each search item's snippet field from it. 
	console.log(snippet);
}

module.exports = get();

// \(`o´)/ it's not working and i don't know why!!! \(`o´)/ //


// console.log() something received from the api for each movie


// test file by running it with node to verify that it works


// var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + keyInfo.apiKey + "&cx=" + keyInfo.apiId + "&q=face+off+movie";
// console.log(apiUrl);
