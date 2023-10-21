import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import ResultPage from "../pages/result-page/ResultPage";
import HotelPage from "../pages/hotel/HotelPage";
import SigninPage from "../pages/signin-page/SigninPage";
import SinginLayout from "../shared/components/layout/SigninLayout";
import SignupPage from "../pages/signup-page/SignupPage";
import SettingPage from "../pages/user-settings-page/SettingPage";
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
    },
    {
        path: '/sign-up',
        component: SignupPage,
        layout: SinginLayout,
    },
    {
        path: '/mysettings',
        component: SettingPage,
        layout: SinginLayout,
    },

  {
    path: "/host",
    component:HostRegisterHomePage ,
    layout: HostLayout,
  },
];
const protectedRoutes = [
  {
    path: "/host/register-1",
    component: RegisterHost1,
    layout: HostLayout,
  },
  {
    path: "/host/register-2",
    component: RegisterHost2,
    layout: HostLayout,
  },
  {
    path: "/host/register-3",
    component: RegisterHost3,
    layout: HostLayout,
  },
  {
    path: "/host/register-4",
    component: RegisterHost4,
    layout: HostLayout,
  },
  {
    path: "/host/register-5",
    component: RegisterHost5,
    layout: HostLayout,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes, protectedRoutes }

