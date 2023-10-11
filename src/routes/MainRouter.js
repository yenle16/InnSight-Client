import MainLayout from "../shared/components/layout/MainLayout";
import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
import DetailUser from "../pages/qltaikhoan/DetailUser";
import QLDichVu from "../pages/qldichvu/QLDichVu";
import QLDanhMuc from "../pages/qldanhmuc/QLDanhMuc";
import Thongke from "../pages/admin-thongke/Thongke";
import Setting from "../pages/admin-setting/Setting";
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
        path: '/qltaikhoan/detail',
        component: DetailUser,
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
        path: '/setting',
        component: Setting,
        layout: MainLayout,
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }