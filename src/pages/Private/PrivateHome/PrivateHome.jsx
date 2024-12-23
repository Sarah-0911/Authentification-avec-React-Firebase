import catAtDesk from "./catAtDesk.webp"

export default function PrivateHome() {
  return (
    <div className="flex flex-col justify-center items-center w-[400px] mx-auto">
      <h1 className="text-green-400 font-semibold my-4">Home Sweet private Home</h1>
      <img className="w-[80%]" src={catAtDesk} alt="cat at desk gif" />
    </div>
  )
}
