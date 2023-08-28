import React from 'react'
import img1 from "../../assets/cover.jpg"
import Blogswiper from '../../component/blog/Blogswiper'


const Events = () => {
  return (
    <section className='mb-20'>
          <div className='mb-20'>
              <img src={img1} alt="image1" className="w-full h-screen object-fill bg-black bg-opacity-75 brightness-50" />
              <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
                  <small className=' uppercase tracking-widest'>Read our</small>
                  <h1 className='text-7xl pt-8 font-bold'>Blogs & Events</h1>
              </div>
          </div>
          <Blogswiper/>
    </section>
  )
}

export default Events