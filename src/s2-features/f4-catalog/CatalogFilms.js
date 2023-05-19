import {NavLink} from "react-router-dom";
import CardItem from "../f2-main/Card/CardItem";
import {Row} from "antd";
import PaginationContainer from "../f2-main/Pagination/PaginationContainer";

function CatalogFilms({films, currentPage, totalElements, setCurrentPage}) {
        let items = films.map(item => {
        return <NavLink style={{marginTop: 10}} to={`/films/${item.kinopoiskId || item.filmId}`}>
            <CardItem {...item} />
        </NavLink>
    });
    return (
        <>
            <Row justify={"space-between"}>
                {items}
            </Row>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={currentPage}
                                     totalElements={totalElements}
                                     setCurrentPage={setCurrentPage}
                />
            </Row>
        </>
    )
}
export default CatalogFilms;