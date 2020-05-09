import React from 'react'
import { Link } from '@reach/router'
import { SignUpValidation } from '../utils'
import '../App.css'
import { navigate } from '@reach/router'

export default function Login() {
    const [userDetails, serUserDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        username: "",
        password: "",
        confirmPassword: "",
        refferalCode: "",
        country: ""
    })

    const updateForm = (e) => {
        setErrors({
            ...errors,
            [e.target.name]: false
        })
        serUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const [loading, setLoading] = React.useState(false)

    const [errors, setErrors] = React.useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        password: false,
        confirmPassword: false,
        country: false
    })

    React.useEffect(() => {
        console.log(errors)

    }, [setErrors, errors])


    const Submit = async (e) => {
        e.preventDefault()
        const { error } = await SignUpValidation.validate(userDetails, { abortEarly: false })
        console.log(error.details)
        if (error.details.length) {
            let Errors = {}
            error.details.forEach(err => {
                Errors[err.context.label] = true
                console.log({ [err.context.label]: true })
            })
            setErrors({
                ...errors,
                ...Errors
            })

        } else {
            setLoading(true)
            console.log(userDetails)
            setTimeout(() => {
                setLoading(false)

            }, 500);

            navigate('/dashboard')
        }
        console.log(errors)
    }


    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-100">

            <div className="md:w-2/3 lg:w-2/5">
                <h3 className="text-bold text-xl text-center my-3"> Create your Barter Account </h3>
                <form className="p-5 shadow-md bg-white rounded-lg " onSubmit={(e) => Submit(e)}>
                    <h1 className="text-3xl font-bold text-center my-3" >
                        Barter
                    </h1>
                    <section className="flex flex-wrap -m-2">
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="firstName">FIRST NAME </label>
                            <input
                                type="text"
                                name="firstName" id=""
                                className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.firstName ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => updateForm(e)}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="LastName"> LAST NAME </label>
                            <input
                                type="text"
                                name="lastName" id=""
                                className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.lastName ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => updateForm(e)}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="email"> EMAIL ADDRESS </label>
                            <input
                                type="email"
                                name="email" id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.email ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => updateForm(e)}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="phone"> PHONE NUMBER </label>
                            <input
                                type="tel"
                                name="phone"
                                id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.phoneNumber ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => updateForm(e)}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="password"> PASSWORD </label>
                            <input
                                type="password"
                                name="password"
                                id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.password ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => { updateForm(e) }}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="confirmPassword"> CONFIRM PASSWORD </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.confirmPassword ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => { updateForm(e) }}
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="referral"> REFERRAL CODE</label>
                            <input
                                type="referral"
                                name="referral"
                                id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5`
                                }
                                onChange={(e) => updateForm(e)}
                            />
                        </div>

                        <div className="md:w-1/2 w-full p-2">
                            <label htmlFor="email"> COUNTRY </label>
                            <select name="email"
                                id="" className={
                                    `w-full p-2 bg-blue-100 rounded mt-3 mb-5 
                                    ${errors.country ? "border-solid border border-red-600 error-bg" : ""} `
                                }
                                onChange={(e) => updateForm}>
                                <option>
                                </option>
                            </select>
                        </div>
                    </section>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-400 md:w-1/3 w-full m-auto text-white p-2 rounded-lg">
                            {loading ? <div className="loading"> Loading... </div> : 'Create Account'}
                        </button>
                    </div>


                    <div className="mt-5">
                        Already have an account? <Link to="/" className="text-blue-400"> Login </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
