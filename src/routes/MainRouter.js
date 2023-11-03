import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import HostLayout from "../shared/components/layout/HostLayout/HostLayout";
import ResultPage from "../pages/result-page/ResultPage";
import HotelPage from "../pages/hotel/HotelPage";
import SigninPage from "../pages/signin-page/SigninPage";
import SinginLayout from "../shared/components/layout/SigninLayout";
import SignupPage from "../pages/signup-page/SignupPage";
import SettingPage from "../pages/user-settings-page/SettingPage";
import RegisterHost1 from "../pages/host-pages/register-1/RegisterHost1";
import RegisterHost2 from "../pages/host-pages/register-2/RegisterHost2";
import RegisterHost3 from "../pages/host-pages/register-3/RegisterHost3";
import RegisterHost4 from "../pages/host-pages/register-4/RegisterHost4";
import RegisterHost5 from "../pages/host-pages/register-5/RegisterHost5";
import HostRegisterHomePage from "../pages/host-pages/register-home-page/HostRegisterHomePage";
import MainLayoutAdmin from "../shared/components/layout/MainLayoutAdmin";
import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
import DetailUser from "../pages/qltaikhoan/DetailUser";
import QLDichVu from "../pages/qldichvu/QLDichVu";
import QLLoaiPhong from "../pages/qldanhmuc/QLLoaiPhong";
import QLLoaiGiuong from "../pages/qldanhmuc/QLLoaiGiuong";
import QLTamNhin from "../pages/qldanhmuc/QLTamNhin";
import Thongke from "../pages/admin-thongke/Thongke";
import Setting from "../pages/admin-setting/Setting";
import AddAdmin from "../pages/admin-addAdmin/AddAdmin";
import Changepw from "../pages/admin-ChangePW/Changepw";
import Cancel1 from "../pages/cancel/Cancel1";
import Cancel2 from "../pages/cancel/Cancel2";
import Cancel3 from "../pages/cancel/Cancel3";
import Cancel4 from "../pages/cancel/Cancel4";
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: MainLayout,
    },
    {
        path: '/admin',
        component: QLTaiKhoan,
        layout: MainLayoutAdmin,
    },
    {
        path: '/qltaikhoan/detail',
        component: DetailUser,
        layout: MainLayoutAdmin,
    },
    {
        path: '/qldichvu',
        component: QLDichVu,
        layout: MainLayoutAdmin,
    },
    {
        path: '/qldanhmuc/loai_phong',
        component: QLLoaiPhong,
        layout: MainLayoutAdmin,
    },
    {
        path: '/qldanhmuc/loai_giuong',
        component: QLLoaiGiuong,
        layout: MainLayoutAdmin,
    },
    {
        path: '/qldanhmuc/tam_nhin',
        component: QLTamNhin,
        layout: MainLayoutAdmin,
    },
    {
        path: '/admin_thongke',
        component: Thongke,
        layout: MainLayoutAdmin,
    },
    {
        path: '/admin_setting',
        component: Setting,
        layout: MainLayoutAdmin,
    },
    {
        path: '/addAdmin',
        component: AddAdmin,
        layout: MainLayoutAdmin,
    },
    {
        path: '/admin_changepw',
        component:Changepw,
        layout: MainLayoutAdmin,
    },
    {
        path: '/hotel/:id',
        component: HotelPage,
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
        layout: MainLayout,
    },
    {
        path: '/cancel/1',
        component: Cancel1,
        layout: MainLayout,
    },
    {
        path: '/cancel/2',
        component: Cancel2,
        layout: MainLayout,
    },
    {
        path: '/cancel/3',
        component: Cancel3,
        layout: MainLayout,
    },
    {
        path: '/cancel/4',
        component: Cancel4,
        layout: MainLayout,
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
