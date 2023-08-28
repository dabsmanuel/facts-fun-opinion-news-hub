import React from 'react'
import { features } from '../../data'

const Features = () => {
  return (
    <section>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 w-[75%] m-auto place-items-center'>
        {
          features.map(({ id, icon, descr }) => {
            return (
              <div className='text-center' key={id}>
                <p className='text-red-500 text-7xl'>{icon}</p>
                <p className='text-xl'>{descr}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Features