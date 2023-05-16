import React from "react";
import {ConfigProvider, Tabs} from "antd";
import classes from "../Content.module.css";

function TabsContainer({items, activeTabKey, dispatch, setActiveTab, title}) {

    const onChangeTabKey = (key) =>{
        dispatch(setActiveTab(key));
    }

    return (
        <>
            <h2 className={classes.title} style={{textTransform: "none"}}>{title}</h2>
            <ConfigProvider theme={{
                components: {
                    Tabs: {
                        colorPrimary: "linear-gradient(90deg, #ff55a5 0%, #ff5860 100%)",
                        colorPrimaryActive: "#fff",
                        colorText: "rgba(255, 255, 255, 0.75)",
                        colorBorderSecondary: "#2b2b31",
                        padding: "0 5px",
                        colorPrimaryHover: "#fff"
                    }
                }
            }}>
                <Tabs defaultActiveKey={activeTabKey} onChange={onChangeTabKey} items={items}
                      tabBarStyle={{texDecoration: "none", textTransform: "uppercase"}}/>
            </ConfigProvider>
        </>
    );
}

export default TabsContainer;