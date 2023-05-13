import classes from "./MainSection.module.css";
import Content from "./Content/Content";
import {connect} from "react-redux";
import {getPremieresFilms} from "../../s1-main/m2-bll/thunk/filmsThunk";
import {useEffect} from "react";
import CarouselContainer from "./Carousel/CarouselContainer";
import SpinContainer from "./Content/Spin/SpinContainer";

function MainSection({getPremieresFilms, year, month, premieresFilms, isFetching, ...props}) {

    useEffect(() => {
        getPremieresFilms(year, month);
    }, [getPremieresFilms, year, month]);

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <h1 className={classes.title}><b>Кинопремьеры</b> месяца</h1>
                    {
                        isFetching ? <SpinContainer countRow={1} /> : <CarouselContainer films={premieresFilms}/>
                    }
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <Content />
                </div>
            </div>
            <div className={classes.row}>3</div>
        </div>
    );
}

let mstp = (state) => ({
    premieresFilms: state.premieres.premieresFilms,
    year: state.premieres.year,
    month: state.premieres.month,
    isFetching: state.premieres.isFetching
})

export default connect(mstp, {
    getPremieresFilms
})(MainSection);