import React, { createContext, useState } from "react";
export const  AuthContex = createContext();
export const  ValidityContex = createContext();

export const AuthContexProvider = ({children})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false); 
  const [validity, setValidity] = useState(null)


  return(
    <AuthContex.Provider value={{email, password, name, auth, setAuth,setEmail, setPassword, setName, validity, setValidity,}}>
      {children}
    </AuthContex.Provider>
  )
}
