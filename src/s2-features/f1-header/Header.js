import classes from "./Header.module.css";
import {SearchOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchBar, setKeyword, setOnChangeKeyword} from "../../s1-main/m2-bll/actions/commonSetActions";
import {NavLink} from "react-router-dom";

function Header() {
    const isSearchBar = useSelector(state => state.settings.isSearchBar);
    const dispatch = useDispatch();

    function onToggleSearchBar() {
        dispatch(setIsSearchBar(!isSearchBar));
    }

    let searchKeyWord = "";
    function onChangeKeywordSearch(e) {
        searchKeyWord = e.target.value;
        dispatch(setOnChangeKeyword(e.target.value));
    }
    function onCLickSearchButton() {
        dispatch(setKeyword(searchKeyWord));
    }

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.logo}>
                   <NavLink className={classes.navlink} to={"/"}>Movies</NavLink>
                </div>
                <nav className={classes.navBar}>
                    <div className={classes.menuBlock}>
                        <div className={classes.menuList}>
                            <ul>
                                <li><NavLink to={"/"}><span>Главная</span></NavLink></li>
                                <li><span>Фильмы</span></li>
                                <li><span>Сериалы</span></li>
                                <li><span>Мультфильмы</span></li>
                                <li><span>Каталог</span></li>
                            </ul>
                        </div>
                        <div className={classes.menuSearch}>
                            <div>
                                <SearchOutlined onClick={onToggleSearchBar}/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={classes.auth}>
                    <div className={classes.signIn}>
                        <span>Sign in</span>
                    </div>
                </div>
            </div>
            {
                isSearchBar ?
                    <div className={classes.searchContainer}>
                        <div className={classes.searchContent}>
                            <input onChange={onChangeKeywordSearch} type="text"
                                   placeholder="Search for a movie, TV Series that you are looking for"></input>
                            <NavLink to={"/search"}><button onClick={onCLickSearchButton} type="button">Поиск</button></NavLink>
                        </div>
                    </div>
                    :
                    <></>
            }

        </header>
    );
}

export default Header;