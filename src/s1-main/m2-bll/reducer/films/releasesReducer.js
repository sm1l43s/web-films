import {
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_RELEASES_FILMS,
    SET_TOTAL_ELEMENTS
} from "../../constants/films/releasesConstant";

let initialState = {
    releasesFilms: [],
    currentPage: 1,
    totalElements: 0,
    year: new Date().getFullYear(),
    month: getNameMonth(new Date().getMonth()),
    isFetching: false
}

export const releasesReducer = (state = initialState, action) => {
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