import catAtDesk from "./catAtDesk.webp"

export default function PrivateHome() {
  return (
    <div className="w-[400px] mx-auto">
      <h1 className="text-green-400 font-semibold">Home Sweet private Home</h1>
      <img src={catAtDesk} alt="cat at desk gif" />
    </div>
  )
}
