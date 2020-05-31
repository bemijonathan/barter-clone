import React, {useState} from 'react';
import { Link } from '@reach/router'
import SideNav from './SideNav';
import {AirtimeContext} from '../context/airtimeContext'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const hideBar = (e) => {
    if(e.target.classList.contains('bg-opacity-25')){
      setShow(false)
    }
  }
  const LinkhideBar = (e) => {
    if(e.target.classList.contains('rounded-lg')){
      setShow(false)
    }
  }
  return (
    <>
    <div className="bg-blue-500 py-3 px-5 block left-0 md:hidden flex fixed w-full items-center justify-between w-full top-0"> 
    <button onClick={() => setShow(true)} className="text-white border font-bold p-2 rounded"> Menu </button>
    <Link to="/" className=" text-white font-bold ">Pi-coin</Link>
    </div>
    <div className="md:hidden mt-20"></div>

    <nav className=" bg-blue-500 p-4 shadow-lg hidden fixed top-0 w-2/3 fixed md:block md:w-full h-screen md:h-auto ">
        <div className=" md:flex items-center container m-auto md:justify-between md:flex-wrap">
          <div className="">
            <Link to="/" className="text-3xl text-white">
              Pi-coin
            </Link>
          </div>
          <div className="lg:">

          </div>
          <div className="md:block hidden">
            <img src="/images/bell.svg" alt="notification" className="inline" />
            <Link to="#" className="px-4 py-2 leading-none text-white font-bold ">Jonathan</Link>
          </div>
        </div>
      </nav>

    <div className={`h-screen rotate-in-2-bl-cw md:h-auto w-full bg-blue-500 bg-opacity-25 fixed top-0 left-0 ${ show? '':'hidden'}`} onClick={(e) => hideBar(e)}>
      <nav className=" bg-white p-6 shadow-lg fixed top-0 w-2/3 fixed md:block md:w-full h-screen md:h-auto ">
        <div className=" md:flex items-center container m-auto md:justify-between md:flex-wrap">
          <div className="">
            <Link to="/" className="text-3xl text-blue-400">
              Pi-coin
            </Link>
          </div>
          <div className="lg:">
          </div>
          <div className="md:block hidden">
            <img src="/images/bell.svg" alt="notification" className="inline" />
            <Link to="#" className="px-4 py-2 leading-none text-white fort-bold ">Jonathan</Link>
          </div>
        </div>
        <div  className="md:hidden block mt-5" onClick={(e) => LinkhideBar(e)}>
        <AirtimeContext.Consumer>
          {(Airtime) => <SideNav props={Airtime}></SideNav>}
        </AirtimeContext.Consumer>
        </div>
      </nav>
      </div>
    </>
  );
}
