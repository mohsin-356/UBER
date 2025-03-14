import React from 'react';

const LocationSearchPanel = () => {
    return (
        <div>
            {/* THIS IS A SAMPLE DATA */}
            <div className="flex gap-4 my-2 items-center justify-items-start border-2 border-gray-300 rounded-lg p-2">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i class="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                <h4 className="text-md font-semibold">24B, Near Quetta's Cafe textiles coding school, Faisalabad</h4>
            </div>
            <div className="flex gap-4 my-2 items-center justify-items-start border-2 border-gray-300 rounded-lg p-2">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i class="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                <h4 className="text-md font-semibold">24B, Near Quetta's Cafe textiles coding school, Faisalabad</h4>
            </div>
            <div className="fixed z-10 buttom-0 bg-white p-5">
                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car" />
                    <div>
                        <h4>UberGo<span><i className="ri-user-fill"></i>4</span></h4>
                        <h5>2 mins away</h5>
                        <p>Affordable,Compact rides</p>
                    </div>
                    <h2>$193.23</h2>
                </div>
            </div>
        </div>
    )
}

export default LocationSearchPanel;