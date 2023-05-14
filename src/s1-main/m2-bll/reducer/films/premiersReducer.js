import {SET_IS_FETCHING, SET_PREMIERES_FILMS} from "../../constants/films/premieresConstants";
import {getNameMonthByNumber} from "../../utils";

let initialState = {
    premieresFilms: [],
    year: new Date().getFullYear(),
    month: getNameMonthByNumber(new Date().getMonth()),
    isFetching: false,
}

export const premieresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PREMIERES_FILMS: {
            return {
                ...state,
                premieresFilms: action.premieresFilms
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