import React from 'react'

const RidePopUp = () => {
    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePanel(false);
            }} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">New Ride Available !</h3>

            <div className='flex gap-2 items-center justify-between flex-col'>
                {/* <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" /> */}

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-gray-300  border-b-2'>
                        <i class="text-lg ri-map-pin-2-fill"></i>
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

                <button onClick={() => {
                    props.setVehicleFound(true);
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>

                <button onClick={() => {

                }} className='w-full mt-5 bg-gray-300 text-gray-800 font-semibold p-2 rounded-lg'>Ignore</button>

            </div>
        </div>
    )
}

export default RidePopUp