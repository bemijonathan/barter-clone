import React from 'react'

export default function Airtime() {
    return (
        <div className="airtime fixed z-10 top-0 right-0 h-screen w-full bg-blue-600 bg-opacity-25 flex items-center justify-center">
            <div className="tilt-in-fwd-tr p-5 w-2/5 shadow-lg bg-white">
                <div>
                    <input className="p-3 mb-5 bg-blue-500 w-full" type="number" />
                </div>
                <div>
                    <input className="p-3 mb-5 bg-blue-500 w-full" type="number" />
                </div>

            </div>
        </div>
    )
}
