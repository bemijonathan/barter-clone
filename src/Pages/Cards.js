import React, { useState } from 'react'


export default function Cards() {

    const [cardDetails] = useState([
        {
            name: "Jonathan Atiene",
            cardNumber: '2435 4577 6854 9977',
            currentBalance: '4,000,000',
            validthru: "04/32",
            cvv: 266,
            billing: "34 Tower Street, Lagos, NG",
            zipcode: 234001,
            freezecard: false,
            type: "Local"
        },
        {
            name: "Jonathan B Atiene",
            cardNumber: '2435 4577 6854 8877',
            currentBalance: '4,000',
            validthru: "04/32",
            cvv: "253",
            billing: "34 Tower Street, San Francisco, CA",
            zipcode: 94103,
            freezecard: false,
            type: "Dollar"
        }
    ])

    const [current, setCurrent] = useState(0)

    const cardList = cardDetails.map((e, i) => {
        return (
            <div key={i}
                className={`mr-10 atm-card p-5 rounded-lg shadow-2xl text-white cursor-pointer
                    ${e.type === "Dollar" ? 'bg-yellow-600' : 'bg-blue-600'}`
                } onClick={() => setCurrent(i)}>
                <p> {e.name} </p>
                <p className="my-6 __cardnumber"> {e.cardNumber} </p>
                <div className="flex justify-between items-between">
                    <div>
                        <p className="text-xs">CURRENT BALANCE</p>
                        <p>{e.type === "Dollar" ? '$' : '₦'} {e.currentBalance} </p>
                    </div>
                    <div>
                        <p className="text-xs">VALID THRU</p>
                        <p>{e.validthru}</p>
                    </div>
                </div>

            </div>
        )
    })


    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="font-bold text-3xl"> Cards </h1>
                    <p className="text-xl" style={{ 'max-width': '700px' }}> Just like you would your regular cards, you can pay for your shopping online with your Barter card.</p>
                </div>
                <button className="bg-blue-300 px-4 py-2 text-xs font-bold rounded-lg text-white"> Create New Card</button>
            </div>

            <div>
                <div className="flex my-10">
                    {cardList}
                </div>
            </div>


            <section className="flex mt-5 -mx-10 items-start">

                <div className="list-none w-1/2 shadow p-5 rounded-lg m-10">
                    <h1 className="text-2xl my-5 mx-2 font-bold">
                        Card details & Settings
                    </h1>
                    <li className="mb-5 text-sm border-b-2 ">
                        <p className="font-bold m-2"> NAME </p>
                        <p className="m-2"> {cardDetails[current].name} </p>
                    </li>

                    <li className="mb-5 text-sm border-b-2 ">
                        <p className="font-bold m-2">ADDRESS</p>
                        <p className="m-2"> {cardDetails[current].billing}</p>
                    </li>

                    <li className="mb-5 text-sm border-b-2 ">
                        <p className="font-bold m-2">CVV</p>
                        <p className="m-2"> {cardDetails[current].cvv}</p>
                    </li>

                    <li className="mb-5 text-sm border-b-2 ">
                        <p className="font-bold m-2">VALID</p>
                        <p className="m-2">{cardDetails[current].validthru}</p>
                    </li>
                    <li className="mb-5 text-sm border-b-2 ">
                        <p className="font-bold m-2">ZIPCODE</p>
                        <p className="m-2"> {cardDetails[current].zipcode}</p>
                    </li>
                </div>

                <div className="w-1/2 m-10 rounded-lg p-5 shadow">
                    <h3 className="font-bold text-xl">
                        Card Transactions
                    </h3>
                    <img src="/images/no-transaction.svg" alt="no transaction" className=" m-auto p-10 no-transaction" />
                    <p className="text-center my-2 text-lg"> <b>You have no card transactions </b> </p>
                    <p className="text-center my-3"> You haven’t purchased anything with your card yet. </p>
                </div>

            </section>

        </div >
    )
}
