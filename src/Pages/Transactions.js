import React from 'react'

export default function Transactions() {
    return (
        <div className="shadow md:w-1/2 md:m-auto p-3 m-2 rounded-lg">
            <h1 className="mb-10">
                All Transactions
            </h1>
            <div>
                <li className="list-none">
                    <date> 7th May 2020 </date> <br />
                    <div className="flex mt-3 items-center">
                        <div className="rounded-full p-4 bg-blue-400 text-white">
                            <b> MT  </b>
                        </div>
                        <div className="flex w-full ml-5 md:justify-between items-start md:flex-no-wrap flex-wrap  ">
                            <div className="w-full">
                                <b> Mtn </b> <b />
                                <p> Airtime </p>
                            </div>
                            <div>
                                ₦100.00
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    )
}
