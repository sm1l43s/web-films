import {
    SET_CURRENT_PAGE_FILMS,
    SET_FILMS,
    SET_IS_FETCHING_FILMS, SET_KEYWORD_FILMS, SET_ORDER_FILMS, SET_RATING_FROM_FILMS, SET_RATING_TO_FILMS,
    SET_TOTAL_ELEMENTS_FILMS, SET_TYPE_FILMS, SET_YEAR_FROM_FILMS, SET_YEAR_TO_FILMS
} from "../../constants/films/filmsConstants";

let initialState = {
    films: [],
    currentPageFilms: 1,
    totalElementsFilms: 100,
    isFetchingFilms: false,
    typeFilms: "FILM",
    ratingFromFilms: 0,
    ratingToFilms: 10,
    yearFromFilms: new Date().getFullYear(),
    yearToFilms: new Date().getFullYear(),
    keywordFilms: "",
    orderFilms: "NUM_VOTE"
}

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS: {
            return {
                ...state,
                films: action.films
            }
        }
        case SET_CURRENT_PAGE_FILMS: {
            return {
                ...state,
                currentPageFilms: action.currentPageFilms
            }
        }
        case SET_TOTAL_ELEMENTS_FILMS: {
            return {
                ...state,
                totalElementsFilms: action.totalElementsFilms
            }
        }
        case SET_IS_FETCHING_FILMS: {
            return {
                ...state,
                isFetchingFilms: action.isFetchingFilms
            }
        }
        case SET_TYPE_FILMS: {
            return {
                ...state,
                typeFilms: action.typeFilms
            }
        }
        case SET_RATING_FROM_FILMS: {
            return {
                ...state,
                ratingFromFilms: action.ratingFromFilms
            }
        }
        case SET_RATING_TO_FILMS: {
            return {
                ...state,
                ratingToFilms: action.ratingToFilms
            }
        }
        case SET_YEAR_FROM_FILMS: {
            return {
                ...state,
                yearFromFilms: action.yearFromFilms
            }
        }
        case SET_YEAR_TO_FILMS: {
            return {
                ...state,
                yearToFilms: action.yearToFilms
            }
        }
        case SET_KEYWORD_FILMS: {
            return {
                ...state,
                keywordFilms: action.keywordFilms
            }
        }
        case SET_ORDER_FILMS: {
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

export default filmsReducer;