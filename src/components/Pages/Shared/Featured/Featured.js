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

const features = [
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
    }
]

const Featured = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ width: '350px', marginX: 'auto', color: 'white', backgroundColor: '#085078', borderRadius: '35px', textAlign: 'center', marginBottom: 5 }}>
                Featured in
            </Typography>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                modules={[Autoplay]}
                spaceBetween={40}
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
                    features.map(feature => <SwiperSlide>
                        <img src={feature?.img} style={{ width: '50%' }} alt='wed' />
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    );
};

export default Featured;