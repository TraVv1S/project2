const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?','');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answer2 = prompt('Один из последних просмотренных фильмов?',''),
      answer3 = prompt('На сколько оцените его?',''),
      answer4 = prompt('Один из последних просмотренных фильмов?',''),
      answer5 = prompt('На сколько оцените его?','');

personalMovieDB.movies[answer2] = answer3;
personalMovieDB.movies[answer4] = answer5;

console.log(personalMovieDB);