import {SET_ACTIVE_TAB, SET_ACTIVE_TAB_FILM_INFO, SET_IS_SEARCH_BAR} from "../constants/commonSetConstants";

const initialState = {
    isSearchBar: false,
    activeTabKey: 1,
    activeTabKeyFilmInfo: 1,
}

export const commonSetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SEARCH_BAR: {
            return {
                ...state,
                isSearchBar: action.isSearchBar
            }
        }
        case SET_ACTIVE_TAB:{
            return {
                ...state,
                activeTabKey: action.activeTabKey
            }
        }

        case SET_ACTIVE_TAB_FILM_INFO: {
            return {
                ...state,
                activeTabKeyFilmInfo: action.activeTabKeyFilmInfo
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

