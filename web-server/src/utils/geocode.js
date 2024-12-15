const request = require("postman-request");

const geocode = (address, callback) => {
  //concating the address to search for wherever we want
  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
    address
  )}&access_token=pk.eyJ1IjoiaXp6eW0yMyIsImEiOiJjbTRtcmhibm4wMGR2Mm1xNHU3cWZ5bTJyIn0.2U3aFrc8wQotcxgKWtsr4w&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location. try another search", undefined);
    } else {
      callback(undefined, {
        //getting the latitude and longitude and return the address from the api
        lat: response.body.features[0].properties.coordinates.latitude,
        long: response.body.features[0].properties.coordinates.longitude,
        location: response.body.features[1].properties.full_address,
      });
    }
  });
};

module.exports = geocode;
