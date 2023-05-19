import {ConfigProvider, Slider} from "antd";
import {useDispatch} from "react-redux";

function SliderContainer({defaultMin, defaultMax, minValue, maxValue, step, setFrom, setTo}) {
    const dispatch = useDispatch();
    const onChangeSlider = (value) => {
        dispatch(setFrom(value[0]));
        dispatch(setTo(value[1]));
    }
    return (
        <ConfigProvider theme={{
            components: {
                Slider: {
                    colorPrimary: "#ff5860",
                    colorPrimaryBorder: "#ff55a5",
                    colorPrimaryBorderHover:"#ff5860",
                }
            }
        }}>
            <Slider range defaultValue={[defaultMin, defaultMax]} onChange={onChangeSlider} min={minValue} max={maxValue} step={step} />
        </ConfigProvider>
    )
}
export default SliderContainer;