const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Los Angels", (error, data) => {
  console.log("erroer", error);
  console.log("daat", data);
  forecast(-75.7088, 44.2545, (error, data) => {
    console.log("erroer", error);
    console.log("daat", data);
  });
});
