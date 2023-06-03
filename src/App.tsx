import {Link, Route, Routes} from "react-router-dom"
import "./styles/index.scss"
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense} from "react";
import {useTheme} from "./theme/useThem";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
    <div className={classNames('app',{},[theme])}>
        <button onClick={toggleTheme}>Сменить тему</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path={"/about"} element={<AboutPageLazy/>}/>
                <Route path={"/"} element={<MainPageLazy/>}/>
            </Routes>
        </Suspense>
    </div>
  )
}
