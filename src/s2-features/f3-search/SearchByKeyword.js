import PaginationContainer from "../f2-main/Pagination/PaginationContainer";
import {Row} from "antd";
import {setCurrentPageBySearchKeyword} from "../../s1-main/m2-bll/actions/commonSetActions";
import {NavLink} from "react-router-dom";
import CardItem from "../f2-main/Card/CardItem";

function SearchByKeyword({films, totalElements, currentPage}) {
    let items = films.map(item => {
        return <NavLink style={{marginTop: 10}} to={`/films/${item.kinopoiskId || item.filmId}`}>
            <CardItem {...item} />
        </NavLink>
    });
    return (
        <>
            <h2 style={{color: "#fff"}}>Найдено: {totalElements} картин</h2>
            <Row justify={"space-between"}>
                {items}
            </Row>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={currentPage}
                                     totalElements={totalElements}
                                     setCurrentPage={setCurrentPageBySearchKeyword}
                />
            </Row>
        </>
    );
}

export default SearchByKeyword;