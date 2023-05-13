import {ConfigProvider, Pagination} from "antd";
import {useDispatch} from "react-redux";

function PaginationContainer(props) {
    const dispatch = useDispatch()

    let onChangeCurrentPage = (page, pageSize) => {
        dispatch(props.setCurrentPage(page));
    }

    return (
        <ConfigProvider theme={{
            components: {
                Pagination: {
                    colorPrimary: "#ff55a5",
                    colorPrimaryHover: "linear-gradient(90deg, #ff5860 100%,  #ff55a5 0%)",
                    colorBgContainer: "linear-gradient(90deg, #ff55a5 0%, #ff5860 100%)",
                    colorTextDisabled: "#FFFFFF7F",
                    colorText: "rgba(255,255,255,0.5)",
                    fontSize: 16,
                    fontSizeLG: 16,
                    fontSizeSM: 16,
                    fontSizeXL: 16,
                    fontWeightStrong: 900,
                    controlHeight: 45,
                    borderRadius: 4,
                    controlOutline: "red"
                },
            },
        }}>
            <Pagination style={{backgroundColor: "#2b2b31", boxShadow: "0 0 20px 0 rgba(0,0,0,0.3)",}}
                        showSizeChanger={false}
                        pageSize={props.pageSize}
                        current={props.currentPage}
                        total={props.totalElements}
                        onChange={onChangeCurrentPage}
            />
        </ConfigProvider>
    );
}

export default PaginationContainer;