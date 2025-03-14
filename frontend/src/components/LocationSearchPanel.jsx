import React from 'react';

const LocationSearchPanel = () => {
    return (
        <div>
            {/* THIS IS A SAMPLE DATA */}
            <div className="flex gap-4 my-2 items-center justify-items-start border-b-2 border-gray-200 pb-2">
               <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i class="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                <h4 className="text-lg font-semibold">24B, Near Quetta's Cafe textiles coding school, Faisalabad</h4>
            </div>
        </div>
    )
}

export default LocationSearchPanel;