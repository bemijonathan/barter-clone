import React from 'react'

export default function DashboardHome() {
    return (
        <div>
            <div className="block md:flex items-center justify-between w-full ml-3 md:ml-0">
                <div>
                    <h1 className="font-bold text-3xl"> Home</h1>
                    <p> Welcome back, Jonathan. </p>
                </div>
                <button className="bg-blue-300 px-4 py-2 text-xs font-bold rounded-lg text-white mt-5 md:mt-0">
                    Fund Pi-coin Wallet
                </button>
            </div>
            <section className="flex items-start justify-between mt-10 flex-wrap md:flex-no-wrap">
                <div className="md:w-1/3 w-full p-3 md:p-0">
                    <div className="shadow-xl rounded-lg px-5 py-2">
                        <p className="m-3"> YOUR PI-COIN BALANCE</p>
                        <p className="m-3 text-3xl"> 0.012303 btc </p>
                        <p className="m-3 text-blue-700"> Fund Pi-coin Wallet</p>
                    </div>
                    <div className="shadow-xl rounded-lg px-5 py-2 mt-10">

                        <div className="m-3  flex justify-between items-center">
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
                        <div className="m-3 flex justify-between items-center mt-10">
                            <div className="chart">

                            </div>
                            <div className="text-sm">
                                <p> TOTAL MONEY RECEIVED </p>
                                <span className="text-blue-500 font-bold"> ₦ 0.00 </span>
                                <p> TOTAL MONEY SPENT </p>
                                <span className="text-red-500 font-bold"> ₦ 100.00 </span>
                            </div>
                        </div>
                        <p className="m-3 text-3xl">  </p>
                        <p className="m-3 text-blue-700"> Fund Pi-coin Wallet </p>
                    </div>
                </div>

                <div className="md:w-2/3 w-full shadow-xl rounded-lg px-10 py-2 m-5 md:ml-10 ">
                    <h3 className="font-bold text-xl mb-5">
                        Exchange Rates
                    </h3>
                    {/* <img src="/images/no-transaction.svg" alt="no transaction" className=" m-10 w-full md:m-auto p-10 no-transaction" /> */}
                    <div className="btc-graph"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=7&pref_coin_id=1505&graph=yes" width="100%" height="468px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"></iframe></div><div className></div>
                </div>
            </section>
        </div >
    )
}
