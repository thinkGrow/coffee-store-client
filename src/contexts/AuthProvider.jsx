import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const userInfo = {
  createUser
};


const AuthProvider = ({ children }) => {
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
