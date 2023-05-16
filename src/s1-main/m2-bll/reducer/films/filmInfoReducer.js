import {
    SET_CURRENT_PAGE_IMAGES,
    SET_CURRENT_PAGE_REVIEWS, SET_CURRENT_PAGE_SIMILARS,
    SET_CURRENT_PAGE_VIDEOS,
    SET_FILM_INFO,
    SET_IMAGES_FILM_INFO,
    SET_IS_FETCHING, SET_IS_FETCHING_IMAGES, SET_IS_FETCHING_REVIEWS, SET_IS_FETCHING_SIMILARS, SET_IS_FETCHING_VIDEOS,
    SET_REVIEWS_FILM_INFO, SET_SIMILARS,
    SET_TOTAL_ELEMENTS_IMAGES,
    SET_TOTAL_ELEMENTS_REVIEWS, SET_TOTAL_ELEMENTS_SIMILARS,
    SET_TOTAL_ELEMENTS_VIDEOS,
    SET_VIDEOS_FILM_INFO
} from "../../constants/films/FilmInfoConstants";

let initialState = {
    film: [],
    isFetching: false,
    images: [],
    isFetchingImages: false,
    currentPageImages: 1,
    totalElementsImages: 20,
    videos: [],
    isFetchingVideos: false,
    currentPageVideos: 1,
    totalElementsVideos: 20,
    reviews: [],
    isFetchingReviews: false,
    currentPageReviews: 1,
    totalElementsReviews: 20,
    similars: [],
    isFetchingSimilars: false,
    currentPageSimilars: 1,
    totalElementsSimilars: 20,
}

export const filmInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM_INFO: {
            return {
                ...state,
                film: action.filmInfo
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_IMAGES_FILM_INFO: {
            return {
                ...state,
                images: action.images
            }
        }
        case SET_VIDEOS_FILM_INFO: {
            return {
                ...state,
                videos: action.videos
            }
        }
        case SET_REVIEWS_FILM_INFO: {
            return {
                ...state,
                reviews: action.reviews
            }
        }
        case SET_CURRENT_PAGE_IMAGES: {
            return {
                ...state,
                currentPageImages: action.currentPageImages
            }
        }
        case SET_TOTAL_ELEMENTS_IMAGES: {
            return {
                ...state,
                totalElementsImages: action.totalElementsImages
            }
        }
        case SET_CURRENT_PAGE_VIDEOS: {
            return {
                ...state,
                currentPageVideos: action.currentPageVideos
            }
        }
        case SET_TOTAL_ELEMENTS_VIDEOS: {
            return {
                ...state,
                totalElementsVideos: action.totalElementsVideos
            }
        }
        case SET_CURRENT_PAGE_REVIEWS: {
            return {
                ...state,
                currentPageReviews: action.currentPageReviews
            }
        }
        case SET_TOTAL_ELEMENTS_REVIEWS: {
            return {
                ...state,
                totalElementsReviews: action.totalElementsReviews
            }
        }
        case SET_IS_FETCHING_IMAGES: {
            return {
                ...state,
                isFetchingImages: action.isFetchingImages
            }
        }
        case SET_IS_FETCHING_VIDEOS: {
            return {
                ...state,
                isFetchingVideos: action.isFetchingVideos
            }
        }
        case SET_IS_FETCHING_REVIEWS: {
            return {
                ...state,
                isFetchingReviews: action.isFetchingReviews
            }
        }
        case SET_SIMILARS: {
            return {
                ...state,
                similars: action.similars
            }
        }
        case SET_IS_FETCHING_SIMILARS: {
            return {
                ...state,
                isFetchingSimilars: action.isFetchingSimilars
            }
        }
        case SET_CURRENT_PAGE_SIMILARS: {
            return {
                ...state,
                currentPageSimilars: action.currentPageSimilars
            }
        }
        case SET_TOTAL_ELEMENTS_SIMILARS: {
            return {
                ...state,
                totalElementsSimilars: action.totalElementsSimilars
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}