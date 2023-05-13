import './App.css';
import Header from "../../s2-features/f1-header/Header";
import MainSection from "../../s2-features/f2-main/MainSection";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
            <div className="App">
                    <Header/>
                <Routes>
                    <Route path={"/"} element={<MainSection/>} />
                    <Route path={"/films/:filmId"} element={<></>}/>
                </Routes>
            </div>
    );
}

export default App;
