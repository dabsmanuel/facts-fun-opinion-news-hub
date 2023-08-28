import React from 'react'
import img1 from "../../assets/cover.jpg"
import Abouts from '../../component/about/Abouts';
import Staff from './Staff';
import "../../component/countdown/Countdown.css"
import Countdown from '../../component/countdown/Countdown';
import Hotelfeatures from '../../component/features/Hotelfeatures';
import Gallery from '../../component/gallery/Gallery';


const About = () => {
  return (
    <section>
      <div className='mb-20'>
        <img src={img1} alt="image1" className="w-full h-screen object-fill bg-black bg-opacity-75 brightness-50" />
        <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
          <small className=' uppercase tracking-widest'>suite hotel & resort</small>
          <h1 className='text-7xl pt-8 font-bold'>About Us</h1>
        </div>
      </div>
      <Abouts/>
      <Staff/>
      <Countdown/>
      <Hotelfeatures/>
      <Gallery/>
    </section>
  );  
}

export default About