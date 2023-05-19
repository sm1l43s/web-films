import {
    SET_CATALOG_FILMS,
    SET_CURRENT_PAGE_CATALOG,
    SET_IS_FETCHING_CATALOG, SET_KEYWORD_CATALOG, SET_ORDER_CATALOG,
    SET_RATING_FROM_CATALOG,
    SET_RATING_TO_CATALOG,
    SET_TOTAL_ELEMENTS_CATALOG, SET_TYPE_FILMS_CATALOG,
    SET_YEAR_FROM_CATALOG,
    SET_YEAR_TO_CATALOG
} from "../constants/catalogFilmsConstants";

let initialState = {
    films: [],
    currentPage: 1,
    totalElements: 0,
    isFetching: false,
    type: "",
    ratingFrom: 0,
    ratingTo: 10,
    yearFrom: 1895,
    yearTo: new Date().getFullYear() + 5,
    keyword: "",
    order: ""
}

export const catalogFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG_FILMS: {
            return {
                ...state,
                films: action.films
            }
        }
        case SET_CURRENT_PAGE_CATALOG: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_IS_FETCHING_CATALOG: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_RATING_FROM_CATALOG: {
            return {
                ...state,
                ratingFrom: action.ratingFrom
            }
        }
        case SET_RATING_TO_CATALOG: {
            return {
                ...state,
                ratingTo: action.ratingTo
            }
        }
        case SET_TOTAL_ELEMENTS_CATALOG: {
            return {
                ...state,
                totalElements: action.totalElements
            }
        }
        case SET_YEAR_FROM_CATALOG: {
            return {
                ...state,
                yearFrom: action.yearFrom
            }
        }
        case SET_YEAR_TO_CATALOG: {
            return {
                ...state,
                yearTo: action.yearTo
            }
        }
        case SET_ORDER_CATALOG: {
            return {
                ...state,
                order: action.orderFilms
            }
        }
        case SET_TYPE_FILMS_CATALOG: {
            return {
                ...state,
                type: action.typeFilms
            }
        }
        case SET_KEYWORD_CATALOG: {
            return {
                ...state,
                keyword: action.keyword
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}