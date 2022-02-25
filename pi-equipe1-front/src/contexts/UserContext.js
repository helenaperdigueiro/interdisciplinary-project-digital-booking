import { createContext, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {


        let signed = localStorage.getItem("signed")
        ? JSON.parse(localStorage.getItem("signed"))
        : [];

        // let signed = JSON.parse(localStorage.getItem("signed"));

        useEffect(() => {
            localStorage.setItem('signed', JSON.stringify(signed));
          });

    return (
        <UserContext.Provider value={{ signed }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;