import {ConfigProvider, Select} from "antd";
import {useDispatch} from "react-redux";

function SelectContainerFilmsType({setTypeFilms}) {
    const dispatch = useDispatch();
    const handleChange = (value) => {
        dispatch(setTypeFilms(value));
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
                defaultValue={"ALL"}
                onChange={handleChange}
                style={{width: "165px"}}
                options={[
                    {
                        value: 'ALL',
                        label: 'Все',
                    },
                    {
                        value: 'FILM',
                        label: 'Фильмы',
                    },
                    {
                        value: 'TV_SHOW',
                        label: 'ТВ шоу',
                    },
                    {
                        value: 'TV_SERIES',
                        label: 'Сериалы',
                    },
                    {
                        value: 'MINI_SERIES',
                        label: 'Мини сериалы',
                    },
                ]}
            />
        </ConfigProvider>
        </>
    );
}
export default SelectContainerFilmsType;