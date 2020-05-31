import {instance} from "../utils/axios"
import jwt from 'jsonwebtoken'
// import xaxios from "axios"
    export async function newFunction(userDetails) {
      try {
        let { data } = await instance.post('auth/local/register', {
            username: `${userDetails.firstName} ${userDetails.lastName}`,
            email: userDetails.email,
            password: userDetails.password
        })
        console.log(data.jwt, "refused")

        localStorage.clear()

        await localStorage.setItem("auth-token", data.jwt)

        debugger

        return data.jwt
       
      } catch (error) {
        console.log(error.message)
        let err = error.response.data.message[0].messages[0].message
        throw new Error(err)
      }
        
    }

    export function errorfunction(error) {
        let Errors = {}
        error.details.forEach(err => {
            Errors[err.context.label] = true
        })
        return Errors
    }


    export const authentication = () => {
       const token = localStorage.getItem('auth-token')
       if(token){
         const user = jwt.decode(token)
         console.log(user)
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
