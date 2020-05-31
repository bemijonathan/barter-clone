import React, { useState } from "react";
import { requests } from "../utils/axios"

export default function Cards() {
  const [cardDetails, setCardDetails] = useState({});

  const [history, setHistory] = useState([])

  const getWallet = async() => {
    try{
     const response = await requests.get('/wallets')
    setCardDetails(response.data)
    console.log(response.data)
    } catch(error){
      console.log(error.response)
    }
  }

  const FormatcardNumber = (id) => {
    const a = id.split("")
    const b = []
    for (let i = 1 ; i <= a.length; i++){
        
        if(i%4 === 0){
            b.push(a[i])
            b.push(" ")
        }else{
            b.push(a[i])
        }
    }
    return b.join("").toUpperCase()
  }

  const getTransactions = async () => {
    try{
     const {data} = await requests.get('/donations');
     console.log(data)
     setHistory(data)
    } catch(error){
      console.log(error.response)
    }
  } 

  const T = 0
  React.useEffect(() => {
    getWallet()
    getTransactions()
  }, [T])

  const [current, setCurrent] = useState(0);

  const cardList = (e = cardDetails ) => {
    return (
      <div
        className={`md:mr-10 mb-3 md:mb-0 atm-card p-5 rounded-lg shadow-2xl text-white cursor-pointer bg-gray-700`}
      >
      <div className="flex items-center justify-between m-0">
       <p> <img src="/images/chip.png" width="50"/> </p>
       <p> <img src="/images/btc.svg" width="50"/> </p>
      </div>
        <p className="font-bold text-xl"> {e.name} </p>
        <div className="flex justify-between items-center ">
        <p className="my-6 __cardnumber font-bold"> {e.id? FormatcardNumber(e.id) : ""} </p> 
        
        

        </div>
        <div className="flex justify-between items-between">
          <div>
            <p className="text-xs font-bold">CURRENT BALANCE</p>
            <p className="font-bold">
              btc {e.balance === 0 ? "0.00000" : e.balance}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold">VALID THRU</p>
            <p>{e.createdAt? `${new Date(e.createdAt).getUTCMonth().toString() } / ${(new Date(e.createdAt).getUTCFullYear()+3).toString().slice(2)}`: "" }</p>
          </div>
        </div>
      </div>
    );
  }

  const Histories = (e = history) => {
    if(e.length){
      return (
        <>
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
          </>
      )
    }else{
      return(
        <h1 className="text-sm my-10 text-center font-bold text-red-500">
          You Have No Completed Transaction Yet
        </h1>
      )
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between w-full flex-wrap py-3 px-5 md:p-0">
        <div>
          <h1 className="font-bold text-3xl mb-2">
            Cards 
          </h1>
          <p className="text-sm" style={{ maxWidth: "700px" }}>
          </p>
        </div>
        <button className="bg-blue-600 py-2 px-5 text-white rounded shadow"> 
          Withdraw
        </button>
      </div>
      <div>
        <div className="flex my-5 flex-wrap p-5 md:p-0">{cardList()}</div>
      </div>

      <section className="flex mt-5 -mx-10 items-start flex-wrap md:flex-no-wrap p-5 md:p-0">
        <div className="list-none w-full md:w-1/2 shadow p-5 rounded-lg m-10">
          <h1 className="text-2xl text-center my-5 mx-2 font-bold">
            Withdrawal, Mining &  Deposits
          </h1>
          {Histories()}
        </div>

        <div className="w-full md:w-1/2 m-10 rounded-lg p-5 shadow">
          <h3 className="font-bold text-xl text-center mb-5"> Btc Trends </h3>
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
