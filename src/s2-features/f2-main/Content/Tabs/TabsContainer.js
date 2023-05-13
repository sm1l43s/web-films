import React from "react";
import {ConfigProvider, Tabs} from "antd";
import classes from "../Content.module.css";
import NewReleasesContainer from "./NewReleasesContainer";
import FilmsContainer from "./FilmsContainer";
import SeriesContainer from "./SeriesContainer";

function TabsContainer() {
    const items = [
        {
            key: '1',
            label: `Цифровые релизы`,
            children: <NewReleasesContainer/>,
        },
        {
            key: '2',
            label: `Фильмы`,
            children: <FilmsContainer/>,
        },
        {
            key: '3',
            label: `Сериалы`,
            children: <SeriesContainer/>,
        },
    ];

    return (
        <>
            <h2 className={classes.title} style={{textTransform: "none"}}>Новинки</h2>
            <ConfigProvider theme={{
                components: {
                    Tabs: {
                        colorPrimary: "linear-gradient(90deg, #ff55a5 0%, #ff5860 100%)",
                        colorPrimaryActive: "#fff",
                        colorText: "rgba(255, 255, 255, 0.75)",
                        colorBorderSecondary: "#2b2b31",
                        padding: "0 5",
                        colorPrimaryHover: "#fff"
                    }
                }
            }}>
                <Tabs defaultActiveKey="1" items={items}
                      tabBarStyle={{texDecoration: "none", textTransform: "uppercase"}}/>;
            </ConfigProvider>
        </>
    );
}

export default TabsContainer;