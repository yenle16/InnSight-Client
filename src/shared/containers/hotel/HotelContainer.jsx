import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import styles from './HotelContainer.module.scss'
import Room from '../../components/room-list/Room';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import getLatLngFromAddress from "../../../api/ApiGoogleMap"
const data = {
    hotelId: 1,
    hotelName: 'Le House Boutique Hotel',
    hotelType: 3,
    address: '54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng 550000, Việt Nam',
    priceByNight: 400000,
    hotelAmenities: [
        "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
    ],
    hotelImage: [
        'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1697414400&Signature=HVcpSLfEZdKChENW-93oqB7CBqw4c0FowP82a8EIdILdQ707DI4Betg38fhGJ2qlKN35pvPWECRI4lzpYu8KGXzRYmWdqVSQk2Bum~guwUzrkv1Q~Irpu4pMyDdQyA3jjHQTYjU0LjULli7LeWsg2BEm5pZ-~1k8RDoVWYn845BPRcQqA7G7edKJHHSlWp2J7SfQY27zEpuXKUrx12QwWDSU8kXjRy2O4Y5732owthPfMEZ0MGlwAmYatriDJ-Zdi615iSNlDNZIfWrCOhW8mPg7JPRyossOy1C1oGmj6zK7t5v9GtBQFS5u-YHIbriGuV4x84QdkVQBFeDSvqJ60g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/4326/5e24/70a8f5464148d17e43ffa627919023d5?Expires=1697414400&Signature=SpIPREutmAXBCgl71sBctr8NPKtoT~-jU94Q3Z5YqhpyMYB--ZGyT3-l3jmgHEbeG6iCGQc3by5JndAo7d8TAr9VN19RpAA9FCi4xSCKHlhOu0FTr1V-e8r2I8IEF4Rt18SxwU8r7iuZUwvzst~OOG58QGJJDCXZOX6eqRDaB0GG6NCgnxrJiTQ2H31ntSEgxdJVODy4erF-QTg-xusuH~-kadtvv-AJYPE8VT8EjGKEV9MIJ2w7LTUIbTJ6S3EOPXyH-xOLRUy-OuOUay-XVWLVBdVds1AOKRI17n1ESwgUmZqZcdBWzWHns-HGuwTwDW3G3Km6iIfcCSAdvD1vjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/543a/a53c/ec03e3b5f2e2cc0e36a41a0ed78034a6?Expires=1697414400&Signature=npcUjKOYCZqD0IftU8OXQiYIQuMtRB647z8yPOcnUtn72pOhXxyDODZLfBUJieBMuNAsxSFDeg3ZfCEkv2ZmyIMeKCP7Np4MdWqyNkozQPWYCOdamaP1gl4j1AyW6~hwzYRAfY-5Yhjl-kz0fHsSFTJERV5L2rTe3RKaE-nLL0eYe0UPwlPuI6Q4UNwzCNJAiO4ZPWNjTsz-~9HdAwFz5FsgugFsHsnj9WsdsetIzdb44Nn0HDHrtsGLxNtwvXry5ULDfVoQSB~xKqlCnJp-Ixf79l99LuiRAeiku254Qv4RTISS2gKsd0gOcGc7oMK4SJrO11s3zWhZUcPjSQONog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/5d7f/faea/3546b032bdd66c46f80ad4b242e649c7?Expires=1697414400&Signature=V7iKIixiVq4GBlaqTkE5nYpPLIXM4DTtUtYZNFsl26y1g1opBDk4asbFTlqSpyqdZbPkt1Nw8PXicpY0bWq37q38sdF91gkrYmxIB-LVQ3m--vyXfoI5j~RThgOPhkVpU98Bpqj-oVkeUxUHRj-0cAsYZlOKWA2eVvjrIct91Fldj6cNu5knmpB3qKsIZ2cuWzL~~8vGASZE6VGWhbVbldgJQtHs3dVBSEbc3GkJmt2hGEDNK8JVlrywVOuWRfc38sndJwAuFvn0Ph9uzN14rw0lmjz0OLWhZvQHzkN62UIBigVNM29E2N6XH65QRLjcUphp6ce-mlsvI3WFB2smow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/5508/1159/83fa3594f9020a732ea68d6f81b79880?Expires=1697414400&Signature=m2iViYcMMwzOK2DwfKymSSv60Cs7B5UbmBVAEnLwWmjPjY8mZyFj4Yb4pP883Re82Sf6MjXEudga2HGnkPk4t-SE359GPq2dDSsu-xtIhKaec3UHCkw-oaA4hLkISJ4GMENHCG1pz-WtYsRDXLZwNCdbbZTLAupmfxTFJxFT0J5VUzJzgt7J3jc6lFg7EnSI5ZsNKnXNVCI8ZuU5CV2QletyZvuEHwdTpggpeQ0yA0CVdIfC0MvvKGpxbYDCCitpMwP~4sFwGyd1LpJT2M7sqVTatDf9bqnPFcUsUsZ~sFzRy50PEE2w2TOpgL805~5fBvlvwiQGtMtwjEv~aq4J9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/32fb/887c/2afbdd2babf53c1a0fbbe5686c9ba9df?Expires=1697414400&Signature=ofJN1dwyEFTyaKzw1yw3PhuHF-eF~WTBnBWq7TTxqMbAYv9nWZDpSIZl4OWFbVIX1SHhzq0tQ2BuCKQHQGdM~GepKHqzHME-kgvcTz-ZcsGJpLSVk-CGaVW3xB8y-Xy8yT9X9oHgpIX1ZvhVgFprrgFcCD8IgT9~cS8slsGxHmzPI-jb8i4wjVrar~RPHCnvciyt4DNhqPKlGGj1xruwWfq7bFNComXO26g7yLBSGkBTXd5z61XuD9S6lsxmqcWAnCF6v0~7voCf15uBEKgBpScCR9ye85mcgq60t5-BSDg-Wc9Sy-Z7enGdPAJGh3lfuMdxhkh1XOylKWh4CT2oBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/c086/1985/482670b36734ee38bc64672c855aa9ac?Expires=1697414400&Signature=iLCRv9K2KRpqg-qIVja3-Jm3mMkD5~drwNcQm1yT9jPNkLcpWhPWAtayHoWPzn7K6yBDlmXpugDkTSqIvjRk5pP95-w42a7-bTmaYbH9wfcrxfkmaBcYOMBqPx1rk4R5oI4ZK5Klx8y-VwhJAj~X72gb9klKqI8vR8JmiCDzt-ZMnIIouc7g1ck5WaZStiXkr4eXPA5OHBlauJJtoUlEXAi6QHh4HxTOTRkWmZKdKfMeAUxuus3IuenfJEuzdrQOihz9Fp1MxcqJzPGbmYxugLfwJRcrXpH5nAaeZKfI7~Cm6lqEGnPR1HWKHhUcInaDEq1n2i7~2si--ilGNagWBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
    description: `Lưu trú tại La Beach Hotel là một lựa chọn đúng đắn khi quý khách đến thăm Phước Mỹ. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào.`,
    roomsList: [
        {
            id: 1,
            roomName: 'Phòng Premium hai giường',
            discountPrice: 600000,
            price: 696900,
            roomImage: "https://s3-alpha-sig.figma.com/img/3956/474c/70a7fc693f85ec854b5116ef42520d0f?Expires=1697414400&Signature=TwLxfNH1Y6RwiGyeDHY6jASSBCXplD8W8X9tKrolFHB4SWKcPj3fKHN9VamsnItEhFQTw-1uParwe2p0YXzAdr6-3kNZisDfVP83L4Q-zHVpG6porY2Ee-X3DLnjZReRnNmafUTmkkpUhrJCgFWYXOAIuqunEoTKDbVk-RbXLxU--kRZiJnxpvIKAFlC0451cLRpxI-EtGrSWdT-1WGLoJuErYqdLDWg25l~JqF6L~GT9U00nqRVxqRgIh2VzH-nzjErVwi9OxOwg5-pz9VhBVDzireSaTwoHBUINKYTScySeWEKTe4wFug3~hKvCZeGxyeznRbPIS4L7Tssws873Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            quatity: 5,
            adult: 2,
            children: 1,
            services: [
                "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
            ],
            amenities: [
                "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
            ]
        },
        {
            id: 1,
            roomName: 'Phòng Premium hai giường',
            discountPrice: 600000,
            price: 696900,
            roomImage: "https://s3-alpha-sig.figma.com/img/3956/474c/70a7fc693f85ec854b5116ef42520d0f?Expires=1697414400&Signature=TwLxfNH1Y6RwiGyeDHY6jASSBCXplD8W8X9tKrolFHB4SWKcPj3fKHN9VamsnItEhFQTw-1uParwe2p0YXzAdr6-3kNZisDfVP83L4Q-zHVpG6porY2Ee-X3DLnjZReRnNmafUTmkkpUhrJCgFWYXOAIuqunEoTKDbVk-RbXLxU--kRZiJnxpvIKAFlC0451cLRpxI-EtGrSWdT-1WGLoJuErYqdLDWg25l~JqF6L~GT9U00nqRVxqRgIh2VzH-nzjErVwi9OxOwg5-pz9VhBVDzireSaTwoHBUINKYTScySeWEKTe4wFug3~hKvCZeGxyeznRbPIS4L7Tssws873Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            quatity: 5,
            adult: 2,
            children: 1,
            services: [
                "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
            ],
            amenities: [
                "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
            ]
        }
    ],
    reviews: [
        {
            rate: 8.9,
            review: "",
        },
        {
            rate: 9.9,
            review: "",
        }
    ],
    rules: [
        {
            name: "",
            describe: "",
        }
    ]


}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,

};
function Map({ lat, lng }) {
    return <GoogleMap zoom={15} center={{ lat: lat, lng: lng }} mapContainerClassName={styles['map-container']}>
        <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
}
const HotelContainer = () => {
    const [open, setOpen] = React.useState(false);
    const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
    const handleOpen = async () => {
        setOpen(true);
        try {
            const result = await getLatLngFromAddress(data?.address);
            setLatLng(result);
        } catch (error) {
            console.error(error);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })
    return (
        <div>
            <Header />
            <div className={styles['content']}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {isLoaded && <Map lat={latLng.lat} lng={latLng.lng} />}
                    </Box>
                </Modal>
                <div className={styles['content-block']}>
                    <div className={`grid grid-cols-12 `}>
                        <div className='col-span-10'>
                            <div className={styles['title']}>
                                {data?.hotelName}
                            </div>
                            <div>
                                {Array.from({ length: data?.hotelType || 0 }).map((_, index) => (
                                    <StarIcon key={index} className='text-yellow-400' />
                                ))}
                            </div>
                            <p className='text-sm font-semibold'>
                                <PlaceIcon />
                                <span>{data?.address}</span>
                                <button className='text-xs text-cyan-500 ml-2' onClick={handleOpen}>Xem bản đồ</button>
                            </p>
                        </div>
                        <div className='col-span-2'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='font-semibold mb-2' >Giá phòng mỗi đêm từ</div>
                                <div className='text-lg text-red-500 font-semibold mb-2'>{data?.priceByNight.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                <div>
                                    <Button variant='contained mb-2' className={styles['button-orange']}>
                                        Chọn phòng
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles['content-block']}>
                    <div className='grid grid-cols-10 gap-2'>
                        <div className='col-span-6'><img src={data?.hotelImage[0]} alt="" /></div>
                        <div className='col-span-2'>
                            <div className='grid grid-rows-3 gap-2'>
                                <div className='row-span-1'><img src={data?.hotelImage[1]} alt="" /></div>
                                <div className='row-span-1'><img src={data?.hotelImage[2]} alt="" /></div>
                                <div className='row-span-1'><img src={data?.hotelImage[3]} alt="" /></div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='grid grid-rows-3 gap-2'>
                                <div className='row-span-1'><img src={data?.hotelImage[4]} alt="" /></div>
                                <div className='row-span-1'><img src={data?.hotelImage[5]} alt="" /></div>
                                <div className='row-span-1'><img src={data?.hotelImage[6]} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['content-bg-gray']} ${styles['content-block']} w-full`}>
                    <div className={styles['block-title']}>Giới thiệu nơi cư trú</div>
                    <div >{data?.description}</div>
                </div>
                <div className={`w-full`}>
                    <div className='grid grid-cols-12 gap-2'>
                        <div className={`col-span-4 ${styles['content-bg-gray']} ${styles['content-block']}`}>
                            <div className={styles['block-title']}>Tiện ích</div>
                            <div className='flex flex-wrap w-full'>
                                {Array.from({ length: data?.hotelAmenities.length || 0 }).map((_, index) => (
                                    <div key={index} className='w-1/2'>
                                        {data?.hotelAmenities[index]}
                                    </div>))}

                            </div>
                        </div>
                        <div className={`col-span-8 ${styles['content-bg-gray']} ${styles['content-block']}`}>
                            <div className={styles['block-title']}>Khách nói gì về kì nghỉ của họ</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['content-bg-gray']} ${styles['content-block']} w-full`}>
                    {data?.roomsList.map((room, index) => (
                        <>
                            <Room key={index} room={room} />
                        </>

                    ))}
                </div>
            </div>
        </div>
    );
}
export default HotelContainer;
