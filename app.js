// app requires movie module
var movie = require("./movie.js");
var get = require("./movie.js");

// define threeFavoriteMovies as array
var threeFavoriteMovies = ["aliens", "district 9", "the force awakens"];
var moviesFormattedForSearch = [];

// use the Array.forEach() function to loop through threeFavoriteMovies
// loop through array and call on your movie module's get(movieTitle)
threeFavoriteMovies.forEach(function(film){
	// your code here
	for (var i = 0; i < film.length; i++) {
		film = film.replace(" ", "+");
	}
	moviesFormattedForSearch.push(film + "+Movie");
});

moviesFormattedForSearch.forEach(function(film){
	get(film);
});
