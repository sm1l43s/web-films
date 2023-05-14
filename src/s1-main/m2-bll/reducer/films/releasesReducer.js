import {
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_RELEASES_FILMS,
    SET_TOTAL_ELEMENTS
} from "../../constants/films/releasesConstant";
import {getNameMonthByNumber} from "../../utils";

let initialState = {
    releasesFilms: [],
    currentPage: 1,
    totalElements: 0,
    year: new Date().getFullYear(),
    month: getNameMonthByNumber(new Date().getMonth()),
    isFetching: false
}

const releasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RELEASES_FILMS: {
            return {
                ...state,
                releasesFilms: action.releasesFilms
            }
        }

        case SET_TOTAL_ELEMENTS: {
            return {
                ...state,
                totalElements: action.totalElements
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
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

export default releasesReducer;