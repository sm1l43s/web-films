import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {headerReducer} from "./reducer/header_reducer";
import {premieresReducer} from "./reducer/films/premiersReducer";
import releasesReducer from "./reducer/films/releasesReducer";
import filmsReducer from "./reducer/films/filmsReducer";
import {filmInfoReducer} from "./reducer/films/filmInfoReducer";

let reducer = combineReducers({
    header: headerReducer,
    releases: releasesReducer,
    premieres: premieresReducer,
    films: filmsReducer,
    filmInfo: filmInfoReducer
});

let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;
export default store;