import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, useHistory, useLocation} from 'react-router-dom';
import {useAuth, useWindowDimensions} from "../../hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import MySidebar from "../../components/core/MySidebar";
import MyNavbar from "../../components/core/MyNavbar";
import "../../assets/index.scss";
import {AuthContext} from "../../context/AuthContext";
import {useRoutes} from "../../config/routes";
import MyStaticSidebar from "../../components/core/MyStaticSidebar";
import MyModal from "../../components/modals/MyModal";


function Main() {
    const dimensions = useWindowDimensions();
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token;
    const [sidebar, setSidebar] = useState(false);

    // const routes = useRoutes(isAuthenticated)

    useEffect(() => {
        setSidebar(isAuthenticated)
    }, [isAuthenticated]);


    const pageRoutes = [
        {label: 'Services', route: '#services'},
        {label: 'Prices', route: '#prices'},
        {label: 'Why Us', route: '#whyus'},
        {label: 'Brands', route: '#brands'},
        {label: 'Contact Us', route: '#contact'},
        {label: 'About Us', route: '#about'},
    ];


    const panelRoutes = [
        {label: 'Каталог', route: '/adminPanel/categories'},
        {label: 'Прайс-Лист', route: '/adminPanel/price_list'},
        {label: 'Доставка', route: '/adminPanel/delivery'},
        {label: 'Контакты', route: '/adminPanel/contacts'},
        {label: 'О нас', route: '/adminPanel/about'},
    ];


    let location = useLocation();


    return(
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <div className='no-select'>
            {
                location.pathname.split('/')[1] === 'adminPanel'
                    ?
                    <>
                        {
                            location.pathname.split('/').length > 2 &&
                            <MyStaticSidebar pageRoutes={panelRoutes}/>
                        }
                    </>

                    :
                    <>
                        {
                            dimensions.width < 768 &&
                            <div className='mob_footer'>
                                <form method="get"
                                      action={'https://www.facebook.com/ultrafixappliance'}
                                      style={{cursor: 'pointer'}}
                                      className="call-btn"
                                >
                                    <button type="submit"
                                            className='d-flex align-items-center'
                                            style={{background: 'none', color: '#fff', border: 'none' }}
                                    >
                                        <img src={`/assets/SVG/fb-icon.svg`} style={{width: 30}}/>
                                    </button>
                                </form>

                                <a href="tel:+18329980886" className="call-btn">
                                    <img src="/assets/phone.svg" alt=''/>
                                </a>

                                <a href="instagram://user?username=ultrafixappliance" className="call-btn">
                                    <img src={`/assets/SVG/instagram-icon.svg`} style={{width: 30}}/>
                                </a>
                            </div>
                        }

                        <div style={{width: '100%', zIndex: 100, position: "fixed"}}>
                            <Link className="logo_" to={'/main'}>
                                {
                                    dimensions.width > 1200 &&
                                    <img src={`/assets/SVG/Ultrafix-logo.svg`} className="img_" />
                                }
                            </Link>

                            {
                                dimensions.width <= 1200
                                    ? <MySidebar pageRoutes={pageRoutes}/>
                                    : <MyNavbar pageRoutes={pageRoutes}/>
                            }
                        </div>
                    </>
            }
        </div>
        </AuthContext.Provider>
    );
}

export default Main;
