import React from 'react'

const Form = () => {
  return (
    <div className="bg-slate-700 px-10 py-[1.73rem] lg:w-[30vw]">
      <h1 className="text-white text-2xl">Write us</h1>

      <form action="" className=" flex flex-col text-gray-400">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-100 bg-transparent outline-none py-3 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b border-gray-100 bg-transparent outline-none py-3 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="border-b border-gray-100 bg-transparent outline-none py-3 placeholder-gray-400"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="border-b border-gray-100 bg-transparent placeholder-gray-400 outline-none py-2 resize-none w-full"></textarea>
      </form>
      <button
        type="submiit"
        className="bg-slate-900 hover:bg-slate-800 text-gray-300 py-2 px-4 rounded my-3">
        Send Message
      </button>
    </div>
  );
}

export default Form