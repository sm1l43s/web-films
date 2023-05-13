import classes from "./MainSection.module.css";
import Content from "./Content/Content";
import {useEffect} from "react";
import CarouselContainer from "./Carousel/CarouselContainer";
import SpinContainer from "./Content/Spin/SpinContainer";
import {getPremieresFilms} from "../../s1-main/m2-bll/thunk/filmsThunk";
import {useDispatch, useSelector} from "react-redux";

function MainSection() {
    const premieres = useSelector(state => state.premieres)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPremieresFilms(premieres.year, premieres.month));
    }, [getPremieresFilms, premieres.year, premieres.month]);

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <h1 className={classes.title}><b>Кинопремьеры</b> месяца</h1>
                    {
                        premieres.isFetching ? <SpinContainer countRow={1}/> :
                            <CarouselContainer films={premieres.premieresFilms}/>
                    }
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <Content/>
                </div>
            </div>
            <div className={classes.row}>3</div>
        </div>
    );
}

export default MainSection;