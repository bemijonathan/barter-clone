import React, { useState, useEffect } from "react";
import {requests} from "../utils/axios"

export default function FundWallet(props) {
  const [BTC, BTCDetails] = useState(
    0,
  );
  const [loading, setLoading] = useState(false);

  const Submit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    console.log('running', BTC)
    if (+BTC > 0) {
        try {
            const {data} = await requests.post('/donations', {
                "amount":BTC,
                "Cointype":"Btc"
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    setLoading(false)
  };
  return (
    <>
      <div className="flex w-3/5 bg-white tilt-in-fwd-tr p-3 -m-5">
        <div className="w-full md:w-1/2 m-5">
          <form onSubmit={(e) => Submit(e)}>
            <div>
              <label htmlFor="price">Amount In Dollars</label>
              <input
                className="p-3 my-3 bg-blue-500 rounded w-full text-white"
                type="number"
                onChange={(e) => BTCDetails(e.target.value)}
              />
            </div>
            {/* <div>
                        <label htmlFor="phoneNumber"> Phone Number </label>
                        <input className="p-3 my-3 bg-blue-500 rounded w-full" type="number" onChange={(e) => BTCDetails({ ...BTC, phoneNumber: e.target.value })} />
                    </div> */}
            <button
              className={"w-full p-3 my-3 bg-blue-500 rounded text-white"}
              disabled={loading}
              onClick={(e) => Submit(e)}
              type="submit"
            >
              {loading ? "loading..." : "Deposit Now"}
            </button>
          </form>

          {/* {data.data.pay_address}
    {data.data.coin_amount}
{data.data.price_amount}
    {"pay_within": 8} */}
  }
        </div>
        <div className="w-1/2 m-5">
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
    </>
  );
}
