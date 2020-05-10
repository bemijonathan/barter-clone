import React from 'react';
import { Link } from '@reach/router'
export default function Navbar() {
  return (
    <>
      <nav className=" bg-blue-500 p-6 shadow-lg fixed top-0 w-full">
        <div className=" flex items-center container m-auto justify-between flex-wrap">
          <div className="">
            <Link to="/" className="text-3xl text-white">
              Bater
            </Link>
          </div>
          <div className="lg:">

          </div>
          <div>
            <img src="/images/bell.svg" alt="notification" className="inline" />
            <Link to="#" className="px-4 py-2 leading-none text-white fort-bold ">Jonathan</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
