import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

// type AuthContextProviderType = {
//   children: ReactNode;
// };
// type AuthContextType = {
//   googleSignIn: Function;
//   logout: Function;
//   user: {};
//   setUser: Function;
//   githubSignIn: Function;
//   googleSignInR: Function;
//   githubSignInR: Function;
//   facebookSignIn: Function;
//   facebookSignInR: Function;
// };
// const AuthContext = createContext<AuthContextType>({
//   googleSignIn: () => {},
//   logout: () => {},
//   user: {},
//   setUser: () => {},
//   githubSignIn: () => {},
//   googleSignInR: () => {},
//   githubSignInR: () => {},
//   facebookSignIn: () => {},
//   facebookSignInR: () => {},
// });
const AuthContext = createContext();
// export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
// const [user, setUser] = useState<{}>({});
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const googleSignIn = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider);
  };
  const githubSignIn = () => {
    const Provider = new GithubAuthProvider();
    signInWithPopup(auth, Provider);
  };
  const googleSignInR = () => {
    const Provider = new GoogleAuthProvider();
    signInWithRedirect(auth, Provider);
  };
  const githubSignInR = () => {
    const Provider = new GithubAuthProvider();
    signInWithRedirect(auth, Provider);
  };
  const facebookSignIn = () => {
    const Provider = new FacebookAuthProvider();
    signInWithPopup(auth, Provider);
  };
  const facebookSignInR = () => {
    const Provider = new FacebookAuthProvider();
    signInWithRedirect(auth, Provider);
  };
  const logout = () => {
    signOut(auth);
    setUser({});
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload(false);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logout,
        user,
        setUser,
        githubSignIn,
        googleSignInR,
        githubSignInR,
        facebookSignIn,
        facebookSignInR,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => useContext(AuthContext);
