import React from 'react'
import { gallery } from '../../data'

const Gallerypix = () => {
  return (
    <section>

        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
              {
                  gallery.map(({ id, pic }) => {
                      return (
                          <div key={id} className='hover:opacity-50 transition ease-in-out duration-3000'>
                              <img src={pic} alt="" />
                          </div>
                      )
                  })
              }
        </div>
    </section>
  )
}

export default Gallerypix