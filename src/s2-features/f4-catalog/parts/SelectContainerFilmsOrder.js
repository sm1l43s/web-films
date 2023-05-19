import {ConfigProvider, Select} from "antd";
import {useDispatch} from "react-redux";

function SelectContainerFilmsType({setOrderFilms}) {
    const dispatch = useDispatch();
    const handleChange = (value) => {
        dispatch(setOrderFilms(value));
    };

    return (
        <>
        <ConfigProvider theme={{
            components: {
                Select: {
                    colorBgContainer: "#2b2b31",
                    colorBorder: "#2b2b31",
                    colorBgElevated: "#2b2b31",
                    colorPrimaryHover: "#2b2b31",
                    colorText: "#fff",
                    controlItemBgActive: "#2b2b31",
                    controlHeight: 24,
                    controlOutlineWidth: 0,
                    controlPaddingHorizontal: 0,
                    paddingSM: 6
                }
            }
        }}>
            <Select
                defaultValue={"RATING"}
                onChange={handleChange}
                style={{width: "200px"}}
                options={[
                    {
                        value: 'RATING',
                        label: 'Рейтинг',
                    },
                    {
                        value: 'NUM_VOTE',
                        label: 'Количество отзывов',
                    },
                    {
                        value: 'YEAR',
                        label: 'Год производства',
                    },
                ]}
            />
        </ConfigProvider>
        </>
    );
}
export default SelectContainerFilmsType;