import {connect} from "react-redux";
import TabsChildren from "./TabsChildren";
import {useEffect} from "react";
import {getFilms} from "../../../../s1-main/m2-bll/thunk/filmsThunk";
import {setCurrentPageFilms} from "../../../../s1-main/m2-bll/actions/films/filmsAction";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Row} from "antd";

function SeriesContainer({getFilms, setCurrentPageFilms, films}) {
    useEffect(()=>{
        getFilms(films.type, films.ratingFrom, films.ratingTo,
            films.yearFrom, films.yearTo, films.currentPage, films.orderFilms, films.keyword);
    }, [films.currentPage, films.keyword, films.orderFilms, films.ratingFrom, films.ratingTo, films.type, films.yearFrom, films.yearTo, getFilms]);
    return (
        <>
            <TabsChildren isFetching={films.isFetching} films={films.films}
            />
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={films.currentPage}
                                     totalElements={films.totalElements}
                                     setCurrentPage={setCurrentPageFilms} />
            </Row>
        </>
    );
}

let mstp = (state) => ({
    films: {
        films: state.films.films,
        currentPage: state.films.currentPage,
        totalElements: state.films.totalElements,
        isFetching: state.films.isFetching,
        type: "TV_SERIES",
        ratingFrom: state.films.ratingFrom,
        ratingTo: state.films.ratingTo,
        yearFrom: state.films.yearFrom,
        yearTo: state.films.yearTo,
        keyword: state.films.keyword,
        orderFilms: state.films.orderFilms
    }
});

export default connect(mstp, {
    getFilms,
    setCurrentPageFilms,
})(SeriesContainer);