const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

let adress = process.argv[2];

if (!adress) {
  console.log("please provide an adress");
} else {
  geocode(adress, (error, data) => {
    if (error) {
      return console.log(error);
    }

    console.log("erroer", error);
    console.log("daat", data);
    forecast(data.lat, data.long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
