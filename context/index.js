import React, {useState, createContext} from "react";

 export const Context = createContext();

  export const ContextProvider = (props) => {
    const [username, setUsername] = useState(" ");
    // secret to be used in login. 
    const [secret, setSecret] = useState(" ");

    const value = {
        username,
        setUsername,
        secret,
        setSecret
    };
    return <Context.Provider  value={value}>{props.children}</Context.Provider>
};

