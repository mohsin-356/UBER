import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setRidePopupPanel(false);
            }}  ><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">New Ride Available !</h3>
            <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h2 className='text-lg font-medium'>John Wick</h2>
                </div>
                <h5 className='text-lg font-medium'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 items-center justify-between flex-col'>
                {/* <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" /> */}

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-gray-300  border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Saleemi chowk,Faisalabad</p>
                        </div>
                    </div>

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
                <div className='w-full mt-5 flex items-center justify-center gap-7'>
                    <button onClick={() => {
                        props.setRidePopupPanel(false);
                    }} className='bg-black text-white font-semibold p-3 px-8 rounded-lg'>Ignore</button>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true);
                    }} className='bg-green-600 text-white font-semibold p-3 px-8 rounded-lg'>Accept</button>

                </div>
            </div>
        </div>
    )
}

export default RidePopUp