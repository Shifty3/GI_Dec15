const request = require("request");

const forecast = (lat, long, callback, units = "f") => {
  const url = `http://api.weatherstack.com/current?access_key=ddd19eb589227765aa3b5205dd4acf1b&query=${lat},${long}&units=${units}`;

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
