import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import img1 from "../../assets/cover.jpg"
import img2 from "../../assets/cover2.jpg"
import img3 from "../../assets/img_1.jpg"

const LandingPage = () => {

    return (
        <div className="relative">
            <Swiper className='h-full'
                modules={[EffectFade, Autoplay, Navigation]} 
                effect="fade"
                autoplay={{ delay: 3000 }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide>
                    <img src={img1} alt="image1" className=" bg-fixed w-full h-screen object-fill bg-black bg-opacity-75 brightness-50" />
                    <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
                        <h1 className='text-7xl font-bold'>Welcome To Suites</h1>
                        <p className='uppercase pt-4 tracking-widest text-sm'>Hotel and Suites</p>
                    </div>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} alt="image1" className=" bg-fixed w-full h-screen object-fill bg-black brightness-50 bg-opacity-75" />
                    <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
                        <h1 className='text-7xl font-bold'>Unique Experience</h1>
                        <p className='uppercase pt-4 tracking-widest text-sm'>Enjoy with us</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} alt="image1" className="bg-fixed w-full h-screen object-fill brightness-50 bg-black bg-opacity-75" />
                    <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
                        <h1 className='text-7xl font-bold'>Relaxing Room</h1>
                        <p className='uppercase pt-4 tracking-widest text-sm'>your room, your stay</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default LandingPage;
