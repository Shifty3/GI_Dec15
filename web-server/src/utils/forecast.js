const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4c0747c7270f537b4685b57d92d82408&query=" +
    lat +
    "," +
    long +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions}, it feels like its currently ${response.body.current.temperature} degrees`
      );
    }
  });
};

module.exports = forecast;
