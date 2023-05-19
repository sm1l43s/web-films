import {
    SET_CATALOG_FILMS,
    SET_CURRENT_PAGE_CATALOG,
    SET_IS_FETCHING_CATALOG, SET_KEYWORD_CATALOG,
    SET_ORDER_CATALOG,
    SET_RATING_FROM_CATALOG,
    SET_RATING_TO_CATALOG,
    SET_TOTAL_ELEMENTS_CATALOG,
    SET_TYPE_FILMS_CATALOG,
    SET_YEAR_FROM_CATALOG,
    SET_YEAR_TO_CATALOG
} from "../constants/catalogFilmsConstants";

export const setFilmsCatalog = (films) => ({type: SET_CATALOG_FILMS, films});
export const setTotalElementsCatalog = (totalElements) => ({type: SET_TOTAL_ELEMENTS_CATALOG, totalElements});
export const setCurrentPageCatalog = (currentPage) => ({type: SET_CURRENT_PAGE_CATALOG, currentPage});
export const setIsFetchingCatalog = (isFetching) => ({type: SET_IS_FETCHING_CATALOG, isFetching});
export const setTypeCatalog = (typeFilms) => ({type: SET_TYPE_FILMS_CATALOG, typeFilms});
export const setRatingFromCatalog = (ratingFrom) => ({type: SET_RATING_FROM_CATALOG, ratingFrom});
export const setRatingToCatalog = (ratingTo) => ({type: SET_RATING_TO_CATALOG, ratingTo});
export const setYearFromCatalog = (yearFrom) => ({type: SET_YEAR_FROM_CATALOG, yearFrom});
export const setYearToCatalog = (yearTo) => ({type: SET_YEAR_TO_CATALOG, yearTo});
export const setOrderCatalog = (orderFilms) => ({type: SET_ORDER_CATALOG, orderFilms});
export const setKeywordCatalog = (keyword) => ({type: SET_KEYWORD_CATALOG, keyword});