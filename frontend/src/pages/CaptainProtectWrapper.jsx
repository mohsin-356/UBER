import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)




    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" // Ensure proper content type
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [ token ])

    

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper

// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { CaptainDataContext } from '../context/CaptainContext';
// import axios from 'axios';
// const CaptainProtectWrapper = ({ children }) => 
// {
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const {captain,setCaptain}=useContext(CaptainDataContext);
//     const [isLoading,setIsLoading]=useState(true);

//     console.log(token);
//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//         }
//     }, [token]);
//     axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }).then(response=>{
//         if (response.status==200)
//         {
//             setCaptain(response.data.captain);
//             setIsLoading(false);
//         }

//      })
//      .catch(error=>{
//         console.log(error);
//         localStorage.removeItem('token');
//         navigate('/captain-login');
//      })
    
//     if (isLoading)
//     {
//         return (
//             <div>
//                 <h1 className='text-amber-200 justify-center align-middle'>Loading...</h1>
//             </div>
//         )    
//     }
//     return (
//         <>
//             {children}
//         </>
//     )
// }
// export default CaptainProtectWrapper;