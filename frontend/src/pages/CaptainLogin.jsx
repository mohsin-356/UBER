import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: send request to backend to authenticate captain
    console.log('captain Login', { email, password });
    setCaptainData({ email: email, password: password }); // Update state with captain data for display purposes
    console.log('captain Data', captainData.email, captainData.password);
    // Reset form state
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