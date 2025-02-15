import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: send request to backend to authenticate user
    console.log('User Login', { email, password });
    setUserData({email:email, password:password}); // Update state with user data for display purposes
    console.log('User Data',userData.email,userData.password);
    // Reset form state
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
        <form onSubmit={(e)=>{
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
          <p className="text-center">New Here? <Link to={'/signup'} className="text-blue-600">Create a new Account</Link> </p>
        </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as a Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
