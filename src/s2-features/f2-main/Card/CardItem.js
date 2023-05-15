import classes from "./CardItem.module.css";
import {PlayCircleFilled, StarFilled} from "@ant-design/icons";
import {Col} from "antd";
import {checkName, cutText, getCastItems} from "../../../s1-main/m2-bll/utils";

function CardItem(props) {
    let genres = getCastItems(props.genres, "genre");
    let rating = props.rating || props.ratingKinopoisk || props.ratingImdb || "0.0";
    rating = cutText(rating + "", 3);

    let filmName = checkName(props.nameRu, props.nameEn, props.nameOriginal);

    return (
        <Col xs={24} sm={16} md={8} lg={6} xl={4} span={4}>
            <div className={classes.card}>
                <div className={classes.cardCover}>
                    <img src={props.posterUrlPreview} alt=""/>
                    <a className={classes.cardPlay}>
                        <PlayCircleFilled/>
                    </a>
                </div>
                <div className={classes.cardContent}>
                    <h3 className={classes.cardTitle}><a>{filmName}</a></h3>
                    <span className={classes.cardCategory}>{genres}</span>
                    <span className={classes.cardRate}><StarFilled style={{color: "#ff55a5"}}/>{rating}</span>
                </div>
            </div>
        </Col>
    );
}

export default CardItem;