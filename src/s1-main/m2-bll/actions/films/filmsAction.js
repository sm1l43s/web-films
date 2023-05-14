import {
    SET_CURRENT_PAGE_FILMS,
    SET_FILMS,
    SET_IS_FETCHING_FILMS, SET_KEYWORD_FILMS, SET_ORDER_FILMS, SET_RATING_FROM_FILMS, SET_RATING_TO_FILMS,
    SET_TOTAL_ELEMENTS_FILMS, SET_TYPE_FILMS, SET_YEAR_FROM_FILMS, SET_YEAR_TO_FILMS
} from "../../constants/films/filmsConstants";

export const setFilms = (films) => ({type: SET_FILMS, films});
export const setTotalElementsFilms = (totalElementsFilms) => ({type: SET_TOTAL_ELEMENTS_FILMS, totalElementsFilms});
export const setCurrentPageFilms = (currentPageFilms) => ({type: SET_CURRENT_PAGE_FILMS, currentPageFilms});
export const setIsFetchingFilms = (isFetchingFilms) => ({type: SET_IS_FETCHING_FILMS, isFetchingFilms});
export const setTypeFilms = (typeFilms) => ({type: SET_TYPE_FILMS, typeFilms});
export const setRatingFromFilms = (ratingFromFilms) => ({type: SET_RATING_FROM_FILMS, ratingFromFilms});
export const setRatingToFilms = (ratingToFilms) => ({type: SET_RATING_TO_FILMS, ratingToFilms});
export const setYearFromFilms = (yearFromFilms) => ({type: SET_YEAR_FROM_FILMS, yearFromFilms});
export const setYearToFilms = (yearToFilms) => ({type: SET_YEAR_TO_FILMS, yearToFilms});
export const setOrderFilms = (orderFilms) => ({type: SET_ORDER_FILMS, orderFilms});
export const setKeywordFilms = (keywordFilms) => ({type: SET_KEYWORD_FILMS, keywordFilms});