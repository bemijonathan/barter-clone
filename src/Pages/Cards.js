import React, { useState } from "react";

export default function Cards() {
  const [cardDetails] = useState([
    {
      name: "Jonathan Atiene",
      cardNumber: "2435 4577 6854 9977",
      currentBalance: "4,000,000",
      validthru: "04/32",
      cvv: 266,
      billing: "34 Tower Street, Lagos, NG",
      zipcode: 234001,
      freezecard: false,
      type: "Local",
      img:"eth.svg"
    },
    {
      name: "Jonathan B Atiene",
      cardNumber: "2435 4577 6854 8877",
      currentBalance: "4,000",
      validthru: "04/32",
      cvv: "253",
      billing: "34 Tower Street, San Francisco, CA",
      zipcode: 94103,
      freezecard: false,
      type: "Dollar",
      img:"btc.svg"
    },
  ]);

  const [current, setCurrent] = useState(0);

  const cardList = cardDetails.map((e, i) => {
    return (
      <div
        key={i}
        className={`md:mr-10 mb-3 md:mb-0 atm-card p-5 rounded-lg shadow-2xl text-white cursor-pointer
                    ${e.type === "Dollar" ? "bg-blue-600":  "bg-yellow-600" }`}
        onClick={() => setCurrent(i)}
      >
        <p> {e.name} </p>
        <div className="flex justify-between items-center ">
        <p className="my-6 __cardnumber"> {e.cardNumber} </p> < p> <img src={'/images/'+e.img} /> </p>
        </div>
        <div className="flex justify-between items-between">
          <div>
            <p className="text-xs">CURRENT BALANCE</p>
            <p>
              {e.type === "Dollar" ? "Btc" : "Eth"} {e.currentBalance}{" "}
            </p>
          </div>
          <div>
            <p className="text-xs">VALID THRU</p>
            <p>{e.validthru}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between w-full flex-wrap p-5 md:p-0">
        <div>
          <h1 className="font-bold text-3xl"> Cards </h1>
          <p className="text-xl" style={{ maxWidth: "700px" }}>
            {" "}
            Just like you would your regular cards, you can pay for your
            shopping online with your Barter card.
          </p>
        </div>
        <button className="bg-blue-300 px-4 py-2 text-xs font-bold rounded-lg text-white">
          {" "}
          Create New Card
        </button>
      </div>

      <div>
        <div className="flex my-10 flex-wrap p-5 md:p-0">{cardList}</div>
      </div>

      <section className="flex mt-5 -mx-10 items-start flex-wrap md:flex-no-wrap">
        <div className="list-none w-full md:w-1/2 shadow p-5 rounded-lg m-10">
          <h1 className="text-2xl my-5 mx-2 font-bold">
            History
          </h1>
          <li className="mb-5 text-sm border-b-2 ">
            <p className="font-bold m-2"> Withdraw </p>
            <p className="m-2 text-red-700 font-bold"> -0.000025btc </p>
          </li>

          <li className="mb-5 text-sm border-b-2 ">
            <p className="font-bold m-2">Fund</p>
            <p className="m-2 text-green-700 font-bold"> +0.0000005btc </p>
          </li>

          <li className="mb-5 text-sm border-b-2 ">
            <p className="font-bold m-2"> Interest</p>
            <p className="m-2 text-green-700 font-bold"> +0.0000005btc </p>
            <p className="m-2 text-red-700 font-bold"> -0.00000001eth </p>

          </li>

          <li className="mb-5 text-sm border-b-2 ">
            <p className="font-bold m-2">Mined</p>
            <p className="m-2 text-green-700 font-bold"> +0.0000005eth </p>
          </li>
        </div>

        <div className="w-full md:w-1/2 m-10 rounded-lg p-5 shadow">
          <h3 className="font-bold text-xl text-center mb-5">Card Transactions</h3>
          <div>
            <div>
              <iframe
                src="https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505"
                height="196px"
                scrolling="auto"
                marginWidth="0"
                marginheight="0"
                frameBorder="0"
                border="0"
                className="m-auto mb-5"
              ></iframe>
            </div>
          </div>
          {/* <p className="text-center my-2 text-lg">
            {" "}
            <b>You have no card transactions </b>{" "}
          </p>
          <p className="text-center my-3">
            {" "}
            You haven’t purchased anything with your card yet.{" "}
          </p> */}
        </div>
      </section>
    </div>
  );
}
