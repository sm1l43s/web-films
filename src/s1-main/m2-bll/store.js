import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {commonSetReducer} from "./reducer/commonSetReducer";
import {premieresReducer} from "./reducer/films/premiersReducer";
import releasesReducer from "./reducer/films/releasesReducer";
import filmsReducer from "./reducer/films/filmsReducer";
import {filmInfoReducer} from "./reducer/films/filmInfoReducer";
import seriesReducer from "./reducer/films/seriesReducer";
import seriesSeasonInfoReducer from "./reducer/films/seriesSeasonInfoReducer";

let reducer = combineReducers({
    settings: commonSetReducer,
    releases: releasesReducer,
    premieres: premieresReducer,
    films: filmsReducer,
    series: seriesReducer,
    seriesSeasonInfo: seriesSeasonInfoReducer,
    filmInfo: filmInfoReducer,
});

let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;
export default store;