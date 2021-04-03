"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

let lastOfWatchedFilms = prompt('Как называется последний просмотренный Вами фильм?');
let estimation = prompt('Оцените этот фильм по 10 бальной шкале');

personalMovieDB.movies[lastOfWatchedFilms] = estimation;
