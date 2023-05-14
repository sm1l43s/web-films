import {SET_FILM_INFO, SET_IS_FETCHING} from "../../constants/films/FilmInfoConstants";

export const setFilmInfo = (filmInfo) => ({type:SET_FILM_INFO, filmInfo});
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching});