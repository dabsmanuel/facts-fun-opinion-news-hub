import React from 'react'
import Count from "./Count"
import "./Countdown.css"

const Countdown = () => {
  return (
    <section className='count text-white my-20'>
      <div className='lg:grid grid-cols-2 gap-16 w-[82%] m-auto py-16'>
        <div className=''>
          <p className='text-3xl mb-4'>Summer Promo 50% off</p>
          <button type="button" className='uppercase  outline-none border border-yellow-400 py-2 px-4 mb-2'>Avail Now</button>
        </div>
        <Count />
      </div>
      
      
    </section>
  )
}

export default Countdown