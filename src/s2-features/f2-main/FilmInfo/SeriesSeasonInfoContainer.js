import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeriesSeasonInfo} from "../../../s1-main/m2-bll/thunk/filmsThunk";
import SeriesSeasonInfo from "./SeriesSeasonInfo";

function SeriesSeasonInfoContainer({id}) {
    const seasonInfo = useSelector(state => state.seriesSeasonInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSeriesSeasonInfo(id));
    }, [dispatch, id]);
    return (
        <div style={{padding: "10px 20px", backgroundColor: "#28282d",}}>
            <SeriesSeasonInfo seasonInfo={seasonInfo.seasonInfo}/>
        </div>
    );
}

export default SeriesSeasonInfoContainer;