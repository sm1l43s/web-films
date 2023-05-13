import {SET_IS_SEARCH_BAR} from "../constants/headerConstants";

const initialState = {
    isSearchBar: false
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SEARCH_BAR: {
            return {
                ...state,
                isSearchBar: action.isSearchBar
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

