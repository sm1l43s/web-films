import classes from "../Catalog.module.css";
import {setOrderCatalog} from "../../../s1-main/m2-bll/actions/catalogFilmsAction";
import {Col} from "antd";
import {useSelector} from "react-redux";
import SelectContainerFilmsOrder from "./SelectContainerFilmsOrder";

function OrderFilmsContainer() {
    const catalog = useSelector(state => state.catalog);

    return (
        <>
            <Col>
                <div className={classes.ratingBlock}>
                    <b>Сортировка:</b>
                    <SelectContainerFilmsOrder setOrderFilms={setOrderCatalog}/>
                </div>
            </Col>
        </>
    )
}

export default OrderFilmsContainer;