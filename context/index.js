import React, {useState, createContext} from "react";

export const Context = createContext();

export const ContextProvider = () => {
    const [username, setUsername] = useState(" ");
    // secret to be used in login. if username and secret is present == user is logged in.
    const [secret, setSecret] = useState(" ");

    const value = {
        username,
        setUsername,
        secret,
        setSecret
    };
    return <Context.Provider  value={value}>{props.children}</Context.Provider>
}