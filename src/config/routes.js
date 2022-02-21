import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from "../layouts/Main/MainPage";
import AboutPage from "../layouts/Main/AboutPage";


export const useRoutes = isAuthenticated => {

    const pageRoutes = [
        {path: '/', component: <MainPage />},
        {path: '/main', component: <MainPage />},
        {path: '/refrigerator', component: <AboutPage type={'refrigerator'}/>},
        {path: '/ice_machine', component: <AboutPage type={'ice_machine'}/>},
    ];


    return(
        <Switch>
            {
                pageRoutes.map((page, index) =>
                    <Route key={index} path={page.path} exact>{page.component}</Route>
                )
            }
            <Redirect to="/"/>
        </Switch>
    );
}
