import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Private from './pages/Private/Private'
import SignUpModal from './components/SignUpModal'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'
// import SignInModal from './components/SignInModal'

function App() {

  return (
    <div className='bg-slate-900 min-h-screen'>
      <SignUpModal />
      {/* <SignInModal /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
