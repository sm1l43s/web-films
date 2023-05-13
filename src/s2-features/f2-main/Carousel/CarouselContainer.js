import classes from "../MainSection.module.css";
import {Carousel, Row} from "antd";
import CardItem from "../Card/CardItem";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {getSubArraysFromArray} from "../../../s1-main/m2-bll/utils";
import {NavLink} from "react-router-dom";

const SampleNextArrow = props => {
    const {onClick} = props
    return (
        <div className={classes.next}>
            <ArrowRightOutlined className={classes.homeNav} onClick={onClick}/>
        </div>
    )
}

const SamplePrevArrow = props => {
    const {onClick} = props
    return (
        <div className={classes.prev}>
            <ArrowLeftOutlined className={classes.homeNav} onClick={onClick}/>
        </div>
    )
}

const settings = {
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
}

function CarouselContainer(props) {

    let cardItems = props.films.map(item => {
        return <NavLink to={`/films/${item.kinopoiskId || item.filmId}`}>
            <CardItem {...item} />
        </NavLink>
    });

    let subarray = getSubArraysFromArray(cardItems, 5);

    let items = subarray.map(item => {
        return <div className={classes.carouselContainer}>
            <Row justify="space-between">
                {item}
            </Row>
        </div>
    })

    return (
        <>
            <Carousel arrows {...settings} dots={false} className={classes.carousel}>
                {items}
            </Carousel>
        </>
    );
}

export default CarouselContainer;