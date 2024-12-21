import { Link } from "react-router-dom";

export default function Navbar() {

  const handleShowModal = () => {

  }

  return (
    <>
    <nav className="flex justify-between items-center bg-slate-50 py-2 px-8">
      <Link to={"/"} className="text-slate-800 text-lg">
        AuthJS
      </Link>
      <div className="flex gap-2">
        <button
        onClick={handleShowModal}
        className="text-slate-50 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          Sign Up
        </button>
        <button
        onClick={handleShowModal}
        className="text-slate-50 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          Sign In
        </button>
        <button className="text-slate-50 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Log Out
        </button>
      </div>
    </nav>
    </>
  )
}
