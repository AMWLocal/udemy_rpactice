const nunberOfFilms = +prompt('Сколько фильмов вы посмотрели', '')
const personalMovieDB = {
    count: nunberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('один из последних фиьльмов', '')
const b = prompt('На сколько оцените его', '')
const c = prompt('один из последних фиьльмов', '')
const d = prompt('На сколько оцените его', '')
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB) 