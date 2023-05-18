import {
    IS_FETCHING_SEARCH,
    SET_ACTIVE_TAB,
    SET_ACTIVE_TAB_FILM_INFO, SET_CURRENT_PAGE_BY_KEYWORD_SEARCH, SET_FILMS_BY_KEYWORD_SEARCH,
    SET_IS_SEARCH_BAR, SET_KEYWORD,
    SET_ONCHANGE_KEYWORD, SET_TOTAL_ELEMENTS_BY_KEYWORD_SEARCH
} from "../constants/commonSetConstants";

const initialState = {
    isSearchBar: false,
    activeTabKey: 1,
    activeTabKeyFilmInfo: 1,
    onChangeKeyword: "",
    keyword: "",
    films: [],
    currentPage: 1,
    totalElements: 100,
    isFetching: false
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
        case SET_ONCHANGE_KEYWORD: {
            return {
                ...state,
                onChangeKeyword: action.keyword
            }
        }
        case SET_KEYWORD: {
            return {
                ...state,
                keyword: action.keyword
            }
        }
        case SET_CURRENT_PAGE_BY_KEYWORD_SEARCH: {
            return {
                ...state,
                currentPage: action.currentPageBySearchKeyword
            }
        }
        case SET_FILMS_BY_KEYWORD_SEARCH: {
            return {
                ...state,
                films: action.films
            }
        }
        case SET_TOTAL_ELEMENTS_BY_KEYWORD_SEARCH: {
            return {
                ...state,
                totalElements: action.totalElementsBySearchKeyword
            }
        }
        case IS_FETCHING_SEARCH: {
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

