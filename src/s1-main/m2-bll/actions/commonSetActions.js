import {SET_ACTIVE_TAB, SET_IS_SEARCH_BAR} from "../constants/commonSetConstants";

export const setIsSearchBar = (isSearchBar) => ({type:SET_IS_SEARCH_BAR, isSearchBar});
export const setActiveTab = (activeTabKey) => ({type:SET_ACTIVE_TAB, activeTabKey});