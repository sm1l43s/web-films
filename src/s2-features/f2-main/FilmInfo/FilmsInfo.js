import classes from "./FilmInfo.module.css";
import {Col, Image, Row} from "antd";
import {StarFilled} from "@ant-design/icons";
import {checkName, cutText} from "../../../s1-main/m2-bll/utils";

function FilmsInfo({film}) {
    let genres = "";
    if (film.genres != null) {
        genres = film.genres.map(item => {
            return <span>{item.genre}</span>;
        });
    }
    let countries = "";
    if (film.countries != null) {
        countries = film.countries.map(item => {
            return <span>{item.country}</span>;
        });
    }
    let rating = film.rating || film.ratingKinopoisk || film.ratingImdb || "0.0";
    rating = cutText(rating + "", 3);

    let filmName = checkName(film.nameRu, film.nameEn, film.nameOriginal);

    let age = film.ratingAgeLimits ?? "0";
    age = age.length > 3? age.slice(3): age;
    return (
        <>
        <div className={classes.details}>
            <Row>
                <Col><Image width={240} height={380} src={film.posterUrl}/></Col>
                <Col  className={classes.mainInfo}>
                    <Row><Col><h1 className={classes.detailsTitle}>{filmName}</h1></Col></Row>
                    <Row justify={"start"} style={{marginTop: 5}}>
                        <div className={classes.info}>
                            <span className={classes.rate}>
                                <StarFilled style={{ fontSize: 14, marginTop: 5,
                                color: "#ff55a5"}}/>
                                {rating}
                            </span>
                            <span className={classes.ageInfo}>{age + "+"}</span>
                        </div>
                    </Row>
                    <Row justify={"start"}>
                        <div style={{marginTop: 20}} className={classes.info}>
                            <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b>Страна производства: </b>
                                   {countries}
                               </span>
                            </div>
                            <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b>Год выпуска: </b>
                                   <b>{film.year}</b>
                               </span>
                            </div>
                            <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b>Жанр: </b>
                                   {genres}
                               </span>
                            </div>
                            <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b>Слоган: </b>
                                   <b>{film.slogan}</b>
                               </span>
                            </div>
                            <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b>Продолжительность: </b>
                                   <b>{film.filmLength + ' мин'}</b>
                               </span>
                            </div>
                        </div>
                    </Row>
                    <Row style={{width: 600, marginTop:20}}>
                        <div className={classes.filmInfo}>
                               <span className={classes.filmInfoCategory}>
                                   <b style={{textAlign: "justify"}}>{film.description}</b>
                               </span>
                        </div>
                    </Row>
                </Col>
                <Row justify={"center"} style={{width: "100%", marginTop: 20}}>
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
                </Row>
            </Row>
        </div>
    </>);
}
export default FilmsInfo;