/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export default function UserContextProvider(props) {

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    })

    return unsubscribe;   // clean up unsubscribe une fois qu'il est monté.

  }, [])

  //modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true
        })
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false
        })
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false
        })
    }
  }

  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp, currentUser, loadingData }} >
      {props.children}
    </UserContext.Provider>
  )
}
