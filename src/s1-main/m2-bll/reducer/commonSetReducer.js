import {SET_ACTIVE_TAB, SET_IS_SEARCH_BAR} from "../constants/commonSetConstants";

const initialState = {
    isSearchBar: false,
    activeTabKey: 1,
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

        default: {
            return {
                ...state
            }
        }
    }
}

