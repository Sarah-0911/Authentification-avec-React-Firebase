import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {

  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const [validation, setValidation] = useState("");

  const formRef = useRef();
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  }

  const handleForm = async(e) => {
    e.preventDefault();
    // console.log(inputs);

    if ((inputs.current[1].value.length || inputs.current[2].value.length)  < 6) {
      setValidation("6 characters min.")
      return;
    }

    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match.")
      return;
    }

    try {
      const cred = await signUp(inputs.current[0].value, inputs.current[1].value);
      formRef.current.reset();
      setValidation("");
      console.log(cred);

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setValidation("This email is already registered.");
      } else {
        setValidation("An error has occurred, please try again.");
      }
      console.log(error);
      
    }

  }

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
          <form
          onSubmit={handleForm}
          ref={formRef}>
            <div className="flex flex-col mb-3">
              <label htmlFor="signUpEmail">Email address</label>
              <input
              ref={addInputs}
              className="p-1 mt-1"
              type="email"
              id="signUpEmail"
              required />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="signUpPwd">Password</label>
              <input
              ref={addInputs}
              className="p-1 mt-1"
              type="password"
              id="signUpPwd"
              required />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="repeatPwd">Repeat Password</label>
              <input
              ref={addInputs}
              className="p-1 mt-1"
              type="password"
              id="repeatPwd"
              required />
            </div>
            <p className="text-red-400 text-sm font-medium">{validation}</p>
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
