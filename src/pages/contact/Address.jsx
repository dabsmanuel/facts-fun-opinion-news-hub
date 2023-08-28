import React from 'react'

const Address = () => {
  return (
    <>
      <div className='px-16'> 
            <p className='pb-4 text-2xl'>Contact Info</p>
            <div className=' text-gray-500 pb-4 text-xl'>
                <p className='font-bold pb-2'>Address</p>
                <p className='text-gray-500 '>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>

        <div className='pb-4 text-xl'>
                  <p className='font-bold pb-2 text-gray-500'>Phone</p>
                  <p className='text-red-500'>+1 232 3235 324</p>
            </div>

        <div className='text-xl'>
                  <p className='font-bold pb-2 text-gray-500 '>Email Address</p>
                  <p className='text-red-500'>youremail@domain.com</p>
              </div>
        </div>
    </>
  )
}

export default Address