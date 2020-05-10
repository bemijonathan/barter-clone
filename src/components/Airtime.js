import React from 'react'

export default function Airtime() {
    return (
        <div className="airtime fixed z-10 top-0 right-0 h-screen w-full bg-blue-600 bg-opacity-25 flex items-center justify-center">
            <div className="tilt-in-fwd-tr p-3 w-1/3 shadow-lg bg-white">
                <imput className="p-3 mb-5" type="number" />
                <input className="p-3 mb-5" type="number" />
            </div>
        </div>
    )
}
