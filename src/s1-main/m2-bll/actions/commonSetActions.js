import {SET_ACTIVE_TAB, SET_ACTIVE_TAB_FILM_INFO, SET_IS_SEARCH_BAR} from "../constants/commonSetConstants";

export const setIsSearchBar = (isSearchBar) => ({type:SET_IS_SEARCH_BAR, isSearchBar});
export const setActiveTab = (activeTabKey) => ({type:SET_ACTIVE_TAB, activeTabKey});
export const setActiveTabFilmInfo = (activeTabKeyFilmInfo) => ({type: SET_ACTIVE_TAB_FILM_INFO, activeTabKeyFilmInfo});