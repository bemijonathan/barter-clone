import React, { useState, useEffect } from "react";
import { requests } from "../utils/axios";
import FundWallet from "../components/fundWallet";
import CryptowatchEmbed from "cryptowatch-embed";

export default function DashboardHome() {
  let chart = new CryptowatchEmbed("bitfinex", "btcusd", {
    presetColorScheme: 'blueprint'
  });

  const token = localStorage.getItem("auth-token");

  const [home, setHome] = useState({
    balance: {},
    history: [],
  });

  const [showfundwallet, setshowfundwallet] = useState(false);

  const getdata = async () => {
    try {
      const { data } = await requests.get("/home");
      console.log(data);
      setHome({ balance: data.data.balance, history: data.data.history });
    } catch (error) {
      console.log(error.message);
    }
  };

  const close = (e) => {
    e.stopPropagation();
    let classes = e.target.classList;
    console.log(classes);
    if (classes.contains("airtime")) {
      setshowfundwallet(false);
    }
  };

  useEffect(() => {
    chart.mount("#widget");
    getdata();
  }, [token]);

  return (
    <div>
      
      <div className="block md:flex items-center justify-between w-full p-5 md:ml-0">
        <div>
          <h1 className="font-bold text-3xl"> Home</h1>
          <p className="my-3"> Welcome back, </p>
          <p className="my-3"> {home.balance?.user?.username}. </p>
        </div>
        <button
          className="bg-blue-500 w-full px-4 py-3 text-xs font-bold rounded-lg text-white mt-5 md:mt-0"
          onClick={() => setshowfundwallet(true)}
        >
          Fund Pi-coin Wallet
        </button>
      </div>
     
      <section className="flex items-start justify-between mt-10 flex-wrap md:flex-no-wrap">
        <div className="md:w-1/3 w-full px-3 py-5 md:p-0">
          <div className="shadow md:shadow-xl rounded-lg px-5 py-5 balance">
            <p className="m-3 font-bold text-white"> YOUR PI-COIN BALANCE</p>
            <p className="m-3 text-3xl text-white">
              {" "}
              {+home.balance.balance === 0
                ? "0.00000"
                : home.balance.balance}{" "}
              btc{" "}
            </p>
            <p className="m-3 text-black bg-white p-3 rounded "> Fund Pi-coin Wallet</p>
          </div>
          <div id="widget" className="shadow my-5" style={{height:'400px'}}></div>
          <div className="shadow md:shadow-xl rounded-lg px-5 py-2 mt-10">
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
              <div className="chart"></div>
              <div className="text-sm">
                {home.history.length ? (
                  home.history.map((history, i) => (
                    <div className="history" key="i">
                      <p> TOTAL MONEY RECEIVED </p>
                      <span className="text-blue-500 font-bold"> ₦ 0.00 </span>
                      <p> TOTAL MONEY SPENT </p>
                      <span className="text-red-500 font-bold"> ₦ 100.00 </span>
                    </div>
                  ))
                ) : (
                  <p className="text-red w-2/3 m-auto text-center text-red-300 mb-10 ">
                    You Currently Do not have any transaction{" "}
                  </p>
                )}
              </div>
            </div>
            <p className="m-3 text-3xl"> </p>
            <p className="m-3 text-blue-700"> Fund Pi-coin Wallet </p>
          </div>
        </div>

        <div className="md:w-2/3 w-full shadow-xs md:shadow-xl rounded-lg px-5 md:p-10 py-2 m-5 md:ml-10 ">
          <h3 className="font-bold text-xl mb-5">Exchange Rates</h3>
          {/* <img src="/images/no-transaction.svg" alt="no transaction" className=" m-10 w-full md:m-auto p-10 no-transaction" /> */}
          <div className="btc-graph">
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=7&pref_coin_id=1505&graph=yes"
              width="100%"
              height="468px"
              scrolling="auto"
              marginWidth="0"
              marginHeight="0"
              frameBorder="0"
              border="0"
            ></iframe>
          </div>
          <div></div>
        </div>
      </section>
      

      {showfundwallet ? (
        <div
          className="airtime overflow- fixed z-10 top-0 right-0 h-screen w-full bg-blue-600 bg-opacity-25 flex items-center justify-center"
          onClick={(e) => close(e)}
        >
          <FundWallet />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
