import React from 'react'
import Navbar from '../components/Navbar'

export default function Dashboard(props) {
    return (
        <div>
            <Navbar />

            {props.children}
        </div>
    )
}
