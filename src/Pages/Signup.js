import React from "react";
import { Link } from "@reach/router";
import { SignUpValidation } from "../utils";
import "../App.css";
import { navigate } from "@reach/router";
import { newFunction, errorfunction } from "../utils/auth";
import {instance} from "../utils/axios"
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Login() {
  const [userDetails, serUserDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    refferalCode: "",
  });

  const updateForm = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
    serUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = React.useState(false);

  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });

  React.useEffect(() => {}, [setErrors, errors]);

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await SignUpValidation.validate(userDetails, {
      abortEarly: false,
    });
    if (error) {
      let Errors = errorfunction(error);
      setErrors({
        ...errors,
        ...Errors
    })
    } else {
      try {
        const jwt = await newFunction(userDetails);
        const response = await instance.post('/wallets',{}, { headers: { Authorization: `Bearer ${jwt}` } })
        console.log(response) 
        NotificationManager.success('Welcome to Pi-coin', 'Sign Up successful')
        window.location.assign("/dashboard");
      } catch (e) {
        console.log(e.message)
        if (e.message.split(" ").includes("already")){
          NotificationManager.error('unable to create account', e.message)
        }else{
          NotificationManager.error('unable to create accounts', 'Error Creating Account')
        }
      }
    }
    console.log(errors);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="md:w-2/3 lg:w-2/5">
        <h3 className="text-bold text-xl text-center my-3">
          {" "}
          Create your Barter Account{" "}
        </h3>
        <form
          className="p-5 shadow-md bg-white rounded-lg "
          onSubmit={(e) => Submit(e)}
        >
          <h1 className="text-3xl font-bold text-center my-3">Barter</h1>
          <section className="flex flex-wrap -m-2">
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="firstName">FIRST NAME </label>
              <input
                type="text"
                name="firstName"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.firstName
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => updateForm(e)}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="LastName"> LAST NAME </label>
              <input
                type="text"
                name="lastName"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.lastName
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => updateForm(e)}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="email"> EMAIL ADDRESS </label>
              <input
                type="email"
                name="email"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.email
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => updateForm(e)}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="phone"> PHONE NUMBER </label>
              <input
                type="tel"
                name="phoneNumber"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.phoneNumber
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => updateForm(e)}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="password"> PASSWORD </label>
              <input
                type="password"
                name="password"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.password
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => {
                  updateForm(e);
                }}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="confirmPassword"> CONFIRM PASSWORD </label>
              <input
                type="password"
                name="confirmPassword"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${
                                      errors.confirmPassword
                                        ? "border-solid border border-red-600 error-bg"
                                        : ""
                                    } `}
                onChange={(e) => {
                  updateForm(e);
                }}
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="referral"> REFERRAL CODE</label>
              <input
                type="referral"
                name="referral"
                className={`w-full p-2 bg-blue-100 rounded mt-3 mb-5`}
                onChange={(e) => updateForm(e)}
              />
            </div>
          </section>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-400 md:w-1/3 w-full m-auto text-white p-2 rounded-lg"
              disabled={loading}
            >
              {loading ? (
                <div className="loading"> Loading... </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <div className="mt-5">
            Already have an account?{" "}
            <Link to="/" className="text-blue-400">
              {" "}
              Login{" "}
            </Link>
          </div>
        </form>

        <NotificationContainer/>
      </div>
    </div>
  );
}
