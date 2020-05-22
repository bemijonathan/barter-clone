import React, { useState, useEffect } from "react";
import { requests } from "../utils/axios";

export default function FundWallet(props) {
  const [BTC, BTCDetails] = useState(0);
  const [btcAddressDetails, setBtcAddressDetails] = useState(null);

  const [loading, setLoading] = useState(false);

  const [showaddress, SetBTCAddress] = useState(false);

  const Submit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    console.log("running", BTC);
    if (+BTC > 0) {
      try {
        const { data } = await requests.post("/donations", {
          amount: BTC,
          Cointype: "Btc",
        });
        console.log(data);
        setBtcAddressDetails({ ...data.data });
        SetBTCAddress(true);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  const copy = (e) => {
    e.stopPropagation();
    var range = document.createRange();
    range.selectNode(document.getElementById("copy"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("copied")
  };

  return (
    <>
      <div className=" h-full overflow-scroll p-3 airtime">
        <div
          className="md:flex-no-wrap flex-wrap items-center justify-center flex w-5/6 md:w-3/5 bg-white tilt-in-fwd-tr p-3 m-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full md:w-1/2 p-5">
            {!showaddress ? (
              <form onSubmit={(e) => Submit(e)}>
                <div>
                  <label htmlFor="price">Amount In Dollars</label>
                  <input
                    className="p-3 my-3 bg-blue-500 rounded w-full text-white"
                    type="number"
                    onChange={(e) => BTCDetails(e.target.value)}
                  />
                </div>
                <button
                  className={"w-full p-3 my-3 bg-blue-500 rounded text-white"}
                  disabled={loading}
                  onClick={(e) => Submit(e)}
                  type="submit"
                >
                  {loading ? "loading..." : "Deposit Now"}
                </button>
              </form>
            ) : (
              <div className="text-sm">
                <p> BTC ADDRES: <span id="copy">{btcAddressDetails.pay_address} </span> </p>
                <button
                  className="p-2 bg-blue-600 text-white"
                  onClick={(e) => copy(e)}
                >
                  Copy
                </button>
                <p> BTC Amount: {btcAddressDetails.coin_amount} </p>
                <p>BTC Details: {btcAddressDetails.price_amount} </p>
              </div>
            )}

            {/* 
    {"pay_within": 8} */}
          </div>
          <div className="md:w-1/2 p-5 w-full">
            <h1>
              Convert Dollars to Btc
              <coin-ponent
                dark-mode
                shadow="md"
                border-radius="8"
                font="monospace"
              ></coin-ponent>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
