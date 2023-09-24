import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: MainLayout,
    },
    {
        path: '/home',
        component: HomePage,
        layout: MainLayout,
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }