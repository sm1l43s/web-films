import {
    SET_CURRENT_PAGE,
    SET_FILMS,
    SET_IS_FETCHING,
    SET_KEYWORD,
    SET_ORDER,
    SET_RATING_FROM,
    SET_RATING_TO,
    SET_TOTAL_ELEMENTS,
    SET_TYPE_FILMS,
    SET_YEAR_FROM,
    SET_YEAR_TO
} from "../../constants/films/filmsConstants";

let initialState = {
    films: [],
    currentPage: 1,
    totalElements: 100,
    isFetching: false,
    type: "ALL",
    ratingFrom: 6,
    ratingTo: 10,
    yearFrom: new Date().getFullYear(),
    yearTo: new Date().getFullYear(),
    keyword: "",
    orderFilms: "RATING"
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS: {
            return {
                ...state,
                films: action.films
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_ELEMENTS: {
            return {
                ...state,
                totalElements: action.totalElements
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_TYPE_FILMS: {
            return {
                ...state,
                type: action.typeFilms
            }
        }
        case SET_RATING_FROM: {
            return {
                ...state,
                ratingFrom: action.ratingFrom
            }
        }
        case SET_RATING_TO: {
            return {
                ...state,
                ratingTo: action.ratingTo
            }
        }
        case SET_YEAR_FROM: {
            return {
                ...state,
                yearFrom: action.yearFrom
            }
        }
        case SET_YEAR_TO: {
            return {
                ...state,
                yearTo: action.yearTo
            }
        }
        case SET_KEYWORD: {
            return {
                ...state,
                keyword: action.keyword
            }
        }
        case SET_ORDER: {
            return {
                ...state,
                orderFilms: action.orderFilms
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}