"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let obj = {
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

obj.movies[lastOfWatchedFilms] = estimation;
