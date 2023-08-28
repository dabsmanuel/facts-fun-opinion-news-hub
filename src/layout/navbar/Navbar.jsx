import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.css"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

      const handleClick = () => setNavbar(!navbar);

    //   to change color
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <nav className="w-full lg:bg-transparent fixed top-0 z-10 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <h2 className='logo text-2xl text-white'>Suites</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-red-500 rounded-md outline-none focus:border-gray-900 "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-between space-y-8 md:flex md:space-x-1 md:space-y-0 uppercase">
                                <li className="text-gray-300">
                                    <Link to="/" onClick={handleClick} className={`px-4 py-2 text-sm ease-in-out duration-300 hover:text-white ${location.pathname === '/' ? 'text-red-500' : ''}`}>Home</Link>
                            </li>
                                <li className="text-gray-300">
                                    <Link to="/rooms" onClick={handleClick} className={`px-4 py-2 text-sm ease-in-out duration-300 hover:text-white ${location.pathname === '/rooms' ? 'text-red-500' : ''}`}>Room</Link>
                            </li>
                          
                                <li className="text-gray-300">
                                    <Link to="/events" onClick={handleClick} className={`px-4 py-2 text-sm ease-in-out duration-300 hover:text-white ${location.pathname === '/events' ? 'text-red-500' : ''}`}>Events</Link>
                            </li>
                                <li className="text-gray-300">
                                    <Link to="/about" onClick={handleClick} className={`px-4 py-2 text-sm ease-in-out duration-300 hover:text-white ${location.pathname === '/about' ? 'text-red-500' : ''}`}>About</Link>
                            </li>
                                <li className="text-gray-300">
                                    <Link to="/contact" onClick={handleClick} className={`px-4 py-2 text-sm ease-in-out duration-300 hover:text-white ${location.pathname === '/contact' ? 'text-red-500' : ''}`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
        
    );
}
