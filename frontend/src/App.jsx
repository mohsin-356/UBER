import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import { UserDataContext } from './context/UserContext';
import Start from './pages/Start';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainLogout from './pages/CaptainLogout';
import CaptainHome from './pages/CaptainHome';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
  const ans = useContext(UserDataContext);


  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/login" exact element={<UserLogin />} />
        <Route path="/signup" exact element={<UserSignup />} />
        <Route path="/riding" exact element={<Riding />} />
        <Route path="/captain-riding" exact element={<CaptainRiding />} />
        <Route path="/captain-login" exact element={<CaptainLogin />} />
        <Route path="/captain-signup" exact element={<CaptainSignup />} />
       
        <Route path="/home" exact element={<UserProtectWrapper>
          <Home />
        </UserProtectWrapper>} />

        <Route path="/user/logout" exact element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />

        <Route path="/captain-home" exact element={<CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>} />

        <Route path="/captain/logout" exact element={<CaptainProtectWrapper>
          <CaptainLogout />
        </CaptainProtectWrapper>} />

      </Routes>
    </div>
  )
}

export default App;