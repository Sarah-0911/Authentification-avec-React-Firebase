import { useContext } from "react";
import { UserContext } from "../context/userContext";


export default function SignUpModal() {

  const { modalState, toggleModals } = useContext(UserContext);

  return (
    <>
    {modalState.signUpModal && (
      <div className="fixed inset-0 flex justify-center items-center bg-slate-800/75"
      onClick={() => toggleModals("close")}>
        <div
        className="bg-slate-100 min-w-[400px] text-slate-800 rounded relative p-4"
        onClick={(e) => e.stopPropagation()}>
          <p className="font-semibold mb-4">Sign Up</p>
          <button
          className="absolute right-1 top-2 w-7 h-7 text-sm"
          onClick={() => toggleModals("close")}>
            X
          </button>
          <form>
            <div className="flex flex-col mb-3">
              <label htmlFor="signUpEmail">Email address</label>
              <input
              className="p-1 mt-1"
              type="email"
              id="signUpEmail"
              required />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="signUpPwd">Password</label>
              <input
              className="p-1 mt-1"
              type="password"
              id="signUpPwd"
              required />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="repeatPwd">Repeat Password</label>
              <input
              className="p-1 mt-1"
              type="password"
              id="repeatPwd"
              required />
            </div>
            <p className="text-red-400 text-sm font-medium">Validation</p>
            <button
            className="text-slate-50 bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-2 rounded text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
      )}
    </>
  )
}
