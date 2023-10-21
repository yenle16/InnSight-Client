import React from 'react'
import styles from './SearchResultItem.module.scss'
import PlaceIcon from '@mui/icons-material/Place';
import CheckIcon from '@mui/icons-material/Check';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useNavigate } from 'react-router';

const SearchResultItem = ({ item }) => {
    const navigate = useNavigate();
    const handleSelectItem = () => {
        navigate(`/hotel/${item?.hotelId}`);
    }
    return (
        <div className='border-2 rounded-2xl border-gray-200 p-4 mb-4 h-full'>
            <div className='grid grid-cols-10 gap-4 h-full'>
                <div className='col-span-3'>
                    <img className='rounded-2xl' src={item?.hotelImgPath} alt="" />
                </div>
                <div className='col-span-7 h-full'>
                    <div className={styles['hotel-title']}>{item?.hotelName}</div>
                    <div className='flex flex-row mt-4'>
                        <div className='flex flex-col w-8/12'>
                            <div ><ApartmentIcon /> <span style={{ color: '#CDA517' }}>{item?.type}</span> </div>
                            <div><PlaceIcon /> {item?.address}</div>
                            {item?.services.map((item, index) => (
                                <div key={index}>
                                    <CheckIcon /> {item}
                                </div>
                            ))}
                            <div className='flex justify-start'>
                                <span style={{ color: '#F70000' }} className='block mr-2'>{item?.rate}/10 </span>
                                <span style={{ color: 'black' }}>{item?.reviews} lượt đánh giá</span> </div>
                        </div>
                        <div className='flex flex-col-reverse items-end w-4/12'>
                            <button className={styles['item-button']} onClick={handleSelectItem}>Chọn phòng</button>
                            <div className='flex flex-col items-end mb-5'>
                                <span className={styles['item-price']}>
                                    {item?.priceByNight} VND
                                </span>

                                <span>
                                    Phòng/đêm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
SearchResultItem.defaultProps = {
    item: {
        hotelId: null,
        hotelName: '',
        type: "",
        address: "",
        hotelImgPath: '',
        services: [],
        rate: null,
        reviews: null,
        priceByNight: null,
    }
}
export default SearchResultItem
