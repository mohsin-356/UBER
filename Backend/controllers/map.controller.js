const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");
module.exports.getCoordinates = async (req, res) => {
  // Validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { address } = req.query;
  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    return res.status(200).json({ coordinates });
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    return res.status(404).json({ message: "coordinates not found" });
  }
};
module.exports.getDistanceAndTime = async (req, res) => {
  // Validate the request
  const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json({ errors: errors.array() });
    }

  try{
    const { origin, destination } = req.query;
    const distanceAndTime = await mapService.getDistanceAndTime(
      origin,
      destination
    );
    if (distanceAndTime.status === "OK") {
      return res.status(200).json({
        distance: distanceAndTime.distance,
        duration: distanceAndTime.duration,
      });
    } else {
      return res.status(404).json({ message: "Distance and time not found" });
    }
  }
  catch(error)
  {
    console.error("Error fetching distance and time:", error.message);
    return res.status(404).json({ message: "Distance and time not found catch Block" });
  }
}
