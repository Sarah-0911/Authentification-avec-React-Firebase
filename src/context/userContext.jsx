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
    // Installe un écouteur sur l'état d'authentification de l'utilisateur
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Met à jour le state local currentUser :
                            // - Avec l'objet utilisateur fourni par Firebase si l'utilisateur se connecte.
                            // - Avec null si l'utilisateur se déconnecte.
      setLoadingData(false); // Indique que les données d'authentification ont été chargées.
    });

    return unsubscribe; // Arrête l'écoute au démontage du composant pour éviter les comportements indésirables (d'où le nom unsubscribe).
  }, []);


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
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}
