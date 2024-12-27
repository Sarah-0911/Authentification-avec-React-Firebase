import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {

  const { modalState, toggleModals, signIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  const formRef = useRef();
  const inputs = useRef([]);

  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  }

  console.log(inputs);

  const closeModal = () => {
    toggleModals("close");
    setValidation("");
  }

  const handleForm = async(e) => {
    e.preventDefault();

    try {
      const cred = await signIn(inputs.current[0].value, inputs.current[1].value);
      console.log(cred);
      formRef.current.reset();
      closeModal();
      navigate("private/private-home");
    } catch {
      setValidation("Incorrect email and/or password.")
    }
  }

  return (
    <>
    {modalState.signInModal && (
      <div className="fixed inset-0 flex justify-center items-center bg-slate-800/75"
      onClick={closeModal}>
        <div
        className="bg-slate-100 min-w-[400px] text-slate-800 rounded relative p-4"
        onClick={(e) => e.stopPropagation()}>
          <p className="font-semibold mb-4">Sign In</p>
          <button
          className="absolute right-1 top-2 w-7 h-7 text-sm"
          onClick={closeModal}>
            X
          </button>
          <form
          onSubmit={handleForm}
          ref={formRef}>
            <div className="flex flex-col mb-3">
              <label htmlFor="signInEmail">Email address</label>
              <input
              ref={addInputs}
              className="p-1 mt-1"
              type="email"
              id="signInEmail"
              required />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="signInPwd">Password</label>
              <input
              ref={addInputs}
              className="p-1 mt-1"
              type="password"
              id="signInPwd"
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
