import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { AirtimeContext } from '../context/airtimeContext'


export default function Dashboard(props) {
    return (
        <div>
            <Navbar />
            <section className="container flex m-auto my-5 py-5 md:my-20 md:py-20">
                <AirtimeContext.Consumer >
                    {(Airtime) => <div  className="hidden md:block md:w-1/6 " > <SideNav props={Airtime}></SideNav> </div>} 
                </AirtimeContext.Consumer>
                <div className="flex-1">
                    {props.children}
                </div>
            </section>
        </div>
    )
}
