import React, { useState } from 'react'

export default function Airtime({ props }) {
    const [airtime, airtimeDetails] = useState({
        amount: "",
        phoneNumber: ""
    })
    const [loading, setLoading] = useState(false)

    const Submit = (e) => {
        e.preventDefault()

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            props(false)
        }, 1000);
    }

    const close = (e) => {


        let classes = e.target.classList
        console.log(classes)
        debugger
        if (classes.contains("airtime")) {
            console.log(props(false))
        }
    }
    return (
        <div className="airtime fixed z-10 top-0 right-0 h-screen w-full bg-blue-600 bg-opacity-25 flex items-center justify-center" onClick={(e) => close(e)}>
            <div className="tilt-in-fwd-tr p-3 w-full md:w-1/5 shadow-lg bg-white">
                <form onSubmit={e => Submit(e)}>
                    <div>
                        <label htmlFor="price">Amount</label>
                        <input className="p-3 my-3 bg-blue-500 rounded w-full" type="number" onChange={(e) => airtimeDetails({ ...airtime, amount: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber"> Phone Number </label>
                        <input className="p-3 my-3 bg-blue-500 rounded w-full" type="number" onChange={(e) => airtimeDetails({ ...airtime, phoneNumber: e.target.value })} />
                    </div>
                    <button className={"w-full p-3 my-3 bg-blue-500 rounded text-white"} disabled={loading} type="submit">
                        {loading ? "loading..." : "Buy Now"}
                    </button>
                </form>

            </div>
        </div>
    )
}
