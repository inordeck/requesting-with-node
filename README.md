## Homework: Requesting with Node

Tonight you need to use Node.js to make a request to **OMDB**.

- Fork and clone this repo.
- Define `movie.js` and an `app.js`.
- Place your API key in a separate `env.js` file.
  - Export it.
  - Require it in `movie.js`.
  - .gitignore it.

#### movie.js

- The **movie** file will contain a **Module**.
- This module should *export* a function named `get(movieTitle)`.
- `get(movieTitle)` should make a *request* to OMDB with the *movieTitle* as an argument.
- You should console.log your output.
- You should test this with `node` to verify it works!

#### app.js

- The **app** should *require* your movie module.
- You should define your `threeFavouriteMovies` as an array.
- You should then use the `Array.forEach()` function to loop through them.
- As you loop through them, you should call on your movie module's `get(movieTitle)`


#### Starter Code: app.js
```javascript
var movie = require("./movie");
var threeFavouriteMovies = [];
threeFavouriteMovies.forEach(function(film){
  // your code here
})
```