const request = require("request");

const geocode = (adress, callback) => {
  const url =
    "https://api.mapbox.com/search/geocode/v6/forward?q=" +
    adress +
    "s&access_token=pk.eyJ1IjoiaXp6eW0yMyIsImEiOiJjbTRtcmhibm4wMGR2Mm1xNHU3cWZ5bTJyIn0.2U3aFrc8wQotcxgKWtsr4w&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location srvices", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location. try another search", undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].geometry.coordinates[0],
        long: response.body.features[0].geometry.coordinates[1],
        location: response.body.features[0].properties.name,
      });
    }
  });
};

module.exports = geocode;
