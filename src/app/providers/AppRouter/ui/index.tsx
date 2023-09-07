import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export const AppRouter = () => {
    routesConfig.map(({ path, element }) => (
        { path, element }
    ));

    const router = createBrowserRouter(
        routesConfig.map(({ path, element, errorElement }) => (
            {
                path,
                element,
                errorElement,
            }

        )),
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
