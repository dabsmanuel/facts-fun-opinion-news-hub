import React from 'react'
import { staff } from '../../data'
import { Link } from 'react-router-dom'

const Staff = () => {
    return (
        <section className="mb-12 bg-[#f8f9fa]">
            <div className='lg:w-[82%] w-[85%] m-auto'>
                <div className=" py-16">
                    <div className="mb-16">
                        <h2 className="text-center text-5xl mb-2">Our Staffs</h2>
                        <hr className="w-[9%] mx-auto border-1 border-black" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {
                        staff.map(({ id, details, icon, title, pics, link }) => {
                            return (
                                <div key={id}>
                                    <img src={pics} alt="people" />
                                    <div className='text-center p-6'>
                                        <p className='text-2xl'>{title}</p>
                                        <p className='text-gray-500 text-xl'>{details}</p>
                                        <div className='flex space-x-2 items-center text-red-500 text-xl justify-center'>
                                            <Link>{link}</Link>
                                            <p>{icon}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </section>
  )
}

export default Staff