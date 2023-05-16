import {instance} from "../instance/instance";

export const FilmsApi = {
    getReleasesFilms(year, month, page) {
        return instance.get(`/films/releases?year=${year}&month=${month}&page=${page}`);
    },
    getPremieres(year, month) {
        return instance.get(`/films/premieres?year=${year}&month=${month}`)
    },
    getFilms(type, ratingFrom, ratingTo, yearFrom, yearTo, page, order, keyword) {
        return instance.get("films?" +
            "type=" + type +
            "&ratingFrom=" + ratingFrom +
            "&ratingTo=" + ratingTo +
            "&yearFrom=" + yearFrom +
            "&yearTo=" + yearTo +
            "&page=" + page +
            "&order=" + order +
            "&keyword=" + keyword
        );
    },
    getFilmInfoById(id) {
        return instance.get(`/films/${id}`);
    },
    getSeriesSeasonInfo(id) {
        return instance.get(`/films/${id}/seasons`);
    },
    getImagesFilmInfo(id, page) {
        return instance.get(`/films/${id}/images?page=${page}`);
    },
    getVideosFilmInfo(id, page) {
        return instance.get(`/films/${id}/videos?page=${page}`);
    },
    getReviewsFilmInfo(id, page) {
        return instance.get(`/films/${id}/reviews?page=${page}`);
    },
    getSimilarsFilmById(id) {
        return instance.get(`/films/${id}/similars`);
    }
}