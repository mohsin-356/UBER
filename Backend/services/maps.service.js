const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
module.exports.getAddressCoordinate = async (address) => {
  try {
    const apiKey = process.env.MAPTILER_API_KEY;
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
      address
    )}.json?key=${apiKey}`;
    const response = await axios.get(url);

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      const { center } = response.data.features[0];
      const [longitude, latitude] = center;
      return { longitude, latitude };
    } else {
      throw new Error("No coordinates found for the given address.");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw error;
  }
};

async function geocodeLocation(location) {
  const geoUrl = `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${MAPTILER_API_KEY}`;
  const response = await axios.get(geoUrl);

  if (
    response.data &&
    response.data.features &&
    response.data.features.length > 0
  ) {
    const [lng, lat] = response.data.features[0].geometry.coordinates;
    return { lng, lat };
  } else {
    throw new Error(`Geocoding failed for location: ${location}`);
  }
}

module.exports.getDistanceAndTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required.");
  }

  try {
    // Step 1: Geocode both locations
    const originCoords = await geocodeLocation(origin);
    const destinationCoords = await geocodeLocation(destination);

    const routeUrl = `https://api.maptiler.com/route/driving/${originCoords.lng},${originCoords.lat},${destinationCoords.lng},${destinationCoords.lat}/geojson?key=${MAPTILER_API_KEY}`;

    const routeResponse = await axios.get(routeUrl);

    if (routeResponse.status === 200 && routeResponse.data) {
      const features = routeResponse.data.features;

      if (features.length > 0) {
        const route = features[0];
        const { distance, duration } = route.properties;

        return {
          distance: distance, // in meters
          duration: duration  // in seconds
        };
      } else {
        throw new Error("No route found between the locations.");
      }
    } else {
      throw new Error("Routing API failed to fetch data.");
    }

  } catch (error) {
    console.error("Error fetching distance and time:", error.message);
    throw error;
  }
};


// module.exports.getDistanceAndTime = async (origin, destination) => {
//   if (!origin || !destination) {
//     throw new Error("Origin and destination are required.");
//   }
//   const apiKey = process.env.MAPTILER_API_KEY;
//   const url = `https://api.maptiler.com/route/?key=${apiKey}&start=${encodeURIComponent(origin)}&end=${encodeURIComponent(destination)}`;
//   try {
//     const response = await axios.get(url);
//     // if (response.data.status === "OK" && response.data.routes.length > 0)
//     // {
//     //   const { distance, duration } = response.data.routes[0];
//     //   return { distance, duration };
//     // }
//     if(response.data.status==='OK')
//     {
//         if(response.data.rows[0].elements[0].status==='ZERO_RESULTS')
//         {
//             throw new Error(`No route found between the given ${origin} and ${destination}.`);
//         }
//         return response.data.rows[0].elements[0];
//         // return {
//         //     distance: response.data.rows[0].elements[0].distance,
//         //     duration: response.data.rows[0].elements[0].duration
//         // };
//     }
//     else
//     {
//       throw new Error("Unable to find distance and time for the given route.");
//     }
//   } catch (error) {
//     console.error("Error fetching distance and time:", error.message);
//     throw error;
//   }
// };
