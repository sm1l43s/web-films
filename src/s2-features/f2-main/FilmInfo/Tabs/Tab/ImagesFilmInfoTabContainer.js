import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getImagesFilmInfo} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import {Col, Row} from "antd";
import {Image} from 'antd';
import PaginationContainer from "../../../Content/Pagination/PaginationContainer";
import {setCurrentPageImages} from "../../../../../s1-main/m2-bll/actions/films/filmInfoAction";
import SpinContainer from "../../../Content/Spin/SpinContainer";

function ImagesFilmInfoTabContainer({id}) {
    const images = useSelector(state => state.filmInfo.images);
    const currentPageImages = useSelector(state => state.filmInfo.currentPageImages);
    const totalElementsImages = useSelector(state => state.filmInfo.totalElementsImages);
    const isFetchingImages = useSelector(state => state.filmInfo.isFetchingImages);
    const dispatch = useDispatch();

    let imageItems = images.map(image => {
        return <Col style={{margin: "10px 0"}}>
            <Image width={200} height={100} src={image.imageUrl}/>
        </Col>
    })
    useEffect(() => {
        dispatch(getImagesFilmInfo(id, currentPageImages));
    }, [dispatch, id, currentPageImages])
    return (
        <>
            <Row justify={"space-between"} align={"stretch"} style={{width: "100%"}}>
                {
                    isFetchingImages ? <SpinContainer countRow={2}/> : <Image.PreviewGroup>{imageItems}</Image.PreviewGroup>
                }
            </Row>
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={currentPageImages}
                                     totalElements={totalElementsImages}
                                     setCurrentPage={setCurrentPageImages}
                />
            </Row>
        </>
    );
}

export default ImagesFilmInfoTabContainer;