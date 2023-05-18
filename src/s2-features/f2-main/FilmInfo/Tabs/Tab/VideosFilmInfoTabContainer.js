import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "antd";
import React, {useEffect} from "react";
import ReactPlayer from "react-player";
import SpinContainer from "../../../Content/Spin/SpinContainer";
import PaginationContainer from "../../../Pagination/PaginationContainer";
import {setCurrentPageVideos} from "../../../../../s1-main/m2-bll/actions/films/filmInfoAction";
import {getVideosFilmInfo} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";

function VideosFilmInfoTabContainer({id}) {
    const videos = useSelector(state => state.filmInfo.videos);
    const currentPageVideos = useSelector(state => state.filmInfo.currentPageVideos);
    const totalElementsVideos = useSelector(state => state.filmInfo.totalElementsVideos);
    const isFetchingVideos = useSelector(state => state.filmInfo.isFetchingVideos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideosFilmInfo(id, currentPageVideos));
    }, [currentPageVideos, dispatch, id]);
    let videosItems = videos.map(video => {
        return <Col style={{margin: 10}}>
            <div style={{textAlign: "center"}}>
                <h3>{video.name}</h3>
                <ReactPlayer width={300} controls={true} url={video.url}/>
                <a style={{textTransform: "none",
                    textDecoration: "none", color: "#FFFFFF7F"}} href={video.url}>ссылка на ресурс</a>
            </div>
        </Col>
    });
    return (
        <>
            <Row justify={"space-between"} align={"stretch"} style={{width: "100%"}}>
                {
                    isFetchingVideos ? <SpinContainer countRow={2}/> : videosItems
                }
            </Row>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={currentPageVideos}
                                     totalElements={totalElementsVideos}
                                     setCurrentPage={setCurrentPageVideos}
                />
            </Row>
        </>
    );
}

export default VideosFilmInfoTabContainer;