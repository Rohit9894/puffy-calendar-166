import { createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider);
  };
  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => useContext(AuthContext);
