import React, { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../Firebase/firebase";
export const AuthContex = createContext();

export const AuthContexProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [validity, setValidity] = useState(null);
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLoggedIn(true)
        setUser(uid)
        
      } else {
        setLoggedIn(false)
        setUser(null)
      }
    });
  });



  return (
    <AuthContex.Provider
      value={{
        email,
        password,
        name,
        loggedIn,
        setEmail,
        setPassword,
        setName,
        validity,
        setValidity,
        user
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
