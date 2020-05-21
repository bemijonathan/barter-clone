import axios from "../utils/axios"
import jwt from 'jsonwebtoken'
// import xaxios from "axios"
    export async function newFunction(userDetails) {
        let { data } = await axios.post('auth/local/register', {
            username: `${userDetails.firstName} ${userDetails.lastName}`,
            email: userDetails.email,
            password: userDetails.password
        })
        console.log(data)
        localStorage.setItem("auth-token", data.jwt)
        const wallet = await axios.post('/wallets')
        console.log(wallet)

        // Axios.post( 
        //   'http://localhost:8000/api/v1/get_token_payloads',
        //   bodyParameters,
        //  {
        //     headers: { Authorization: `Bearer ${token}` }
        // }
        // ).then(console.log).catch(console.log);
    }

    export function errorfunction(error) {
        let Errors = {}
        error.details.forEach(err => {
            Errors[err.context.label] = true
        })
        return Errors
    }


    export const authentication = async () => {
        const token = await localStorage.getItem('auth-token')
       if(token){
         const user = jwt.decode(token)
         if(Math.floor(Date.now() / 1000) + (60 * 60) < user.exp){
           return true
         }else{
           localStorage.removeItem("auth-token")
           return false
         }
       }else{
         return false
       }    
     }