import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {headerReducer} from "./reducer/header_reducer";
import {releasesReducer} from "./reducer/films/releasesReducer";
import {premieresReducer} from "./reducer/films/premiersReducer";
import {filmsReducer} from "./reducer/films/filmsReducer";

let reducer = combineReducers({
    header: headerReducer,
    releases: releasesReducer,
    premieres: premieresReducer,
    films: filmsReducer,
});

let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;
export default store;