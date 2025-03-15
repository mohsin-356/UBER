import React from 'react';

const LocationSearchPanel = () => {
    return (
        <div>
            {/* THIS IS A SAMPLE DATA */}
            <div className="flex gap-4 my-2 items-center justify-items-start border-2 border-gray-300 rounded-lg p-2">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i className="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                <h4 className="text-md font-semibold">24B, Near Quetta's Cafe textiles coding school, Faisalabad</h4>
            </div>
            <div className="flex gap-4 my-2 items-center justify-items-start border-2 border-gray-300 rounded-lg p-2">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i className="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                <h4 className="text-md font-semibold">24B, Near Quetta's Cafe textiles coding school, Faisalabad</h4>
            </div>
        </div>
    )
}

export default LocationSearchPanel;