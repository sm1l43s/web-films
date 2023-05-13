import {
    SET_CURRENT_PAGE,
    SET_FILMS,
    SET_IS_FETCHING, SET_KEYWORD, SET_ORDER, SET_RATING_FROM, SET_RATING_TO,
    SET_TOTAL_ELEMENTS,
    SET_TYPE_FILMS, SET_YEAR_FROM, SET_YEAR_TO
} from "../../constants/films/filmsConstants";

export const setFilms = (films) => ({type: SET_FILMS, films});
export const setTotalElements = (totalElements) => ({type: SET_TOTAL_ELEMENTS, totalElements});
export const setCurrentPageFilms = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetchingFilms = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setTypeFilms = (typeFilms) => ({type: SET_TYPE_FILMS, typeFilms});
export const setRatingFrom = (ratingFrom) => ({type: SET_RATING_FROM, ratingFrom});
export const setRatingTo = (ratingTo) => ({type: SET_RATING_TO, ratingTo});
export const setYearFrom = (yearFrom) => ({type: SET_YEAR_FROM, yearFrom});
export const setYearTo = (yearTo) => ({type: SET_YEAR_TO, yearTo});
export const setOrder = (orderFilms) => ({type: SET_ORDER, orderFilms});
export const setKeyword = (keyword) => ({type: SET_KEYWORD, keyword});