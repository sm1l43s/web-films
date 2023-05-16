import TabsContainer from "./Tabs/TabsContainer";
import NewReleasesTabContainer from "./Tabs/Tab/NewReleasesTabContainer";
import FilmsTabContainer from "./Tabs/Tab/FilmsTabContainer";
import SeriesTabContainer from "./Tabs/Tab/SeriesTabContainer";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab} from "../../../s1-main/m2-bll/actions/commonSetActions";

function Content() {

    const tabItems = [
        {
            key: '1',
            label: `Цифровые релизы`,
            children: <NewReleasesTabContainer/>,
        },
        {
            key: '2',
            label: `Фильмы`,
            children: <FilmsTabContainer/>,
        },
        {
            key: '3',
            label: `Сериалы`,
            children: <SeriesTabContainer/>,
        },
    ];
    const activeTabKey = useSelector(state => state.settings.activeTabKey);
    const dispatch = useDispatch();


    return (
        <>
            <TabsContainer items={tabItems}
                           activeTabKey={activeTabKey}
                           dispatch={dispatch}
                           setActiveTab={setActiveTab}
                           title={"Новинки"}
            />
        </>
    );
}
export default Content;