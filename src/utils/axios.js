import axios from 'axios';

const baseURL = "https://b-clone.herokuapp.com/"

const instance = axios.create({
    baseURL
});

const token = localStorage.getItem('auth-token')

console.log(token)

export const requests = axios.create(
    { baseURL, headers: { Authorization : `Bearer ${token}` } }
)

export default instance;


