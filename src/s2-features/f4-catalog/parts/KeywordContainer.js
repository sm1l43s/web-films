import classes from "../Catalog.module.css";
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {setKeywordCatalog} from "../../../s1-main/m2-bll/actions/catalogFilmsAction";

function KeywordContainer() {
    const dispatch = useDispatch()
    const onchangeKeyword = (e) => {
        dispatch(setKeywordCatalog(e.target.value));
    }
    return (
      <>
          <Col>
              <div className={classes.ratingBlock}>
                  <b>Ключевое слово:</b>
                  <div className={classes.searchContent}>
                      <input type="text" onChange={onchangeKeyword}
                             placeholder="Search for a movie, that you are looking for"></input>
                  </div>
              </div>
          </Col>
      </>
    );
}
export default KeywordContainer;