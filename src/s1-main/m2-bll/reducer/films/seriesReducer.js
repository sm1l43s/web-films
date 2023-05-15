import {
    SET_CURRENT_PAGE_SERIES,
    SET_IS_FETCHING_SERIES,
    SET_SERIES,
    SET_TOTAL_ELEMENTS_SERIES
} from "../../constants/films/SeriesConstants";

let initialState = {
    series: [],
    currentPageSeries: 1,
    totalElementsSeries: 100,
    isFetchingSeries: false,
    typeSeries: "TV_SERIES",
    ratingFromSeries: 0,
    ratingToSeries: 10,
    yearFromSeries: new Date().getFullYear(),
    yearToSeries: new Date().getFullYear(),
    keywordSeries: "",
    orderSeries: "NUM_VOTE"
}

const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIES: {
            return {
                ...state,
                series: action.series
            }
        }
        case SET_CURRENT_PAGE_SERIES: {
            return {
                ...state,
                currentPageSeries: action.currentPageSeries
            }
        }
        case SET_TOTAL_ELEMENTS_SERIES: {
            return {
                ...state,
                totalElementsSeries: action.totalElementsSeries
            }
        }
        case SET_IS_FETCHING_SERIES: {
            return {
                ...state,
                isFetchingSeries: action.isFetchingSeries
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default seriesReducer;