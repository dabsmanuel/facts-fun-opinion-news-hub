import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  if (location.pathname === "/details/id" || location.pathname === "/about") {
    return null; // don't render navbar on sign-up or login page
  }

  return (
    <nav className="m-auto bg-white shadow sticky top-0">
      <div className="justify-center mx-auto lg:max-w-7xl md:items-center md:flex h-[10vh]">
        <div>
          <div className="flex items-center justify-center py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-slate-900"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
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
            className={`flex justify-self-center pb-3 md:flex md:pb-0 md:mt-0 px-8 bg-white ${
              navbar ? "block" : "hidden"
            }`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-slate-900 font-semibold">
              <li>
                <NavLink exact to="/" activeClassName="font-bold">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName="font-bold">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" activeClassName="font-bold">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
