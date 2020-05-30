import React from 'react'
import { Link, navigate } from '@reach/router'
import {instance as axios} from './../utils/axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';



export default function Login() {
    const [userDetails, setUserDetails] = React.useState({
        username: "",
        password: ""
    })

    const [loading, setLoading] = React.useState(false)

    const Submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(userDetails)
        try {
            let {data} = await axios.post('auth/local', {
                "identifier": userDetails.username,
                "password":userDetails.password
            })
            // console.log(data.jwt)
            await localStorage.setItem("auth-token", data.jwt)
            NotificationManager.success('Welcome Back', 'Log In successful')
            navigate('/dashboard')
        } catch (error) {
            NotificationManager.error('Incorrect Username or Password ', 'Authorization Failed')
        }      
        setLoading(false)  
    }


    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-100">
            <div className="lg:w-1/3 p-5 md:p-0">
                <h3 className="text-bold text-xl text-center my-3"> Login to your Pi-coin account</h3>
                <form className="p-5 shadow-md bg-white rounded-lg" onSubmit={(e) => Submit(e)}>
                    <h1 className="text-3xl font-bold text-center my-3">
                        Pi-coin
                </h1>
                    <div>
                        <label htmlFor="email">
                            EMAIL ADDRESS
                    </label>
                        <input type="email" name="email" id="" className=" border w-full p-2 rounded mt-3 mb-5" onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="password">
                            ENTER YOUR PASSWORD
                    </label>
                        <input type="password" name="password" id="" className=" border w-full p-2 rounded mt-3 mb-5" onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }} />
                    </div>
                    <p className="mb-1 mt-5">
                        Forgot paswword ?
                </p>

                    <button type="submit" className="bg-blue-400 w-full text-white p-2 rounded-lg" disabled={loading}>
                        {loading ? <div className="loading"> Loading... </div> : 'Login'}
                    </button>

                    <div className="mt-5">
                        Don't have an account? <Link to="/signup" className="text-blue-400"> Register </Link>
                    </div>
                </form>
                <NotificationContainer/>
            </div>
        </div>
    )
}
