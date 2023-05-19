import {Col, ConfigProvider, Popover} from "antd";
import SliderContainer from "./SliderContainer";
import {setYearFromCatalog, setYearToCatalog} from "../../../s1-main/m2-bll/actions/catalogFilmsAction";
import classes from "../Catalog.module.css";
import {useSelector} from "react-redux";
import {useState} from "react";

function YearContainer() {
    const catalog = useSelector(state => state.catalog);
    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    return (
        <>
            <Col>
                <ConfigProvider theme={{
                    components: {
                        Popover: {
                            colorBgElevated: "#2b2b31",
                            boxShadowSecondary: "0 5px 15px 0 rgba(0, 0, 0, 0.5)",
                            colorTextHeading: "#fff"
                        }
                    }
                }}>
                    <Popover
                        content={<SliderContainer defaultMin={1895}
                                                  defaultMax={new Date().getFullYear() + 5}
                                                  minValue={1895}
                                                  maxValue={new Date().getFullYear() + 5}
                                                  step={1}
                                                  setFrom={setYearFromCatalog}
                                                  setTo={setYearToCatalog}
                        />}
                        placement={"bottom"}
                        title={<span></span>}
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <button className={classes.ratingBlock}>
                            <b>Год производства:</b>
                            <div style={{marginTop: 13}}>
                                <span>{catalog.yearFrom}</span>
                                <span>-</span>
                                <span>{catalog.yearTo}</span>
                            </div>
                        </button>
                    </Popover>
                </ConfigProvider>
            </Col>
        </>
    )
}

export default YearContainer;