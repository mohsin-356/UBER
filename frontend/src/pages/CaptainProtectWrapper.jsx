import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
const UserProtectWrapper = ({ children }) => 
{
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [captain,setCaptain]=useContext(CaptainDataContext);
    const [isLoading,setIsLoading]=useState(true);

    console.log(token);
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response=>{
        if (response.status==200)
        {
            setCaptain(response.data.captain);
            setIsLoading(false);
        }

     })
     .catch(error=>{
        console.log(error);
        navigate('/captain-login');
     })
    
    if (isLoading)
    {
        return (
            <div>
                <h1 className='text-amber-200 justify-center align-middle'>Loading...</h1>
            </div>
        )    
    }
    return (
        <>
            {children}
        </>
    )
}
export default UserProtectWrapper