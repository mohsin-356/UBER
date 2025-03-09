import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    console.log("got token from localstorage" + token);
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status == 200) {
            localStorage.removeItem('token');
            console.log('removed');
        }

    });
    return (
        <h1><i>Captain</i>Logout</h1>
    )
}
export default CaptainLogout;