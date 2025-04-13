import React from 'react'
import { Link } from 'react-router-dom'
const CaptainHome = () => {
    return (
        <div className='h-screen'>
           <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
            <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
           </div>
            <div className='h-1/2'>
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Background"
                />
            </div>

            <div className='h-1/2 p-4'>
            <div>
                <div>
                    <img src="" alt="" />
                    <h4>Usman Patel</h4>
                </div>
                <div>
                    <h4>$295.2</h4>
                </div>
            </div>

                {/* <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car image" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Zeeshan Nazam</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-between flex-col'>
                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-5 p-3 border-gray-300 border-b-2'>
                            <i className="ri-map-pin-3-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>NTU-manawala</h3>
                                <p className='text-sm -mt-1 text-gray-600'>sheikhupura road Manawala,Faisalabad</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3'>
                            <i className="text-lg ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>$120</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>

                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' >Make a Payment</button> */}

            </div>
        </div>
    )
}
export default CaptainHome;