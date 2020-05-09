import React, { useState } from 'react'
import { Link } from '@reach/router'

export default function SideNav() {
    const [navItems] = useState([
        {
            name: "Home",
            path: "/dashboard/",
            image: "home.svg"
        },
        {
            path: "/dashboard/cards",
            image: "card.svg",
            name: "Cards"
        },
        {
            name: "Transactions",
            image: "transaction.svg",
            path: "/dashboard/transactions"
        },
        {
            name: "Settings",
            image: "setting.svg",
            path: "/dashboard/settings"
        },
        {
            name: "Log out",
            image: "logout.svg",
            path: "/dashboard/logout"
        }
    ])


    const nav = () => {
        return navItems.map((e, i) => {
            return (
                <div key={i} >
                    <Link to={e.path}>
                        <div className="mb-4 py-3 px-5 rounded-lg">
                            <img src={'/images/' + e.image} alt="home" className="inline mr-3" /> {e.name}
                        </div>

                    </Link>
                </div>
            )
        })
    }
    return (
        <div className="w-1/6">
            {nav()}
        </div>
    )
}
