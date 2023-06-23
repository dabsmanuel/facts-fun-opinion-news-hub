import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-11/12 mx-auto mb-[5rem]">
      <div className="mt-12 ">
        <Link to="/" className="font-black text-slate-900 text-2xl">
          Back
        </Link>
      </div>
      <div className="flex w-5/6 justify-center items-center mx-auto flex-col mt-20">
        <h1 className="lg:text-4xl text-3xl font-bold pb-8 text-slate-900 pacific">
          Welcome to Facts, Opinions & News Hub!
        </h1>
        <div className='lg:text-2xl'>
          <p className="lg:text-center text-gray-800 pb-3">
            At Facts, Opinions & News Hub, we bring together a diverse range of
            perspectives to explore the world through facts, opinions, and
            up-to-date news. Our blog site serves as a platform for meaningful
            discussions and a deeper understanding of various topics.
          </p>
          <p className="lg:text-center text-gray-800 pb-3">
            We believe that facts alone don't always provide the complete
            picture. By incorporating personal opinions alongside accurate
            information, we aim to encourage critical thinking and respectful
            dialogue. Our curated content covers a wide array of subjects,
            including current events, politics, science, technology, culture,
            and more.
          </p>
          <p className="lg:text-center text-gray-800 pb-3">
            Thank you for visiting Facts, Opinions & News Hub. Let's embark on
            an enlightening journey together!
          </p>
          <p className="text-center text-gray-800 pacific underline">
            ~ The Facts, Opinions & News Hub Team ~
          </p>
        </div>
      </div>
    </section>
  );
}

export default About