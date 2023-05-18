import {
    IS_FETCHING_SEARCH,
    SET_ACTIVE_TAB,
    SET_ACTIVE_TAB_FILM_INFO, SET_CURRENT_PAGE_BY_KEYWORD_SEARCH, SET_FILMS_BY_KEYWORD_SEARCH,
    SET_IS_SEARCH_BAR, SET_KEYWORD,
    SET_KEYWORD_SEARCH, SET_ONCHANGE_KEYWORD, SET_TOTAL_ELEMENTS_BY_KEYWORD_SEARCH
} from "../constants/commonSetConstants";

export const setIsSearchBar = (isSearchBar) => ({type:SET_IS_SEARCH_BAR, isSearchBar});
export const setActiveTab = (activeTabKey) => ({type:SET_ACTIVE_TAB, activeTabKey});
export const setActiveTabFilmInfo = (activeTabKeyFilmInfo) => ({type: SET_ACTIVE_TAB_FILM_INFO, activeTabKeyFilmInfo});
export const setFilmsByKeywordSearch = (films) => ({type:SET_FILMS_BY_KEYWORD_SEARCH, films});
export const setCurrentPageBySearchKeyword = (currentPageBySearchKeyword) => ({type:SET_CURRENT_PAGE_BY_KEYWORD_SEARCH, currentPageBySearchKeyword});
export const setTotalElementsBySearchKeyword = (totalElementsBySearchKeyword) => ({type: SET_TOTAL_ELEMENTS_BY_KEYWORD_SEARCH, totalElementsBySearchKeyword});
export const setOnChangeKeyword = (keyword) => ({type:SET_ONCHANGE_KEYWORD, keyword});
export const setKeyword = (keyword) => ({type:SET_KEYWORD, keyword});
export const setIsFetchingSearch = (isFetching) => ({type: IS_FETCHING_SEARCH, isFetching});