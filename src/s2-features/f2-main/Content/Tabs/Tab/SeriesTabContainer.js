import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeries} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import TabsChildren from "./TabsChildren";
import {Row} from "antd";
import PaginationContainer from "../../../Pagination/PaginationContainer";
import {setCurrentPageSeries} from "../../../../../s1-main/m2-bll/actions/films/seriesAction";

function SeriesTabContainer() {
    const series = useSelector(state => state.series);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSeries(
            series.typeSeries, series.ratingFromSeries, series.ratingToSeries, series.yearFromSeries, series.yearToSeries,
            series.currentPageSeries, series.orderSeries, series.keywordSeries
        ));
    }, [dispatch, series.currentPageSeries, series.keywordSeries, series.orderSeries,
        series.ratingFromSeries, series.ratingToSeries, series.typeSeries, series.yearFromSeries, series.yearToSeries]);
    return (
        <>
            <TabsChildren isFetching={series.isFetchingSeries} films={series.series} />
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={series.currentPageSeries}
                                     totalElements={series.totalElementsSeries}
                                     setCurrentPage={setCurrentPageSeries}
                />
            </Row>
        </>
    );
}

export default SeriesTabContainer;