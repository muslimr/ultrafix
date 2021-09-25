import React from 'react';
import {BrowserRouter as Router, useHistory, useLocation} from 'react-router-dom';
import {useRoutes} from "./config/routes";
import {useAuth, useWindowDimensions} from "./hooks";
import {AuthContext} from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Loader} from "./components/Loader";
import "./assets/index.scss";
import Main from "./layouts/App/App";


function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    const {breakpoint} = useWindowDimensions();

    if (!ready) {
        return <Loader />
    }

    const pageRoutes = [
        {label: 'Главная', route: '/main'},
        {label: 'Каталог', route: '/catalog'},
        {label: 'Прайс-Лист', route: '/price_list'},
        {label: 'Доставка', route: '/delivery'},
        {label: 'Контакты', route: '/contacts'},
        {label: 'О нас', route: '/about'},
    ];


    return(
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <Router>
                <div className='no-select'>
                    <Main/>
                    {routes}
                    <div className='d-flex flex-column align-items-end justify-content-center'
                         style={{
                             position: 'relative',
                             color: '#fff',
                             width: '100%',
                             minHeight: 100,
                             padding: breakpoint === "sm" ? "25px 25px 100px 25px" : 40,
                             paddingBottom: breakpoint === "sm" ? 100 : 40,
                             background: '#003168'
                         }}
                    >
                        <img src={`/assets/SVG/Ultrafix-logo-white.svg`} style={{width: 150, marginBottom: 15}}/>
                        <div style={{fontSize: 12}}>Copyright © 2021 "UltraFix Appliance Repair" LLC</div>
                    </div>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
