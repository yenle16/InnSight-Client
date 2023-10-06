import QLTaiKhoan from "../pages/qltaikhoan/QLTaiKhoan";
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
    }
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }