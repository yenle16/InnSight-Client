import AirIcon from '@mui/icons-material/Air';
import ElevatorIcon from '@mui/icons-material/Elevator';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BathtubIcon from '@mui/icons-material/Bathtub';

const Constants = {
    price: [
        100000,
        300000,
        500000,
        1000000,
        2000000,
        5000000,
    ],
    roomType: [
        'Tất cả',
        'Phòng đôi',
        'Phòng tổng thống',
        'Phòng đơn'
    ],
    rate: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    amenities: [
        { name: 'máy lạnh', icon: <AirIcon /> },
        { name: 'thang máy', icon: <ElevatorIcon /> },
        { name: 'thang máy', icon: <RestaurantIcon /> },
        { name: 'wifi', icon: <WifiIcon /> },
        { name: 'lễ tân', icon: <LocalLibraryIcon /> },
        { name: 'nhà tắm riêng', icon: <BathtubIcon /> },

    ]
}
export default Constants;