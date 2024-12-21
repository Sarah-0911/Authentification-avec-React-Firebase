import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
// import SignInModal from './components/SignInModal'
import SignUpModal from './components/SignUpModal'

function App() {

  return (
    <div className='bg-slate-900 min-h-screen'>
      <Navbar />
      <SignUpModal />
      {/* <SignInModal /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
