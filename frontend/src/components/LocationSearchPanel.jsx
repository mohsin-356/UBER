import React from 'react';

const LocationSearchPanel = (props) => {
    console.log(props);
    const locations = [
        "12A, Opposite Lahore Bakers, IT Training Hub, Karachi",
        "55C, Next to Green Valley Supermarket, Web Development Academy, Islamabad",
        "78D, Near Tech Park, Software Engineering Institute, Rawalpindi",
        "90B, Behind City Mall, Full Stack Coding Bootcamp, Peshawar"
    ];
    return (
        <div>
            {/* THIS IS A SAMPLE DATA */}
            {
                locations.map(function (element,index) {
                    return <div onClick={()=>{
                        props.set
                    }} key={index}  className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-items-start">
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'> <i className="ri-map-pin-line text-2xl text-gray-500"></i></h2>
                        <h4 className="text-md font-semibold">{element}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel;