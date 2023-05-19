import RatingContainer from "./parts/RatingContainer";
import {Col, Row} from "antd";
import YearContainer from "./parts/YearContainer";
import TypeFilmContainer from "./parts/TypeFilmContainer";
import OrderFilmsContainer from "./parts/OrderFilmsContainer";
import KeywordContainer from "./parts/KeywordContainer";
import classes from "./Catalog.module.css";
import CatalogFilms from "./CatalogFilms";
import {useDispatch, useSelector} from "react-redux";
import {getFilmsToCatalog} from "../../s1-main/m2-bll/thunk/filmsThunk";
import {setCurrentPageCatalog} from "../../s1-main/m2-bll/actions/catalogFilmsAction";
import SpinContainer from "../f2-main/Content/Spin/SpinContainer";
import {useEffect} from "react";

function CatalogFilmsContainer() {
    const catalog = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    useEffect(()=>{
        onClickFilterButton();
    }, [catalog.currentPage]);
    const onClickFilterButton = () => {
        dispatch(getFilmsToCatalog(catalog.type, catalog.ratingFrom, catalog.ratingTo,
            catalog.yearFrom, catalog.ratingTo, catalog.currentPage, catalog.order, catalog.keyword));
    }

    return (
        <div style={{marginTop: 70}}>
            <h1 style={{color: "#fff"}}>Каталог</h1>
            <Row style={{
                width: "100%",
                marginTop: 10,
                backgroundColor: "#28282d",
                padding: "20px 0px"
            }} justify={"space-between"}>
                <Col>
                    <Row style={{minWidth: "800px"}} justify={"space-between"}>
                        <TypeFilmContainer/>
                        <OrderFilmsContainer/>
                        <YearContainer/>
                        <RatingContainer/>
                        <KeywordContainer/>
                    </Row>
                </Col>
                <Col>
                    <div className={classes.searchContent}>
                        <button onClick={onClickFilterButton} type="button">Применить фильтр</button>
                    </div>
                </Col>
            </Row>
            <Row style={{width: "100%"}} justify={"center"}>
                {
                    catalog.isFetching ? <SpinContainer countRow={1}/> :
                        <CatalogFilms films={catalog.films}
                                      currentPage={catalog.currentPage}
                                      totalElements={catalog.totalElements}
                                      setCurrentPage={setCurrentPageCatalog}
                        />
                }
            </Row>
        </div>
    )
}

export default CatalogFilmsContainer;