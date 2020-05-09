import React from 'react'

export default function DashboardHome() {
    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="font-bold text-3xl"> Home</h1>
                    <p> Welcome back, Jonathan. </p>
                </div>
                <button className="bg-blue-300 px-4 py-2 text-xs font-bold rounded-lg text-white">
                    Fund Barter Balance
                </button>
            </div>
            <section className="flex mt-10">
                <div className="w-1/3">
                    <div className="shadow-lg rounded-lg px-5 py-2">
                        <p className="m-3"> YOUR BARTER BALANCE</p>
                        <p className="m-3 text-3xl"> ₦300.00 </p>
                        <p className="m-3 text-blue-700"> Fund Barter balance </p>
                    </div>
                    <div className="shadow-lg rounded-lg px-5 py-2">

                        <div className="m-3 flex justify-between items-center">
                            <p className="text-xl"> Spendings </p>
                            <div>
                                <select className="bg-white p-2 text-xs">
                                    <option value=""> Today </option>
                                    <option value="SEVEN"> Last 7 days </option>
                                    <option value="YESTERDAY"> Yesterday </option>
                                    <option value="MONTH"> One Month Ago </option>
                                    <option value="ALL"> All Time </option>
                                </select>
                            </div>
                        </div>
                        <p className="m-3 text-3xl">  </p>
                        <p className="m-3 text-blue-700"> Fund Barter balance </p>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </div >
    )
}
