let nunberOfFilms;

const personalMovieDB = {
    count: nunberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    nunberOfFilms = +prompt('Сколько фильмов вы посмотрели', '')
    while (nunberOfFilms == '' || nunberOfFilms == null || isNaN(nunberOfFilms)) {
        nunberOfFilms = +prompt('Сколько фильмов вы посмотрели', '')

    }
};
start()
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из последних фиьльмов', '')
        const b = prompt('На сколько оцените его', '');
        if (a !== null && b != null && b != '' && a != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error')
            i--;
        }
    }
    console.log(personalMovieDB)
}
rememberMyFilms()

function isPrivat() {
    if (personalMovieDB.privat) {
        console.log('is privat')
    } else {
        console.log('is public')

    }
}
isPrivat()

