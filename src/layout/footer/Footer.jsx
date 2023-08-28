import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'



const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])

    const location = useLocation();

  if (location.pathname === '/signup' || location.pathname === '/login') {
    return null; // don't render navbar on sign-up or login page
  }

  return (
    <section className="bg-[#444] py-6 text-white">
      <div className="text-center pt-8 pb-6 text-xl">
        <p>
          &copy; Suites Hotel all rights reserved Copyrights{" "}
          {date}
        </p>
      </div>
    </section>
  );
}

export default Footer