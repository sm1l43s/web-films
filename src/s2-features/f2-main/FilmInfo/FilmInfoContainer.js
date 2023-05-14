import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilmInfoById} from "../../../s1-main/m2-bll/thunk/filmsThunk";
import FilmsInfo from "./FilmsInfo";

function FilmInfoContainer() {
    const params = useParams();
    const filmInfo = useSelector(state => state.filmInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmInfoById(params.filmId));
    }, [params.filmId]);
    return (
        <FilmsInfo film={filmInfo.film}/>
    );
}

export default FilmInfoContainer;