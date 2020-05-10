import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { AirtimeContext } from '../context/airtimeContext'


export default function Dashboard(props) {
    return (
        <div>
            <Navbar />
            <section className="container flex m-auto my-20 py-20">
                <AirtimeContext.Consumer>
                    {(Airtime) => <SideNav props={Airtime}></SideNav>}
                </AirtimeContext.Consumer>
                <div className="flex-1">
                    {props.children}
                </div>
            </section>
        </div>
    )
}
