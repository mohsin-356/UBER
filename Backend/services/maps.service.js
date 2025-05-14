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
module.exports.getDistanceAndTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required.");
  }
  const apiKey = process.env.MAPTILER_API_KEY;
  const url = `https://api.maptiler.com/route/?key=${apiKey}&start=${encodeURIComponent(
    origin
  )}&end=${encodeURIComponent(destination)}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK" && response.data.routes.length > 0)
    {
      const { distance, duration } = response.data.routes[0];
      return { distance, duration };
    }
    else
    {
      throw new Error("No route found between the given locations.");
    }
  } catch (error) {
    console.error("Error fetching distance and time:", error.message);
    throw error;
  }
};
