import React from 'react'
import Testimonialswiper from './Testimonialswiper'

const Testimonials = () => {
  return (
    <section>
            <div className="lg:w-[82%] w-[85%] m-auto py-20">
                <div className="mb-16">
                  <h2 className="text-center text-5xl mb-4">What People Say</h2>
                  <hr className="w-[9%] mx-auto border-1 border-black" />
                </div>
                <Testimonialswiper/>
            </div>    
    </section>
  )
}

export default Testimonials