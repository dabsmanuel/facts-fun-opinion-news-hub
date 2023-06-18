import React from 'react'
import NavBar from '../layout/navbar/Navbar';
import { contact } from '../data';
import Form from '../component/Form';


const Contact = () => {
  return (
    <>
      <NavBar />

      <section className="my-16">
        <dv className="lg:flex flex-wrap justify-center items-center w-4/5 m-auto">
          <Form/>
          <div className="bg-slate-900 p-10 lg:w-[30vw] lg:h-[80vh]">
            <h1 className="text-white text-2xl">Contact information</h1>
            <p className="text-gray-600 text-xl">
              We are open for any suggestions or just to have a chat
            </p>
            <div className='my-6'>
              {contact.map(({ id, icon, title, description }) => {
                return (
                  <div key={id} className="pb-8">
                    <div className="flex space-x-4 text-gray-300">
                      {icon}
                      <p className="text-gray-600">
                        <span className="text-white px-4">{title}: </span>
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </dv>
      </section>
    </>
  );
}

export default Contact