import {SET_SERIES_SEASON_INFO} from "../../constants/films/SeriesSeasonInfo";

let initialState = {
    seasonInfo: []
}

const seriesSeasonInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIES_SEASON_INFO: {
            return {
                ...state,
                seasonInfo: action.seasonInfo
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default seriesSeasonInfoReducer;