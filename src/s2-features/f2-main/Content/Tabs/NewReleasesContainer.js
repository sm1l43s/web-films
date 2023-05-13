import {connect} from "react-redux";
import {getReleasesFilms} from "../../../../s1-main/m2-bll/thunk/filmsThunk";
import {setCurrentPage} from "../../../../s1-main/m2-bll/actions/films/releasesAction";
import TabsChildren from "./TabsChildren";
import {useEffect} from "react";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Row} from "antd";

function NewReleasesContainer({getReleasesFilms, setCurrentPage, releases}) {
    useEffect(() => {
        getReleasesFilms(releases.year, releases.month, releases.currentPage);
    }, [getReleasesFilms, releases.currentPage, releases.month, releases.year]);
    return (
        <>
            <TabsChildren isFetching={releases.isFetching} films={releases.releases}/>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={10}
                                     currentPage={releases.currentPage}
                                     totalElements={releases.totalElements}
                                     setCurrentPage={setCurrentPage}/>
            </Row>
        </>
    );
}

let mstp = (state) => ({
    releases: {
        releases: state.releases.releasesFilms,
        year: state.releases.year,
        month: state.releases.month,
        currentPage: state.releases.currentPage,
        totalElements: state.releases.totalElements,
        isFetching: state.releases.isFetching,
    }
})

export default connect(mstp, {
    getReleasesFilms,
    setCurrentPage,
})(NewReleasesContainer);