import React from 'react'
import "./Countdown.css"


const Count = () => {
  return (
    <section>
        <p className='letter text-sm'>THE PROMO WILL START IN</p>
        <div className='flex space-x-2'>
            <p className='text-4xl'>00 <span className='text-gray-400 font-bold text-xl'>weeks</span></p>
            <p className='text-4xl'>00 <span className='text-gray-400 font-bold text-xl'>days</span></p>
            <p className='text-4xl'>00 <span className='text-gray-400 font-bold text-xl'>hr</span></p>
            <p className='text-4xl'>00 <span className='text-gray-400 font-bold text-xl'>min</span></p>
            <p className='text-4xl'>00 <span className='text-gray-400 font-bold text-xl'>sec</span></p>
        </div>  
    </section>
  )
}

export default Count