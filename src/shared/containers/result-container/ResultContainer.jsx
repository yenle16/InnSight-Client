import React from 'react'
import styles from './ResultContainer.module.scss'
import Header from '../../components/header/Header'
import ResultList from '../../components/result-list/ResultList'
import SearchBox from '../../components/search-box/SearchBox'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'
import './Pagination.scss'
const tmpData = {
    totalItems: 30,
    location: 'Đà Nẵng',
    data: [
        {
            hotelId: 1,
            hotelName: 'Hotel Dao Tien',
            type: "Khách sạn",
            address: "Da nang",
            hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            services: [
                "Service 1",
                "Service 2",
                "Service 3"
            ],
            rate: 9,
            reviews: 123,
            priceByNight: 500000,
        },
        {
            hotelId: 2,
            hotelName: 'Hotel Dao Tien',
            type: "Khách sạn",
            address: "Da nang",
            hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            services: [
                "Service 1",
                "Service 2",
                "Service 3"
            ],
            rate: 9,
            reviews: 123,
            priceByNight: 500000,
        },
        {
            hotelId: 2,
            hotelName: 'Hotel Dao Tien',
            type: "Khách sạn",
            address: "Da nang",
            hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            services: [
                "Service 1",
                "Service 2",
                "Service 3"
            ],
            rate: 9,
            reviews: 123,
            priceByNight: 500000,
        },
        {
            hotelId: 3,
            hotelName: 'Hotel Dao Tien',
            type: "Khách sạn",
            address: "Da nang",
            hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            services: [
                "Service 1",
                "Service 2",
                "Service 3"
            ],
            rate: 9,
            reviews: 123,
            priceByNight: 500000,
        },
        {
            hotelId: 4,
            hotelName: 'Hotel Dao Tien',
            type: "Khách sạn",
            address: "Da nang",
            hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            services: [
                "Service 1",
                "Service 2",
                "Service 3"
            ],
            rate: 9,
            reviews: 123,
            priceByNight: 500000,
        }
    ]
}

const ResultContainer = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div>
            <Header />
            <div className={`mx-auto grid grid-cols-12 gap-4 p-1 ${styles['container-content']}`}>
                <div className={`col-span-12 rounded-lg borderp-32 sm:col-span-4 ${styles['container-item']}`}>
                    <SearchBox />
                </div>
                <div className={`col-span-12 rounded-lg borderp-32 sm:col-span-8 ${styles['container-item']}`}>
                    <ResultList result={tmpData} />
                </div>
                <div className={`col-span-12 rounded-lg borderp-32 ${styles['container-item']}`}>
                    <div className='flex flex-row-reverse'>
                        <Stack spacing={2}>
                            <Pagination
                                count={10}
                                defaultPage={1}
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                            />
                        </Stack>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ResultContainer
