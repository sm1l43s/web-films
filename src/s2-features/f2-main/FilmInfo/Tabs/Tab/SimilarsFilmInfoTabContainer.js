import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSimilarsFilmById} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import {Col, Row} from "antd";
import {NavLink} from "react-router-dom";
import CardItem from "../../../Card/CardItem";
import SpinContainer from "../../../Content/Spin/SpinContainer";

function SimilarsFilmInfoTabContainer({id}) {
    const similars = useSelector(state => state.filmInfo.similars);
    const isFetchingSimilars = useSelector(state => state.filmInfo.isFetchingSimilars);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSimilarsFilmById(id));
    }, [dispatch, id])

    let cardItems = similars.map(item => {
        return <Col style={{marginTop: 10}}>
            <NavLink to={`/films/${item.kinopoiskId || item.filmId}`}>
                <CardItem {...item} />
            </NavLink>
        </Col>

    });
    return (
        <>
            <Row justify={"space-between"}>
                {isFetchingSimilars ? <SpinContainer countRow={2}/> : cardItems}
            </Row>
        </>
    );
}

export default SimilarsFilmInfoTabContainer;