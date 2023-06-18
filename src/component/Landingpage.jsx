import React from 'react'
import NavBar from '../layout/navbar/Navbar';
import "./home.css"

const Landingpage = () => {
  
  return (
    <>
      <NavBar/>
      <section className="landingpage bg-slate-400 border-b border-gray-1 pb-16">
        <div className="flex w-5/6 justify-center items-center mx-auto h-[85vh]">
          <div className="px-3">
            <h1 className="pacific text-4xl lg:text-7xl text-slate-100 font-bold pb-6 text-center">
              Facts, Opinions & News Hub
            </h1>
            <div className="text-center text-slate-100 text-xl w-96 m-auto pt-8">
              <p className="pb-6 text text-3xl">
                Where Facts, Opinions, and News Collide: Exploring Perspectives
                in One Hub
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage