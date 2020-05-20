import axios from 'axios';

var instance = axios.create({
    baseURL: "https://b-clone.herokuapp.com/"
});

export default instance;
