import { UserContext } from "../context/userContext";
import { useContext } from "react";

export default function Home() {

  const { currentUser } = useContext(UserContext);

  return (
    <div className="max-w-lg m-4 p-4 mx-auto">
      <h1 className="text-4xl text-center font-light text-slate-200">
        {currentUser ? "Welcome buddy" : "Hi, Sign up or Sign in"}
      </h1>
    </div>
  )
}
