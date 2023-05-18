import {FilmsApi} from "../../m3-dal/api/filmsApi";
import {setIsFetchingReleases, setReleasedFilms, setTotalElementsReleases} from "../actions/films/releasesAction";
import {setIsFetchingPremieres, setPremieresFilms} from "../actions/films/premieresActions";
import {setFilms, setIsFetchingFilms, setTotalElementsFilms} from "../actions/films/filmsAction";
import {
    setFilmInfo,
    setFilmInfoImages, setFilmInfoReviews, setFilmInfoVideos,
    setIsFetching,
    setIsFetchingImages, setIsFetchingReviews, setIsFetchingSimilars, setIsFetchingVideos, setSimilars,
    setTotalElementsImages, setTotalElementsReviews, setTotalElementsSimilars, setTotalElementsVideos
} from "../actions/films/filmInfoAction";
import {setIsFetchingSeries, setSeries, setTotalElementsSeries} from "../actions/films/seriesAction";
import {setSeriesSeasonInfo} from "../actions/films/seriesSeasonInfo";
import {
    setFilmsByKeywordSearch,
    setIsFetchingSearch,
    setTotalElementsBySearchKeyword
} from "../actions/commonSetActions";

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

export const getSeries = (type, ratingFrom, ratingTo, yearFrom, yearTo, page, order, keyword) => async (dispatch) => {
    dispatch(setIsFetchingSeries(true));
    let response = await FilmsApi.getFilms(type, ratingFrom, ratingTo, yearFrom, yearTo, page, order, keyword);
    if (response.status === 200) {
        dispatch(setSeries(response.data.items));
        dispatch(setTotalElementsSeries(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingSeries(false));
}

export const getFilmInfoById = (id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await FilmsApi.getFilmInfoById(id);
    if (response.status === 200) {
        dispatch(setFilmInfo(response.data));
    }
    dispatch(setIsFetching(false));
}

export const getSeriesSeasonInfo = (id) => async (dispatch) => {
    let response = await FilmsApi.getSeriesSeasonInfo(id);
    if (response.status === 200) {
        dispatch(setSeriesSeasonInfo(response.data.items));
    } else {
        console.log(response.status);
    }
}
export const getImagesFilmInfo = (id, page) => async (dispatch) => {
    dispatch(setIsFetchingImages(true));
    let response = await FilmsApi.getImagesFilmInfo(id, page);
    if (response.status === 200) {
        dispatch(setFilmInfoImages(response.data.items));
        dispatch(setTotalElementsImages(response.data.total));
    } else {
        console.log(response.status);
    }
    dispatch(setIsFetchingImages(false));
}
export const getVideosFilmInfo = (id, page) => async (dispatch) => {
    dispatch(setIsFetchingVideos(true));
    let response = await FilmsApi.getVideosFilmInfo(id, page);
    if (response.status === 200) {
        dispatch(setFilmInfoVideos(response.data.items));
        dispatch(setTotalElementsVideos(response.data.total));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingVideos(false));
}

export const getReviewsFilmInfo = (id, page) => async (dispatch) => {
    dispatch(setIsFetchingReviews(true));
    let response = await FilmsApi.getReviewsFilmInfo(id, page);
    if (response.status === 200) {
        dispatch(setFilmInfoReviews(response.data.items));
        dispatch(setTotalElementsReviews(response.data.total));
    } else {
        console.log(response.status);
    }
    dispatch(setIsFetchingReviews(false));
}

export const getSimilarsFilmById = (id) => async (dispatch) => {
    dispatch(setIsFetchingSimilars(true));
    let response = await FilmsApi.getSimilarsFilmById(id);
    if (response.status === 200) {
        dispatch(setSimilars(response.data.items));
        dispatch(setTotalElementsSimilars(response.data.total));
    } else {
        console.log(response.status);
    }
    dispatch(setIsFetchingSimilars(false));
}

export const getFilmsBySearchKeyword = (keyword, page) => async (dispatch) => {
    dispatch(setIsFetchingSearch(true));
    let response = await FilmsApi.getFilmsBySearchKeyword(keyword, page);
    if (response.status === 200) {
        dispatch(setFilmsByKeywordSearch(response.data.films));
        dispatch(setTotalElementsBySearchKeyword(response.data.searchFilmsCountResult));
    } else {
        console.error(response.status);
    }
    dispatch(setIsFetchingSearch(false));
}