import {useParams} from "react-router-dom";
import FilmInfoContainer from "./FilmInfoContainer";

function TestContainer() {
    const {filmId} = useParams();
    return (
        <FilmInfoContainer filmId={filmId}/>
    );
}
export default TestContainer;