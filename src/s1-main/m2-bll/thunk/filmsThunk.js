import {FilmsApi} from "../../m3-dal/api/filmsApi";
import {setIsFetchingReleases, setReleasedFilms, setTotalElementsReleases} from "../actions/films/releasesAction";
import {setIsFetchingPremieres, setPremieresFilms} from "../actions/films/premieresActions";
import {setFilms, setIsFetchingFilms, setTotalElementsFilms} from "../actions/films/filmsAction";
import {setFilmInfo, setIsFetching} from "../actions/films/filmInfoAction";

export const getReleasesFilms = (year, month, page) => async (dispatch) => {
    dispatch(setIsFetchingReleases(true));
    let response = await FilmsApi.getReleasesFilms(year, month, page);
    if (response.status === 200) {
        dispatch(setReleasedFilms(response.data.releases));
        dispatch(setTotalElementsReleases(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingReleases(false));
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
        dispatch(setTotalElementsFilms(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingFilms(false));
}

export const getFilmInfoById = (id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await FilmsApi.getFilmInfoById(id);
    if (response.status === 200) {
        dispatch(setFilmInfo(response.data));
    }
    dispatch(setIsFetching(false));
}