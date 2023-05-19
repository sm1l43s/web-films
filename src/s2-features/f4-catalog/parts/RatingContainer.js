import {Col, ConfigProvider, Popover} from "antd";
import SliderContainer from "./SliderContainer";
import {setRatingFromCatalog, setRatingToCatalog} from "../../../s1-main/m2-bll/actions/catalogFilmsAction";
import {useSelector} from "react-redux";
import {useState} from "react";
import classes from "../Catalog.module.css";

function RatingContainer() {
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
                        content={<SliderContainer defaultMin={0}
                                                  defaultMax={10}
                                                  minValue={0.0}
                                                  maxValue={10.0}
                                                  step={0.1}
                                                  setFrom={setRatingFromCatalog}
                                                  setTo={setRatingToCatalog}
                        />}
                        placement={"bottom"}
                        title={<span></span>}
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <button className={classes.ratingBlock}>
                            <b>Рейтинг:</b>
                            <div style={{marginTop: 13}}>
                                <span>{catalog.ratingFrom}</span>
                                <span>-</span>
                                <span>{catalog.ratingTo}</span>
                            </div>
                        </button>
                    </Popover>
                </ConfigProvider>
            </Col>
        </>
    )
}

export default RatingContainer;