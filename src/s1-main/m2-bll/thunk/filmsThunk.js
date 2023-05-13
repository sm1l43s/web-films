import {FilmsApi} from "../../m3-dal/api/filmsApi";
import {setIsFetching, setReleasedFilms, setTotalElements} from "../actions/films/releasesAction";
import {setIsFetchingPremieres, setPremieresFilms} from "../actions/films/premieresActions";
import {setFilms, setIsFetchingFilms} from "../actions/films/filmsAction";

export const getReleasesFilms = (year, month, page) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await FilmsApi.getReleasesFilms(year, month, page);
    if (response.status === 200) {
        dispatch(setReleasedFilms(response.data.releases));
        dispatch(setTotalElements(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetching(false));
}

export const getPremieresFilms = (year, month) => async (dispatch) => {
    dispatch(setIsFetchingPremieres(true));
    let response = await FilmsApi.getPremieres(year, month);
    if (response.status === 200) {
        dispatch(setPremieresFilms(response.data.items));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingPremieres(false));
}

export const getFilms = (type, ratingFrom, ratingTo, yearFrom, yearTo, page, order, keyword) => async (dispatch) => {
    dispatch(setIsFetchingFilms(true));
    let response = await FilmsApi.getFilms(type, ratingFrom, ratingTo, yearFrom, yearTo, page, order, keyword);
    if (response.status === 200) {
        dispatch(setFilms(response.data.items));
        dispatch(setTotalElements(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingFilms(false));
}