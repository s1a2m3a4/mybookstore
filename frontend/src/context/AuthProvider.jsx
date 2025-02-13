import React, { createContext,useContext,useState } from 'react'

export const AuthContext=createContext()
export default function AuthProvideer({children}){
    const initialauth=localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialauth? JSON.parse(initialauth):undefined
    )
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
              {children}
        </AuthContext.Provider>
    )
}

export const UseAuth=()=>useContext(AuthContext)