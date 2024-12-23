import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { Outlet, useLocation, Navigate } from "react-router-dom"

export default function Private() {

  const { currentUser } = useContext(UserContext);
  console.log("PRIVATE", currentUser);

  // if (!currentUser) {
  //   return <Navigate to="/" />
  // }

  return (
    <div className="w-[600px] h-[400px] mx-auto">

      {/* Le composant Outlet définit l'endroit où je veux voir sortir ma route imbriquée (vers PrivateHome): */}
      <Outlet />

    </div>
  )
}
