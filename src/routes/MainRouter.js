import MainLayout from "../shared/components/layout/MainLayout";
import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
import DetailUser from "../pages/qltaikhoan/DetailUser";
import QLDichVu from "../pages/qldichvu/QLDichVu";
import QLLoaiPhong from "../pages/qldanhmuc/QLLoaiPhong";
import QLLoaiGiuong from "../pages/qldanhmuc/QLLoaiGiuong";
import QLTamNhin from "../pages/qldanhmuc/QLTamNhin";
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
        path: '/qldanhmuc/loai_phong',
        component: QLLoaiPhong,
        layout: MainLayout,
    },
    {
        path: '/qldanhmuc/loai_giuong',
        component: QLLoaiGiuong,
        layout: MainLayout,
    },
    {
        path: '/qldanhmuc/tam_nhin',
        component: QLTamNhin,
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