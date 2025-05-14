const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
module.exports.getAddressCoordinate = async (address) => {
    try {
        const apiKey = process.env.MAPTILER_API_KEY;
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apiKey}`;
        const response = await axios.get(url);
        
        if (response.data && response.data.features && response.data.features.length > 0) {
            const { center } = response.data.features[0];
            const [longitude, latitude] = center;
            return { longitude, latitude };
        } else {
            throw new Error('No coordinates found for the given address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};