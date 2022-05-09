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
        {path: '/washer', component: <AboutPage type={'washer'}/>},
        {path: '/dryer', component: <AboutPage type={'dryer'}/>},
        {path: '/dishwasher', component: <AboutPage type={'dishwasher'}/>},
        {path: '/oven', component: <AboutPage type={'oven'}/>},
        {path: '/cooktop', component: <AboutPage type={'cooktop'}/>},
        {path: '/microwave', component: <AboutPage type={'microwave'}/>},
        {path: '/wine_cooler', component: <AboutPage type={'wine_cooler'}/>},
        {path: '/freezer', component: <AboutPage type={'freezer'}/>},
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
