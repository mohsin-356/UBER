import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [captainData, setCaptainData] = useState({});

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const captainData = {
  //     fullname:
  //     {
  //       firstname: firstName,
  //       lastname: lastName
  //     },
  //     email: email,
  //     password: password,
  //     vehicle:
  //     {
  //       color: vehicleColor,
  //       plate: vehiclePlate,
  //       capacity: vehicleCapacity,
  //       vehicleType: vehicleType
  //     }
  //   };
  //   console.log(captainData);
  //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
  //   consolelog("\n");
  //   console.log(response)
  //   consolelog("\n");
  //   if (response.status==201)
  //   {
  //     const data = response.data;
  //     setCaptain(data.captain);
  //     localStorage.setItem('token',data.token);
  //     navigate('/captain-home');  
  //   }
  //   setFirstname('');
  //   setLastName('');
  //   setEmail('');
  //   setPassword('');
  //   setVehicleColor('');
  //   setVehiclePlate('');
  //   setVehicleCapacity('');
  //   setVehicleType('');
  // }
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
              onChange={(e) => setFirstName(e.target.value)}
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
            placeholder='email address'
          />
          <h3 className="text-base font-medium mb-2">What's your Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type="password"
            name="password"
            placeholder='enter your password'
          />
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>

          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
            </select>
          </div>


          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'>
            Sign up
          </button>
          <p className="text-center pb-2">Already Signed,Cap? <Link to={'/captain-login'} className="text-blue-600">Login here, Captain !</Link> </p>
        </form>
      </div>
      <div>
        <hr className='bg-black border-3 h-1' />
        <p className='text-[10px] pt-1 m-1 justify-evenly'>By Proceeding,you consent to get calls, WhatsApp or SMS, messages, including by automated means, from Uber and it's affiliates to the number provided.</p>
      </div>
    </div>
  )
}
export default CaptainSignup;