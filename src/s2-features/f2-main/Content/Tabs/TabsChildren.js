import {Row} from "antd";
import CardItem from "../../Card/CardItem";
import SpinContainer from "../Spin/SpinContainer";
import {getSubArraysFromArray} from "../../../../s1-main/m2-bll/utils";
import {NavLink} from "react-router-dom";

function TabsChildren(props) {

    let cardItems = props.films.map(item => {
        return <NavLink to={`/films/${item.kinopoiskId || item.filmId}`}>
            <CardItem {...item} />
        </NavLink>
    });

    let subarray = getSubArraysFromArray(cardItems, 5);

    let items = subarray.map(item => {
        return <Row justify={"space-between"} style={{width: "100%", margin: "10px 0"}}>{item}</Row>
    })

    return (
        <>
            <Row justify={"start"}>
                {props.isFetching ? <SpinContainer countRow={2} /> : items}
            </Row>
        </>
    );
}

export default TabsChildren;