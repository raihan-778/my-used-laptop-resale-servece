import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //handle singup
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle google login
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //handle observer
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      }
    });
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    signUp,
    login,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
