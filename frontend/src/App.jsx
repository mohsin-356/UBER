import React, { useContext } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'

const App = () => {
  const ans =useContext(UserDataContext);
  console.log(ans);
  
  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/login" exact element={<UserLogin/>} />
        <Route path="/signup" exact element={<UserSignup/>} />
        <Route path="/captain-login" exact element={<CaptainLogin/>} />
        <Route path="/captain-signup" exact element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App