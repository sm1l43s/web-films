import classes from "./FilmInfo.module.css";
import {Col, Image, Row} from "antd";
import {StarFilled} from "@ant-design/icons";
import {checkName, cutText, getCastItems} from "../../../s1-main/m2-bll/utils";
import AboutContainer from "./parts/AboutContainer";
import SeriesSeasonInfoContainer from "./parts/SeriesSeasonInfoContainer";
import React from "react";
import FilmInfoTabContainer from "./Tabs/FilmInfoTabContainer";

function FilmsInfo({film}) {
    let genres = getCastItems(film.genres, "genre");
    let countries = getCastItems(film.countries, "country");

    let rating = film.rating || film.ratingKinopoisk || film.ratingImdb || "0.0";
    rating = cutText(rating + "", 3);

    let filmName = checkName(film.nameRu, film.nameEn, film.nameOriginal);

    let age = film.ratingAgeLimits ?? film.ratingMpaa ?? "UNK";
    age = age.length > 3 ? age.slice(3) : age;

    return (
        <>
        <div className={classes.details}>
            <Row>
                <Col><Image width={240} height={380} src={film.posterUrl}/></Col>
                <Col  className={classes.mainInfo}>
                    <Row style={{width: 700}}><Col><h1 className={classes.detailsTitle}>{filmName}</h1></Col></Row>
                    <Row justify={"start"} style={{marginTop: 5}}>
                        <div className={classes.info}>
                            <span className={classes.rate}>
                                <StarFilled style={{ fontSize: 14, marginTop: 5, color: "#ff55a5"}}/>
                                {rating}
                            </span>
                            <span className={classes.ageInfo}>{age + "+"}</span>
                        </div>
                    </Row>
                    <Row justify={"start"}>
                        <div style={{marginTop: 20}} className={classes.info}>
                            <AboutContainer title={"Страна производства"} value={countries} />
                            <AboutContainer title={"Год выпуска"} value={film.year} />
                            <AboutContainer title={"Жанр"} value={genres} />
                            <AboutContainer title={"Слоган"} value={film.slogan} />
                            <AboutContainer title={"Продолжительность"} value={film.filmLength + ' мин'} />
                        </div>
                    </Row>
                    <Row style={{width: 700, marginTop:20}}>
                        <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b style={{textAlign: "justify"}}>{film.description}</b>
                               </span>
                        </div>
                    </Row>
                </Col>
                <Row justify={film.serial ? "space-between" : "center"} style={{width: "100%", marginTop: 20}}>
                    <Col>
                        <div className={classes.iframe_block}>
                            <iframe className={classes.iframe_class}
                                    scrolling={"no"}
                                    allowFullScreen
                                    allow={"fullscreen"}
                                    src={"https://1ww.frkp.live/film/"+film.kinopoiskId+"/"}>
                            </iframe>
                        </div>
                    </Col>
                        {film.serial ? <Col><SeriesSeasonInfoContainer id={film.kinopoiskId} /></Col> : <></>}
                </Row>
            </Row>
            <Row justify={"start"} style={{marginTop: 50}}>
                <FilmInfoTabContainer id={film.kinopoiskId} />
            </Row>
        </div>
    </>);
}
export default FilmsInfo;