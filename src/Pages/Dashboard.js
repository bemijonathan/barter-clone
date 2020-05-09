import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'


export default function Dashboard(props) {
    return (
        <div>
            <Navbar />
            <section className="container flex m-auto mt-20">
                <SideNav />
                <div className="flex-1">
                    {props.children}
                </div>
            </section>
        </div>
    )
}
