import React, { useEffect, useState } from 'react';
import { IoMenuSharp, IoClose } from 'react-icons/io5';

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-md w-full fixed top-0 left-0 z-10">
      <div className=" md:flex items-center justify-between bg-white py-6 md:py-4 md:px-10 px-7 font-burtons">
        <div className=" font-bold text-2xl cursor-pointer flex items-center  text-gray-800">
          Mark Beaner
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <IoMenuSharp />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {pages.map((Page) => (
            <li
              className={` md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500 cursor-pointer md:my-0 my-7 ${
                currentPage.name === Page.name && 'active'
              }`}
              key={Page.name}
            >
              <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
            </li>
          ))}
          <button className=" bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

{
  /* <nav
      className="bg-indigo-600 navebar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger">Mark Beaner</a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {pages.map((Page) => (
              <li
                className={`nav-item nav-link js-scroll-trigger ${
                  currentPage.name === Page.name && 'active'
                }`}
                key={Page.name}
              >
                <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav> */
}
