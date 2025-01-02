import { createContext, useContext } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const googleSignInWithPopup = () => {
    signInWithPopup(auth, provider)
      .then(() => alert("SignIn success"))
      .catch((error) => alert("SignIn failed " + error.code));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => alert("Log out Success"),location.reload())
      .catch(() => alert("Log out Failed"));
  };

  return (
    <FirebaseContext.Provider value={{ googleSignInWithPopup, handleSignOut }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
