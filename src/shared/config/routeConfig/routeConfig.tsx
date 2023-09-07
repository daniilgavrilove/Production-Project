import {ReactNode} from 'react';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {RouteObject} from 'react-router-dom';
import ErrorPage from "pages/ErrorPage/ui/ErrorPage";

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
}

export const routesConfig: RouteObject[] = [
    {path: AppRoutes.MAIN, element: <MainPage/>, errorElement: <ErrorPage/>},
    {path: AppRoutes.ABOUT, element: <AboutPage/>},

];
