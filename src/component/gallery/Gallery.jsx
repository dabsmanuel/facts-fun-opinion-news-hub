import React from 'react'
import Gallerypix from './Gallerypix'

const Gallery = () => {
  return (
    <section>
        <div className="lg:w-[82%] w-[85%] m-auto py-20">
            <div className="mb-16">
              <h2 className="text-center text-5xl mb-2">Our Gallery</h2>
              <hr className="w-[9%] mx-auto border-1 border-black" />
            </div>
            <div>
                <Gallerypix/>
            </div>
        </div>
    </section>
  )
}

export default Gallery