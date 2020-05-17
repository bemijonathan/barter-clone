import axios from "../utils/axios"
    export async function newFunction(userDetails) {
        let { data } = await axios.post('auth/local/register', {
            username: `${userDetails.firstName} ${userDetails.lastName}`,
            email: userDetails.email,
            password: userDetails.password
        })
        console.log(data)
        localStorage.setItem("auth-token", data.jwt)
    }

    export function errorfunction(error) {
        let Errors = {}
        error.details.forEach(err => {
            Errors[err.context.label] = true
        })
        return Errors
    }
