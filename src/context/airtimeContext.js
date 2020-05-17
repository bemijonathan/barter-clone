import { createContext } from "react";

export const AirtimeContext = createContext({
    show: false,
    hide() { }
})


export const Authenticated = createContext({
    isauthenticated:false
})