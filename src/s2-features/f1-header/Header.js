import classes from "./Header.module.css";
import {SearchOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {setIsSearchBar} from "../../s1-main/m2-bll/actions/headerActions";

function Header({setIsSearchBar, isSearchBar}) {
    function onToggleSearchBar() {
        setIsSearchBar(!isSearchBar);
    }

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.logo}>
                    Movies
                </div>
                <nav className={classes.navBar}>
                    <div className={classes.menuBlock}>
                        <div className={classes.menuList}>
                            <ul>
                                <li><span>Главная</span></li>
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
                            <input type="text"
                                   placeholder="Search for a movie, TV Series that you are looking for"></input>
                            <button type="button">Поиск</button>
                        </div>
                    </div>
                    :
                    <></>
            }

        </header>
    );
}

let mstp = (state) => ({
    isSearchBar: state.header.isSearchBar
});

export default connect(mstp, {
    setIsSearchBar
})(Header);