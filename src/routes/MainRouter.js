import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import MainLayoutAdmin from "../shared/components/layout/MainLayoutAdmin";
import ResultPage from "../pages/result-page/ResultPage";
import HotelPage from "../pages/hotel/HotelPage";
import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
import DetailUser from "../pages/qltaikhoan/DetailUser";
import QLDichVu from "../pages/qldichvu/QLDichVu";
import QLLoaiPhong from "../pages/qldanhmuc/QLLoaiPhong";
import QLLoaiGiuong from "../pages/qldanhmuc/QLLoaiGiuong";
import QLTamNhin from "../pages/qldanhmuc/QLTamNhin";
import Thongke from "../pages/admin-thongke/Thongke";
import Setting from "../pages/admin-setting/Setting";
import AddAdmin from "../pages/admin-addAdmin/AddAdmin";
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
        path: '/qltaikhoan',
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
        path: '/thongke',
        component: Thongke,
        layout: MainLayoutAdmin,
    },
    {
        path: '/setting',
        component: Setting,
        layout: MainLayoutAdmin,
    },
    {
        path: '/addAdmin',
        component: AddAdmin,
        layout: MainLayoutAdmin,
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
        path: '/searchresults',
        component: ResultPage,
        layout: MainLayout,
    },
    {
        path: '/hotel/:id',
        component: HotelPage,
        layout: MainLayout,
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }