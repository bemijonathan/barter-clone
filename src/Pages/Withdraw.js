import React from "react";
import { requests } from "../utils/axios";

export default function Transactions() {
    const Wallet = async () => {
        try {
            const { data } = await requests.get("/wallets");
            console.log(data.balance);
            return data.balance;
        } catch (error) {
            console.log(error.message);
        }
    };

    const [amount, setAmount] = React.useState(0);

    const [verified, setVerified] = React.useState(false);

    React.useEffect(() => {
        console.log("hello i didnt loop");
        Wallet().then(setAmount);
    }, [amount]);

    return (
        <div className="shadow md:w-1/2 md:mx-auto p-5 m-2 rounded-lg">
            {/*<div className="text-2xl text-center w-5/6 text-bold bg-blue-500 text-white -mt-10 mx-auto rounded-lg py-3">
                <p>Wallet Balance</p>
                <p>{amount === 0 ? "0.0000" : amount} </p>
            </div>*/}
            <h1 className="mb-5 text-2xl text-center text-bold my-3">
                WithDraw Coins
            </h1>

            <div>
                <label htmlFor="email">AMOUNT</label>
                <input
                    type="email"
                    name="email"
                    id=""
                    className=" border w-full p-2 rounded mt-3 mb-5"
                />
                <p className="text-xs text-blue-600">
                    {amount === 0 ? "0.0000" : amount}{" "}
                </p>
            </div>
            <button className="text-sm text-bold bg-blue-400 p-2 w-full ">
                {" "}
                Submit{" "}
            </button>
        </div>
    );
}
