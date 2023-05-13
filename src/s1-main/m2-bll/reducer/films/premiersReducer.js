import {SET_IS_FETCHING, SET_PREMIERES_FILMS} from "../../constants/films/premieresConstants";

let initialState = {
    premieresFilms: [],
    year: new Date().getFullYear(),
    month: getNameMonth(new Date().getMonth()),
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

function getNameMonth(numberMonth) {
    switch (numberMonth) {
        case 0: {
            return "JANUARY";
        }
        case 1: {
            return "FEBRUARY";
        }
        case 2: {
            return "MARCH";
        }
        case 3: {
            return "APRIL";
        }
        case 4: {
            return "MAY";
        }
        case 5: {
            return "JUNE";
        }
        case 6: {
            return "JULY";
        }
        case 7: {
            return "AUGUST";
        }
        case 8: {
            return "SEPTEMBER";
        }
        case 9: {
            return "OCTOBER";
        }
        case 10: {
            return "NOVEMBER";
        }
        case 11: {
            return "DECEMBER";
        }
    }
}