import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehiclePanel(false);
            }} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
                <img
                    className="h-12"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
                    alt="car"
                />
                <div className=" ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        UberGo <span><i className="ri-user-fill"></i> 4</span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, Compact rides
                    </p>
                </div>
                <h2 className="text-xl font-semibold">$193.23</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
                <img
                    className="h-12"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
                    alt="car"
                />
                <div className=" ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        Moto <span><i className="ri-user-fill"></i> 2</span>
                    </h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, motorcycle rides
                    </p>
                </div>
                <h2 className="text-xl font-semibold">$65</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true);
            }} className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
                <img
                    className="h-12"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt="car"
                />
                <div className=" ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        Uber Auto <span><i className="ri-user-fill"></i> 2</span>
                    </h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, auto rides
                    </p>
                </div>
                <h2 className="text-xl font-semibold">$118.86</h2>
            </div>
        </div>
    )
}

export default VehiclePanel;