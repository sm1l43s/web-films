import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilmsBySearchKeyword} from "../../s1-main/m2-bll/thunk/filmsThunk";
import SearchByKeyword from "./SearchByKeyword";
import SpinContainer from "../f2-main/Content/Spin/SpinContainer";

function SearchByKeywordContainer() {
    const films = useSelector(state => state.settings.films);
    const searchKeyword = useSelector(state => state.settings.keyword);
    const currentPage = useSelector(state => state.settings.currentPage);
    const totalElements = useSelector(state => state.settings.totalElements);
    const isFetching = useSelector(state => state.settings.isFetching);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getFilmsBySearchKeyword(searchKeyword, currentPage));
    }, [currentPage, dispatch, searchKeyword])
    return (
        <>
        {
            isFetching ? <SpinContainer countRow={2}/> :
                <SearchByKeyword films={films}
                                 totalElements={totalElements}
                                 currentPage={currentPage}/>
        }
        </>
    );
}
export default SearchByKeywordContainer;