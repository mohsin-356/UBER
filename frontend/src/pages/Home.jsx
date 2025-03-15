import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen)
    {
      gsap.to(panelRef.current,
      {
        height: '70%',
        duration: 0.5,
        opacity: 1,
        padding: '24px'
      });
      gsap.to(panelCloseRef.current,
      {
        opacity: 1
      });
    }
    else
    {
      gsap.to(panelRef.current,
      {
        height: '0%',
        duration: 0.5,
        opacity: 0
      });
      gsap.to(panelCloseRef.current,
      {
        opacity: 0
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Background Image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      {/* Bottom Panel */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full bottom-0">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          {/* Search Form */}
          <form className="relative py-3" onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-950 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>

        {/* Location Search Panel */}
        <div ref={panelRef} className="bg-white opacity-0 h-0">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      {/* Ride Selection Bar */}
      <div className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
        <div className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
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
        <div className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
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
        <div className="flex border-2 mb-2 active:border-black rounded-xl p-3 w-full items-center justify-between">
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
    </div>
  );
};

export default Home;
