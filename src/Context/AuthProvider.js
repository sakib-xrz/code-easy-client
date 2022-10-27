import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

 const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const logInWithGoogle = (providerGoogle) => {
    setLoader(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const logInWithGithub = (providerGithub) => {
    setLoader(true);
    return signInWithPopup(auth, providerGithub);
  };

  const signUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    logInWithGoogle,
    logInWithGithub,
    signUp,
    signIn,
    profileUpdate,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
