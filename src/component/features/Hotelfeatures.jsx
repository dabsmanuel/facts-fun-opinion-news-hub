import React from 'react'
import Features from './Features'

const Hotelfeatures = () => {
  return (
      <section className="lg:w-[82%] w-[85%] m-auto pb-20">
          <div className="mb-16">
              <h2 className="text-center text-5xl mb-2">Hotel Features</h2>
              <hr className="w-[9%] mx-auto border-1 border-black" />
          </div>
          <div>
            <Features/>
          </div>
      </section>
  )
}

export default Hotelfeatures