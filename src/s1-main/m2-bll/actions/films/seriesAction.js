import {
    SET_CURRENT_PAGE_SERIES,
    SET_IS_FETCHING_SERIES,
    SET_SERIES,
    SET_TOTAL_ELEMENTS_SERIES
} from "../../constants/films/SeriesConstants";

export const setSeries = (series) => ({type: SET_SERIES, series});
export const setCurrentPageSeries = (currentPageSeries) => ({type: SET_CURRENT_PAGE_SERIES, currentPageSeries});
export const setTotalElementsSeries = (totalElementsSeries) => ({type: SET_TOTAL_ELEMENTS_SERIES, totalElementsSeries});
export const setIsFetchingSeries = (isFetchingSeries) => ({type: SET_IS_FETCHING_SERIES});