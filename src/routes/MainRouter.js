import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import ResultPage from "../pages/result-page/ResultPage";
import HotelPage from "../pages/hotel/HotelPage";
import SigninPage from "../pages/signin-page/SigninPage";
import SinginLayout from "../shared/components/layout/SigninLayout";
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
    },
    {
        path: '/searchresults',
        component: ResultPage,
        layout: MainLayout,
    },
    {
        path: '/hotel/:id',
        component: HotelPage,
        layout: MainLayout,
    },
    {
        path: '/sign-in',
        component: SigninPage,
        layout: SinginLayout,
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }