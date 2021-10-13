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
                    <div className='d-flex  justify-content-between'
                         style={{
                             position: 'relative',
                             color: '#fff',
                             width: '100%',
                             minHeight: 80,
                             padding: breakpoint === "sm" ? "25px 25px 100px 25px" : 40,
                             paddingBottom: breakpoint === "sm" ? 100 : 30,
                             background: '#003168'
                         }}
                    >
                        {
                            breakpoint !== 'sm' &&
                            <div>
                                We are in social networks
                                <div className='d-flex align-items-start mt-3'>
                                    <div className='d-flex align-items-center' style={{cursor: 'pointer'}}>
                                        <img src={`/assets/SVG/fb-icon.svg`} style={{width: 30, marginRight: 5}}/>
                                        <div className='mx-2'>Facebook</div>
                                    </div>

                                    <div className='d-flex mx-4 align-items-center' style={{cursor: 'pointer'}}>
                                        <img src={`/assets/SVG/instagram-icon.svg`} style={{width: 30, marginRight: 5}}/>
                                        <div className='mx-2'>Instagram</div>
                                    </div>
                                </div>
                            </div>
                        }

                        <div>
                            <img src={`/assets/SVG/Ultrafix-logo-white.svg`} style={{width: 150, marginBottom: 15}}/>
                            <div style={{fontSize: 12}}>Copyright © 2021 "UltraFix Appliance Repair" LLC</div>
                        </div>
                    </div>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
