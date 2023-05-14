import {
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_RELEASES_FILMS,
    SET_TOTAL_ELEMENTS
} from "../../constants/films/releasesConstant";

export const setReleasedFilms = (releasesFilms) => ({type: SET_RELEASES_FILMS, releasesFilms});
export const setTotalElementsReleases = (totalElements) => ({type: SET_TOTAL_ELEMENTS, totalElements});
export const setCurrentPageReleases = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetchingReleases = (isFetching) => ({type: SET_IS_FETCHING, isFetching});