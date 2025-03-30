import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  //states
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  //refs
  const vehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
  };
  //useEffect using useGSAP
  useGSAP(function () {
    if (panelOpen) {
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
    else {
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

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current,
        {
          y: '0%',
          duration: 0.5
        });
    }
    else {
      gsap.to(vehiclePanelRef.current,
        {
          y: '100%',
          duration: 0.5
        });
    }
  }, [vehiclePanel]);

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current,
        {
          y: '0%',
          duration: 0.5
        });
    }
    else {
      gsap.to(confirmRidePanelRef.current,
        {
          y: '100%',
          duration: 0.5
        });
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current,
        {
          y: '0%',
          duration: 0.5
        });
    }
    else {
      gsap.to(vehicleFoundRef.current,
        {
          y: '100%',
          duration: 0.5
        });
    }
  }, [vehicleFound]);
  //in progress
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current,
        {
          y: '0%',
          duration: 0.5
        });
    }
    else {
      gsap.to(WaitingForDriverRef.current,
        {
          y: '100%',
          duration: 0.5
        });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      {/* Vehicle Selection Bar */}
      <div ref={vehiclePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      {/* Confirm Ride Selection Bar */}
      <div ref={confirmRidePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      {/* Looking for a driver Bar */}
      <div ref={vehicleFoundRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      {/* Wait for "driver" Bar */}
      <div ref={WaitingForDriverRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>

    </div>
  );
};

export default Home;
