import React from 'react';
const ConfirmRide = () => {
  return (
    <div>
           <h5 onClick={() => {
                props.setVehiclePanel(false);
            }} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
              <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />

    </div>
  )
}
export default ConfirmRide;