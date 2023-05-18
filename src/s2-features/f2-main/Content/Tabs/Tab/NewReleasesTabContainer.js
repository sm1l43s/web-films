import {useDispatch, useSelector} from "react-redux";
import {getReleasesFilms} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import TabsChildren from "./TabsChildren";
import {useEffect} from "react";
import PaginationContainer from "../../../Pagination/PaginationContainer";
import {Row} from "antd";
import {setCurrentPageReleases} from "../../../../../s1-main/m2-bll/actions/films/releasesAction";

function NewReleasesTabContainer() {
    const releases = useSelector( state => state.releases);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReleasesFilms(releases.year, releases.month, releases.currentPage));
    }, [dispatch, releases.currentPage, releases.month, releases.year]);
    return (
        <>
            <TabsChildren isFetching={releases.isFetching} films={releases.releasesFilms}/>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={10}
                                     currentPage={releases.currentPage}
                                     totalElements={releases.totalElements}
                                     setCurrentPage={setCurrentPageReleases}
                />
            </Row>
        </>
    );
}


export default NewReleasesTabContainer;