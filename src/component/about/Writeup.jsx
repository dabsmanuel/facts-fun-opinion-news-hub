import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai"

const Writeup = () => {
  return (
    <section className='pt-8'>
      <h2 className="text-4xl mb-2">About Us</h2>
      <hr className="w-[20%]  border-1 border-black mb-4" />
      <p className='text-gray-500 pb-6'>It is very important for the customer to pay attention to the adipiscing process. And, if the customer is not the customer himself, it will be followed by a discount. He hates us big and wants him, that thing will happen pain we can pleasure..</p>
      <div className='text-red-500 uppercase flex items-center space-x-2'>
        <Link to="#" >
          Watch video here
        </Link>
        <AiOutlineArrowRight />
      </div> 
    </section>
  )
}

export default Writeup