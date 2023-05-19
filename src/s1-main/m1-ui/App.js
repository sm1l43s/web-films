import './App.css';
import Header from "../../s2-features/f1-header/Header";
import MainSection from "../../s2-features/f2-main/MainSection";
import {Route, Routes} from "react-router-dom";
import FilmInfoContainer from "../../s2-features/f2-main/FilmInfo/FilmInfoContainer";
import SearchByKeywordContainer from "../../s2-features/f3-search/SearchByKeywordContainer";
import CatalogFilmsContainer from "../../s2-features/f4-catalog/CatalogFilmsContainer";

function App() {
    return (
            <div className="App">
                    <Header/>
                <Routes>
                    <Route path={"/"} element={<MainSection/>} />
                    <Route path={"/films/:filmId"} element={<FilmInfoContainer/>}/>
                    <Route path={"/search"} element={<SearchByKeywordContainer />}/>
                    <Route path={"/catalog"} element={<CatalogFilmsContainer />}/>
                </Routes>
                <footer>
                    footer
                </footer>
            </div>
    );
}

export default App;
