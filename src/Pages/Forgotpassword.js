import React from "react";
import { Link } from "@reach/router";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Forgotpassword = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(email);
      NotificationManager.success("Email not Found ", "Failed to send email");
    } catch (error) {
      NotificationManager.error("Email not Found ", "Failed to send email");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-blue-100">
        <div className="lg:w-1/3 p-5 md:p-0">
          <h3 className="text-bold text-xl text-center my-3">
            {" "}
            Login to your Pi-coin account
          </h3>
          <form
            className="p-5 shadow-md bg-white rounded-lg"
            onSubmit={(e) => Submit(e)}
          >
            <h1 className="text-3xl font-bold text-center my-3">Pi-coin</h1>
            <div>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                id=""
                className=" border w-full p-2 rounded mt-3 mb-5"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-400 w-full text-white p-2 rounded-lg"
              disabled={loading}
            >
              {loading ? <div className="loading"> Loading... </div> : "Login"}
            </button>

            <div className="mt-5">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400">
                {" "}
                Register{" "}
              </Link>
            </div>
          </form>
          <NotificationContainer />
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
