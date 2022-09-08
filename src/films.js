// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie =>movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directorMovie =array.filter(movie => movie.director === director );
  return directorMovie;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //agafo el score de pelicules del directory
  let directorMovies = getMoviesFromDirector(array, director).map(movie=>movie.score);//returning a new array of scores
  //average calculation
  let movieAverage  = directorMovies.reduce((counter, current) =>(counter + current))/directorMovies.length;
  
  let roundedAverage = parseFloat(movieAverage).toFixed(2);
  return movieAverage ;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  //get arra with movie title 
  let titleArray = array.map((movie)=>movie.title)
  //order array with alphabetically
  let sortedArray = titleArray.sort((a,b)=>((a > b) ? 1 : -1 ));
  let first20 = sortedArray.slice(0,20); //slice first 20 items
  return first20;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 //sort modifies the element in the original array
let moviesCopy =[...movies];
//get array with movies ordered by year
let orderedArray = moviesCopy.sort((a, b)=>{
   if (a.year > b.year) return 1;
   if (a.year < b.year) return -1;
   if (a.year === b.year){
      if (a.title > b.title) return  1;
      if (a.title < b.title) return  -1;
      return 0;
    }
  });
    
return orderedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  //array of movies of a given category
  let moviesFromGenre = movies.filter((movie)=> movie.genre.includes(category));
  //filter movies with score higher than 0
  let moviesWithScore = moviesFromGenre.filter((movie)=>movie.score != ""); 
  //calculate average of films from one category
  let moviesAverageScore =(moviesWithScore.reduce((counter, current) =>(counter + current))/2, moviesWithScore[0].score);
  let roundedResult = parseFloat(moviesAverageScore.toFixed(2))
  return roundedResult;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
let minutes =[];

const convertToMin = hours => hours * 60;

let arrayOfDurations = movies.map(movie=>movie.duration.split('h'));


arrayOfDurations.forEach(movie =>{
    let durationTime =[];
  if(movie.length>1 && movie[1].includes('min')){
    durationTime.duration = convertToMin(Number(movie[0])) + Number(movie[1].replace('min', ''));
  }else if (movie[0].includes('min')){
    durationTime.duration = Number(movie[0].replace('min',''));
  }
  else{
    durationTime.duration = convertToMin(Number(movie[0]));
  }
  minutes.push(durationTime)
})

return minutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  //sortByYear
  let sortedByYear = movies.orderByYear(movies)

  //filter the movies of the year

  let filmsOfYear= sortedByYear.filter(movie => movie.year ===year);

  //sort by score
  let filmsOfYearByScore = filmsOfYear.sort((a,b)=>{
    return (b-a);
  })

  let highestScoredMovie = filmsOfYearByScore.splice(0,1)

  return highestScoredMovie


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
