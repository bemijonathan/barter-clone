import React, { useState } from 'react'
import { Link } from '@reach/router'
import Airtime from './Airtime'


export default function SideNav({ props }) {
    const [navItems] = useState([
        {
            name: "Home",
            path: "/dashboard/",
            image: "home.svg"
        },
        {
            path: "/dashboard/cards",
            image: "card.svg",
            name: "wallet"
        },
        {
            name: "Transactions",
            image: "transaction.svg",
            path: "/dashboard/transactions"
        },
        {
            path: "/dashboard/airtime",
            image: "card.svg",
            name: "Airtime"
        },
        {
            name: "Settings",
            image: "setting.svg",
            path: "/dashboard/settings"
        },
        {
            name: "Log out",
            image: "logout.svg",
            path: "/"
        }
    ])
    console.log(props)


    const NavLink = props => (
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                return {
                    className: isCurrent ? "activeNav" : ""

                };
            }}
        />
    );



    const nav = () => {
        return navItems.map((e, i) => {
            return (
                <div key={i}>
                    {i === 3 ?
                        <div className="mb-4 py-3 px-5 rounded-lg cursor-pointer" onClick={() => props.hide(true)}>
                            <img src={'/images/' + e.image} alt="home" className="inline mr-3" /> {e.name}
                        </div>

                        : <NavLink to={e.path}>
                            <div className="mb-4 py-3 px-5 rounded-lg">
                                <img src={'/images/' + e.image} alt="home" className="inline mr-3" /> {e.name}
                            </div>
                        </NavLink>}
                </div>
            )
        })
    }
    return (
        <div className="w-1/6 position relative">
            {props.show ? <Airtime props={props.hide} /> : ""}
            <div className="fixed">
                {nav()}
            </div>
        </div>
    )
}
