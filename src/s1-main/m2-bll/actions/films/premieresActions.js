import {SET_IS_FETCHING, SET_PREMIERES_FILMS} from "../../constants/films/premieresConstants";

export const setPremieresFilms = (premieresFilms) => ({type:SET_PREMIERES_FILMS, premieresFilms});
export const setIsFetchingPremieres = (isFetching) => ({type: SET_IS_FETCHING, isFetching});