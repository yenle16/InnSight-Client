import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
import QLDichVu from "../pages/qldichvu/QLDichVu";
import QLDanhMuc from "../pages/qldanhmuc/QLDanhMuc";
import Thongke from "../pages/thongke/Thongke";
import Profile from "../pages/profile/Profile";
import Setting from "../pages/caidat/Setting";
import MainLayout from "../shared/components/layout/MainLayout";
const publicRoutes = [
    {
        path: '/',
        component: QLTaiKhoan,
        layout: MainLayout,
    },
    {
        path: '/qltaikhoan',
        component: QLTaiKhoan,
        layout: MainLayout,
    },
    {
        path: '/qldichvu',
        component: QLDichVu,
        layout: MainLayout,
    },
    {
        path: '/qldanhmuc',
        component: QLDanhMuc,
        layout: MainLayout,
    },
    {
        path: '/thongke',
        component: Thongke,
        layout: MainLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: MainLayout,
    },
    {
        path: '/setting',
        component: Setting,
        layout: MainLayout,
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }