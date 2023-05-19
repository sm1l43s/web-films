import {useSelector} from "react-redux";
import {Col, Select} from "antd";
import classes from "../Catalog.module.css";
import SelectContainerFilmsType from "./SelectContainerFilmsType";
import {setTypeCatalog} from "../../../s1-main/m2-bll/actions/catalogFilmsAction";

function TypeFilmContainer() {
    return(
        <>
            <Col>
                <div className={classes.ratingBlock}>
                    <b>Тип картины:</b>
                    <SelectContainerFilmsType setTypeFilms={setTypeCatalog}/>
                </div>
            </Col>
        </>
    )
}

export default TypeFilmContainer;