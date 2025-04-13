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
                <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h4 className='text-lg font-medium'>Usman Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>$295.2</h4>
                    <p className='text-sm font-medium bg-green-500 rounded-2xl pr-1 pl-2'>Earned</p>
                </div>
                </div>

                <div className='flex justify-center gap-5 items-start'>
                    <div className='text-center'>
                        <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>

                    <div className='text-center'>
                        <i className='text-3xl mb-2 font-thin ri-speed-up-fill'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>

                    <div className='text-center'>
                        <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CaptainHome;