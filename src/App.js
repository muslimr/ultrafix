import React from 'react';
import {BrowserRouter as Router, useHistory, useLocation} from 'react-router-dom';
import {useRoutes} from "./config/routes";
import {useAuth, useWindowDimensions} from "./hooks";
import {AuthContext} from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Loader} from "./components/Loader";
import "./assets/index.scss";
import Main from "./layouts/App/App";
import "antd/dist/antd.css";


function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    const {breakpoint} = useWindowDimensions();

    if (!ready) {
        return <Loader />
    }


    return(
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <Router>
                <div>
                    <Main/>
                    {routes}
                    <div className='d-flex  justify-content-between'
                         style={{
                             position: 'relative',
                             color: '#fff',
                             width: '100%',
                             minHeight: 80,
                             padding: breakpoint === "sm" ? "25px 25px 100px 25px" : '20px 40px',
                             paddingBottom: breakpoint === "sm" ? 100 : 30,
                             background: '#003168'
                         }}
                    >
                        {
                            breakpoint !== 'sm' &&
                            <div>
                                We are in social networks
                                <div className='d-flex align-items-start mt-3'>
                                    <form method="get"
                                          action={'https://www.facebook.com/ultrafixappliance'}
                                          style={{cursor: 'pointer'}}
                                    >
                                        <button type="submit"
                                                className='d-flex align-items-center'
                                                style={{background: 'none', color: '#fff', border: 'none' }}
                                        >
                                            <img src={`/assets/SVG/fb-icon.svg`} style={{width: 30, marginRight: 5}}/>
                                            <div className='mx-2'>Facebook</div>
                                        </button>
                                    </form>

                                    <form method="get"
                                          action={'https://www.instagram.com/ultrafixappliance/'}
                                          style={{cursor: 'pointer'}}
                                    >
                                        <button type="submit"
                                                className='d-flex mx-4 align-items-center'
                                                style={{background: 'none', color: '#fff', border: 'none' }}
                                        >
                                            <img src={`/assets/SVG/instagram-icon.svg`} style={{width: 30, marginRight: 5}}/>
                                            <div className='mx-2'>Instagram</div>
                                        </button>
                                    </form>
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
