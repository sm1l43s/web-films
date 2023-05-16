import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilmInfoById} from "../../../s1-main/m2-bll/thunk/filmsThunk";
import FilmsInfo from "./FilmsInfo";
import SpinContainer from "../Content/Spin/SpinContainer";

function FilmInfoContainer() {
    const {filmId} = useParams();
    const filmInfo = useSelector(state => state.filmInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmInfoById(filmId));
    }, [filmId]);
    return (
        filmInfo.isFetching ? <SpinContainer countRow={2} /> : <FilmsInfo film={filmInfo.film}/>
    );
}

export default FilmInfoContainer;