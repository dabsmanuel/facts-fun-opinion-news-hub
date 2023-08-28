import React from 'react'

const Form = () => {
  return (
    <section>
        <form className='text-gray-500 text-xl'>
            <div>
                <label htmlFor="fullname" className='font-bold mb-2'>Full Name</label>
                <input type="text" placeholder='Full Name' className='rounded border py-3 w-full px-2' />
            </div>
                <br />
            <div>
                <label htmlFor="fullname" className='font-bold pb-2 '>Email</label>
                <input type="text" placeholder='Email Address' className='rounded border py-3 w-full px-2' />
            </div>
                <br />
              <div>
                  <label htmlFor="fullname" className='font-bold pb-2'>Phone</label>
                  <input type="text" placeholder='Phone #' className='rounded border py-3 w-full px-2' />
              </div>
                    <br />
              <div>
                  <label htmlFor="fullname" className='font-bold pb-2 mb-2'>Message</label>
                  <textarea  placeholder='say hello to us' className='rounded border py-3 w-full px-2' ></textarea>
              </div>
              <button type="submit" className='text-white bg-red-600 rounded-full py-2 px-6 my-4'>Send message</button>
        </form>
    </section>
  )
}

export default Form