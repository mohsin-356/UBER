import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    console.log(response);
    if (response.status == 200) {
      const { token, captain } = response.data;
      console.log("captain token after De-structuring= " + token);
      localStorage.setItem("token", token)
   
      const data = response.data;
      setCaptain(data.captain);
      navigate('/captain-home');
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-20 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="uber logo" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            name="email"
          />
          <h3 className="text-lg font-medium mb-2">What's your Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            name="password"
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
            Login
          </button>
          <p className="text-center">Join the Fleet <Link to={'/captain-signup'} className="text-blue-600">Register as a Captain</Link> </p>
        </form>
      </div>
      <div>
        <Link to={'/login'} className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as a User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin;