import classes from "../FilmInfo.module.css";

function AboutContainer({title, value}) {
    return (
        <div className={classes.filmInfo}>
            <span className={classes.filmInfoCategory}>
                <b>{title}:</b>
                {value}
            </span>
        </div>
    );
}

export default AboutContainer;