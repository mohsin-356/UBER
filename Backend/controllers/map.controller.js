const mapService = require('../services/maps.service');
module.exports.getCoordinates = async (req, res) => {
    try {
        const { address } = req.query;
        if (!address) {
            return res.status(400).json({ message: 'Address is required' });
        }
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.status(200).json({ coordinates });
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
};