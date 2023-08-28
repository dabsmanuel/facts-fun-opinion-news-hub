import React from 'react'
import img1 from "../../assets/cover.jpg"
import Room from '../../component/room/Room'

const Index = () => {
  return (
    <section className='home bg-fixed'>
      <div>
        <img src={img1} alt="image1" className="w-full h-screen object-fill bg-black bg-opacity-75 brightness-50" />
        <div className="flex flex-col justify-center items-center w-full h-screen text-center absolute bottom-0 text-white">
          <small className=' uppercase tracking-widest'>Luxurious rooms</small>
          <h1 className='text-7xl pt-8 font-bold'>Hotel Rooms</h1>
        </div>
      </div>
      <Room/>

    </section>
  )
}

export default Index