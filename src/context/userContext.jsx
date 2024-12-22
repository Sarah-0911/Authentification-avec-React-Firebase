/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {

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
    <UserContext.Provider value={{ modalState, toggleModals }} >
      {props.children}
    </UserContext.Provider>
  )
}
