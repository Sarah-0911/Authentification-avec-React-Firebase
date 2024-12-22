import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Navbar() {

  const { toggleModals } = useContext(UserContext);

  return (
    <nav className="flex justify-between items-center bg-slate-50 py-2 px-8">
      <Link to={"/"} className="text-slate-800 text-lg">
        AuthJS
      </Link>
      <div className="flex gap-2">
        <button
        onClick={() => toggleModals("signUp")}
        className="text-slate-50 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          Sign Up
        </button>
        <button
        onClick={() => toggleModals("signIn")}
        className="text-slate-50 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          Sign In
        </button>
        <button className="text-slate-50 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Log Out
        </button>
      </div>
    </nav>
  )
}
