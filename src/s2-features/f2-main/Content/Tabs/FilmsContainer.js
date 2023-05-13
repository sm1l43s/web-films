import {useDispatch, useSelector} from "react-redux";
import TabsChildren from "./TabsChildren";
import {useEffect} from "react";
import {getFilms} from "../../../../s1-main/m2-bll/thunk/filmsThunk";
import {setCurrentPageFilms} from "../../../../s1-main/m2-bll/actions/films/filmsAction";
import {Row} from "antd";
import PaginationContainer from "../Pagination/PaginationContainer";

function FilmsContainer() {
    const films = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getFilms("FILM", films.ratingFrom, films.ratingTo,
            films.yearFrom, films.yearTo, films.currentPage, films.orderFilms, films.keyword));
    }, [films.currentPage, films.keyword, films.orderFilms, films.ratingFrom,
        films.ratingTo, films.type, films.yearFrom, films.yearTo, getFilms]);
    return (
        <>
            <TabsChildren isFetching={films.isFetching} films={films.films} />
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={films.currentPage}
                                     totalElements={films.totalElements}
                                     setCurrentPage={setCurrentPageFilms}
                />
            </Row>
        </>
    );
}

export default FilmsContainer;