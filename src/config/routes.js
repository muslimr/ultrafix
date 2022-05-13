import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from "../layouts/Main/MainPage";
import AboutPage from "../layouts/Main/AboutPage";


export const useRoutes = isAuthenticated => {

    const pageRoutes = [
        {path: '/', component: <MainPage />},
        {path: '/main', component: <MainPage />},
        {path: '/about/refrigerator', component: <AboutPage type={'refrigerator'}/>},
        {path: '/about/ice_machine', component: <AboutPage type={'ice_machine'}/>},
        {path: '/about/washer', component: <AboutPage type={'washer'}/>},
        {path: '/about/dryer', component: <AboutPage type={'dryer'}/>},
        {path: '/about/dishwasher', component: <AboutPage type={'dishwasher'}/>},
        {path: '/about/oven', component: <AboutPage type={'oven'}/>},
        {path: '/about/cooktop', component: <AboutPage type={'cooktop'}/>},
        {path: '/about/microwave', component: <AboutPage type={'microwave'}/>},
        {path: '/about/wine_cooler', component: <AboutPage type={'wine_cooler'}/>},
        {path: '/about/freezer', component: <AboutPage type={'freezer'}/>},
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
