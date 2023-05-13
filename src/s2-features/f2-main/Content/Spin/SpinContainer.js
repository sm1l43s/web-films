import {Col, ConfigProvider, Row, Spin} from "antd";

function SpinContainer(props) {
    return (
        <>
            <Row justify={"center"} align={"middle"} style={{
                width: "100%",
                height: 380 * props.countRow,
                backgroundColor:"#2b2b31",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)"
            }}>
                <Col>
                    <ConfigProvider theme={{components: {Spin: {colorPrimary: "#ff10b3", controlHeight: 48}}}}>
                        <Spin size={"large"} />
                    </ConfigProvider>
                </Col>
            </Row>
        </>
    );
}

export default SpinContainer;