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

  const logInWithGoogle = (providerGoogle) => {
    return signInWithPopup(auth, providerGoogle);
  };

  const logInWithGithub = (providerGithub) => {
    return signInWithPopup(auth, providerGithub);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe();
  }, []);

  const authInfo = {
    user,
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
