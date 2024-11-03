import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#EBEBEB] dark:border-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  text-customRed oswald-bold">LEVEL_X</span>
        </div>
        
        <button
          onClick={handleNavbarToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" aria-hidden="true">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#EBEBEB] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#EBEBEB]">
            <li>
              <button
                onClick={() => navigate('/')}
                className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 dark:text-black"
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={handleDropdownToggle}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black"
              >
                Dropdown
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <button onClick={() => navigate('/dashboard')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Dashboard
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate('/settings')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black">
                        Settings
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigate('/earnings')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#EBEBEB] dark:hover:text-black">
                        Earnings
                      </button>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button onClick={() => navigate('/sign-out')} className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li>
              <button onClick={() => navigate('/services')} className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/pricing')} className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/contact')} className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
