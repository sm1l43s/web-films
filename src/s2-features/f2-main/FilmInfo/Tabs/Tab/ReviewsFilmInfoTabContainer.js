import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getReviewsFilmInfo} from "../../../../../s1-main/m2-bll/thunk/filmsThunk";
import {Collapse, ConfigProvider, Row} from "antd";
import classes from "./Review.module.css";
import {CaretRightOutlined} from "@ant-design/icons";
import PaginationContainer from "../../../Content/Pagination/PaginationContainer";
import {setCurrentPageReviews} from "../../../../../s1-main/m2-bll/actions/films/filmInfoAction";
import SpinContainer from "../../../Content/Spin/SpinContainer";

const {Panel} = Collapse;

function ReviewsFilmInfoTabContainer({id}) {
    const reviews = useSelector(state => state.filmInfo.reviews);
    const currentPageReviews = useSelector(state => state.filmInfo.currentPageReviews);
    const totalElementsReviews = useSelector(state => state.filmInfo.totalElementsReviews);
    const isFetchingReviews = useSelector(state => state.filmInfo.isFetchingReviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsFilmInfo(id, currentPageReviews));
    }, [currentPageReviews, dispatch, id]);

    let reviewsItems = reviews.map(review => {
        return <Panel style={{
            backgroundColor: "#2b2b31", margin: "5px 0px"
        }} header={`${review.title}`} key={review.kinopoiskId}>
            <div className={classes.info}>
                <h2>{review.author}</h2>
                <span>{review.date}</span>
                <p>{review.description}</p>
            </div>
        </Panel>
    });


    return (
        <>
            {
                isFetchingReviews ? <SpinContainer countRow={2}/> :

            <Row style={{width: "100%"}}>
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            colorBorder: "#2b2b31",
                            colorTextHeading: "rgba(255,255,255,0.7)",
                            fontSize: 16,
                            lineWidth: "100%"
                        },
                    }
                }}>
                    <div style={{padding: "10px", backgroundColor: "#28282d", minWidth: "1100px"}}>
                        <Collapse bordered={false}
                                  expandIcon={({isActive}) =>
                                      <CaretRightOutlined
                                          style={{color: "#ff55a5"}}
                                          rotate={isActive ? 90 : 0}/>
                                  }>
                            {reviewsItems}
                        </Collapse>
                    </div>
                </ConfigProvider>
            </Row>
            }
            <Row justify={"center"} style={{marginTop: 30}}>
                <PaginationContainer pageSize={20}
                                     currentPage={currentPageReviews}
                                     totalElements={totalElementsReviews}
                                     setCurrentPage={setCurrentPageReviews}
                />
            </Row>
        </>

    );
}

export default ReviewsFilmInfoTabContainer;