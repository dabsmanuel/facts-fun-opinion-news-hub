import React from 'react'
import UseFetch from '../../hooks/UseFetch'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const {loading, error, data } = UseFetch(`http://localhost:1337/api/blog-posts/${id}?populate=*`)


    if (loading) return <p>Loading....</p>
    if (error) return <p>Error!!!!! :(</p>

    console.log(data)


  return (
    <>
      <div className="lg:w-4/5 m-auto py-12 ">
        <h2 className="text-slate-900 text-3xl font-semibold text-center pb-4 pacific">
          {data.attributes.title}
        </h2>
        <div className="w-4/5 m-auto">
          <div>
            <img
              src={`http://localhost:1337${data.attributes.media.data[0].attributes.url}`}
              alt="church"
              className='h-[50vh] m-auto w-full object-cover'
            />
          </div>
          <div className='pt-4 lg:text-2xl text-xl'>
            <p>{data.attributes.content}</p>
            <small className="text-gray-700">
              Published: {data.attributes.date}
            </small>
            <Link
              to="/"
              className="text-slate-700 semibold py-2 hover:text-slate-900 font-bold text-xl flex">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details