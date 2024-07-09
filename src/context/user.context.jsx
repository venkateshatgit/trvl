import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListner } from "../utils/firebase.utils";


//actual value you want to access
export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null
});


export const UserProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null);
    const value = {currUser, setCurrUser};

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListner((user) => {
            setCurrUser(user);
            console.log(user);
        })

        return unsubcribe;
    }, [])
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}