import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/cover.jpg"
import img2 from "../../assets/cover2.jpg"
import img3 from "../../assets/img_1.jpg"


const Blogswiper = () => {
  return (
    <section>
          <Swiper className='lg:w-[82%] w-[85%] m-auto'
              modules={[ Pagination, Autoplay]}
              pagination={true}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000 }}
              // pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >

              <SwiperSlide className='grid place-items-center'>
                  <img src={img1} alt="image1" className="object-fill" />
                  <div className="flex flex-col justify-center    ">
                      <h1 className='font-bold'>Lorem ipsum dolor sit amet</h1>
                      <p className='text-gray-400 pb-3'>Aug 22nd, 2023. By <span className='text-red-500'>Admin</span></p>
                      <p className='text- mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque maiores perspiciatis molestias, vero amet fugiat</p>
                  </div>

              </SwiperSlide>

              <SwiperSlide>
                  <img src={img2} alt="image1" className=" bg-fixed object-fill bg-black brightness-50 bg-opacity-75" />
                  <div className="flex flex-col justify-center">
                      <h1 className='font-bold'>Lorem ipsum dolor sit amet</h1>
                      <p className='text-gray-400 pb-3'>Aug 22nd, 2023. By <span className='text-red-500'>Admin</span></p>
                      <p className='text mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque maiores perspiciatis molestias, vero amet fugiat</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <img src={img3} alt="image1" className="object-fill" />
                  <div className="flex flex-col justify-center">
                      <h1 className='font-bold'>Lorem ipsum dolor sit amet</h1>
                      <p className='text-gray-400 pb-3'>Aug 22nd, 2023. By <span className='text-red-500'>Admin</span></p>
                      <p className='text mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque maiores perspiciatis molestias, vero amet fugiat</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <img src={img2} alt="image1" className=" bg-fixed object-fill bg-black brightness-50 bg-opacity-75" />
                  <div className="flex flex-col justify-center">
                      <h1 className='font-bold'>Lorem ipsum dolor sit amet</h1>
                      <p className='text-gray-400 pb-3'>Aug 22nd, 2023. By <span className='text-red-500'>Admin</span></p>
                      <p className='text mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque maiores perspiciatis molestias, vero amet fugiat</p>
                  </div>
              </SwiperSlide>
          </Swiper>
    </section>
  )
}

export default Blogswiper