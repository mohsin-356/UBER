import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [captainData, setCaptainData] = useState({});
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        username: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
      })
      console.log(captainData);
      setFirstname('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="uber logo" />
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <h3 className="text-base font-medium mb-2">What's your Name</h3>
        <div className='flex gap-4 mb-5'>
          <input
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            required
            type="text"
            name="firstname"
            placeholder='First Name'
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            required
            type="text"
            name="lastname"
            placeholder='Last Name'
          />
        </div>
        <h3 className="text-base font-medium mb-2">What's your Email</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
          required
          type="email"
          name="email"
        />
        <h3 className="text-base font-medium mb-2">What's your Password</h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
          required
          type="password"
          name="password"
        />
        <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'>
          Sign up
        </button>
        <p className="text-center">Already Registered, Captain ? <Link to={'/captain-login'} className="text-blue-600">Login here, Captain !</Link> </p>
      </form>
    </div>
    <div>
      <hr className='bg-black border-3 h-1' />
      <p className='text-[10px] pt-1'>By Proceeding,you consent to get calls, WhatsApp or SMS, messages, including by automated means, from Uber and it's affiliates to the number provided.</p>
    </div>
  </div>
  )
}

export default CaptainSignup