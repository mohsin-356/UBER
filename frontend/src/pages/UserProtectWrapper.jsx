import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log("Token:", token); // Debugging purpose

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]); // ✅ Dependencies added

    return token ? <>{children}</> : null; // ✅ Only render children if token exists
};

export default UserProtectWrapper;
