import {useDispatch, useSelector} from "react-redux";
import TabsChildren from "./TabsChildren";
import {useEffect} from "react";
import {getFilms} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import {setCurrentPageFilms} from "../../../../../s1-main/m2-bll/actions/films/filmsAction";
import {Row} from "antd";
import PaginationContainer from "../../Pagination/PaginationContainer";

function FilmsTabContainer() {
    const films = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getFilms(films.typeFilms, films.ratingFromFilms, films.ratingToFilms,
            films.yearFromFilms, films.yearToFilms, films.currentPageFilms, films.orderFilms, films.keywordFilms));
    }, [dispatch, films.currentPageFilms, films.keywordFilms, films.orderFilms,
        films.ratingFromFilms, films.ratingToFilms, films.typeFilms, films.yearFromFilms, films.yearToFilms]);
    return (
        <>
            <TabsChildren isFetching={films.isFetchingFilms} films={films.films} />
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={films.currentPageFilms}
                                     totalElements={films.totalElementsFilms}
                                     setCurrentPage={setCurrentPageFilms}
                />
            </Row>
        </>
    );
}

export default FilmsTabContainer;