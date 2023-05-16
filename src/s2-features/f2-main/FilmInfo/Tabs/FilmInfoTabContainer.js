import {setActiveTabFilmInfo} from "../../../../s1-main/m2-bll/actions/commonSetActions";
import TabsContainer from "../../Content/Tabs/TabsContainer";
import React from "react";
import {useDispatch} from "react-redux";
import ImagesFilmInfoTabContainer from "./Tab/ImagesFilmInfoTabContainer";
import VideosFilmInfoTabContainer from "./Tab/VideosFilmInfoTabContainer";
import ReviewsFilmInfoTabContainer from "./Tab/ReviewsFilmInfoTabContainer";
import SimilarsFilmInfoTabContainer from "./Tab/SimilarsFilmInfoTabContainer";

function FilmInfoTabContainer({id}) {
    let tabItems = [];
    if (id != null) {
        tabItems = [
            {
                key: '1',
                label: `Подобные картины`,
                children: <SimilarsFilmInfoTabContainer id={id}/>,
            },
            {
                key: '2',
                label: `Рецензии`,
                children: <ReviewsFilmInfoTabContainer id={id}/>,
            },
            {
                key: '3',
                label: `Видео`,
                children: <VideosFilmInfoTabContainer id={id}/>,
            },
            {
                key: '4',
                label: `Изображения`,
                children: <ImagesFilmInfoTabContainer id={id}/>,
            },

        ];
    }
    const dispatch = useDispatch();

    return (
        <>
            <TabsContainer items={tabItems}
                           dispatch={dispatch}
                           setActiveTab={setActiveTabFilmInfo}
                           title={""}
            />
        </>
    );
}

export default FilmInfoTabContainer;