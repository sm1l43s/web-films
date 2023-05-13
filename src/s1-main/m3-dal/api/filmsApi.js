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
}