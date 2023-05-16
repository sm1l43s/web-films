import {
    SET_CURRENT_PAGE_IMAGES,
    SET_CURRENT_PAGE_REVIEWS, SET_CURRENT_PAGE_SIMILARS,
    SET_CURRENT_PAGE_VIDEOS,
    SET_FILM_INFO,
    SET_IMAGES_FILM_INFO,
    SET_IS_FETCHING,
    SET_IS_FETCHING_IMAGES,
    SET_IS_FETCHING_REVIEWS, SET_IS_FETCHING_SIMILARS,
    SET_IS_FETCHING_VIDEOS,
    SET_REVIEWS_FILM_INFO, SET_SIMILARS,
    SET_TOTAL_ELEMENTS_IMAGES, SET_TOTAL_ELEMENTS_SIMILARS,
    SET_VIDEOS_FILM_INFO
} from "../../constants/films/FilmInfoConstants";

export const setFilmInfo = (filmInfo) => ({type:SET_FILM_INFO, filmInfo});
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching});
export const setFilmInfoImages = (images) => ({type: SET_IMAGES_FILM_INFO, images});
export const setFilmInfoVideos = (videos) => ({type: SET_VIDEOS_FILM_INFO, videos});
export const setFilmInfoReviews = (reviews) => ({type: SET_REVIEWS_FILM_INFO, reviews});
export const setCurrentPageImages = (currentPageImages) => ({type: SET_CURRENT_PAGE_IMAGES, currentPageImages});
export const setCurrentPageVideos = (currentPageVideos) => ({type: SET_CURRENT_PAGE_VIDEOS, currentPageVideos});
export const setCurrentPageReviews = (currentPageReviews) => ({type: SET_CURRENT_PAGE_REVIEWS, currentPageReviews});
export const setTotalElementsImages = (totalElementsImages) => ({type: SET_TOTAL_ELEMENTS_IMAGES, totalElementsImages});
export const setTotalElementsVideos = (totalElementsVideos) => ({type: SET_TOTAL_ELEMENTS_IMAGES, totalElementsVideos});
export const setTotalElementsReviews = (totalElementsReviews) => ({type: SET_TOTAL_ELEMENTS_IMAGES, totalElementsReviews});
export const setIsFetchingImages = (isFetchingImages) => ({type: SET_IS_FETCHING_IMAGES, isFetchingImages});
export const setIsFetchingVideos = (isFetchingVideos) => ({type: SET_IS_FETCHING_VIDEOS, isFetchingVideos});
export const setIsFetchingReviews = (isFetchingReviews) => ({type: SET_IS_FETCHING_REVIEWS, isFetchingReviews});
export const setSimilars = (similars) => ({type: SET_SIMILARS, similars});
export const setIsFetchingSimilars = (isFetchingSimilars) => ({type: SET_IS_FETCHING_SIMILARS, isFetchingSimilars});
export const setCurrentPageSimilars = (currentPageSimilars) => ({type: SET_CURRENT_PAGE_SIMILARS, currentPageSimilars});
export const setTotalElementsSimilars = (totalElementsSimilars) => ({type: SET_TOTAL_ELEMENTS_SIMILARS, totalElementsSimilars});