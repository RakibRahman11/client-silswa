import { Container, Typography } from '@mui/material';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from 'swiper';
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const newsPartners = [
    {
        img: 'https://i.ibb.co/7rB4ppV/daily-bd.png'
    },
    {
        img: 'https://i.ibb.co/g6zKDgQ/daily-observer.png'
    },
    {
        img: 'https://i.ibb.co/ZGKK5CF/jugantor.png'
    },
    {
        img: 'https://i.ibb.co/2qNRVxv/khola-kagoj.png'
    },
    {
        img: 'https://i.ibb.co/8KhptKM/rising-bd.png'
    },
    {
        img: 'https://i.ibb.co/y44HLgN/shomokal.png'
    },
    {
        img: 'https://i.ibb.co/8KhptKM/rising-bd.png'
    },
    {
        img: 'https://i.ibb.co/g6zKDgQ/daily-observer.png'
    },
    {
        img: 'https://i.ibb.co/7rB4ppV/daily-bd.png'
    }
]

const Partners = () => {
    return (
        <Container sx={{ margin: '120px auto' }}>
            <Typography sx={{ margin: '40px auto', textAlign: 'center', fontWeight: 700, color: '#3768AF' }} variant="h3" >
                Our Partners
            </Typography>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    scale: 1,
                }}
                pagination={false}
                Autoplay
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    newsPartners.map(newsPartner => <SwiperSlide >
                        <img src={newsPartner?.img} style={{ width: '100%', margin: 'auto 20%' }} alt='' />
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    );
};

export default Partners;