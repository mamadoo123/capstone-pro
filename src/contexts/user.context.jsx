import { createContext, useState } from "react";

// we need a value and a provider
// 1- the value: setter & getter
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//2- provider that wrapp all app and children components and provide the context value
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

