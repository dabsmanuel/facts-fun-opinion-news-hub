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
    <section className="bg-slate-900 text-white py-6">
      <div className="text-center pt-8 pb-6 text-white text-xl">
        <p>
          &copy; Facts, Opinions & News Hub all rights reserved Copyrights{" "}
          {date}
        </p>
      </div>
    </section>
  );
}

export default Footer