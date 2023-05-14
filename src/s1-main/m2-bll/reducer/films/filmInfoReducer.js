import {SET_FILM_INFO, SET_IS_FETCHING} from "../../constants/films/FilmInfoConstants";

let initialState = {
    film: [],
    isFetching: false,
}

export const filmInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM_INFO: {
            return {
                ...state,
                film: action.filmInfo
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}