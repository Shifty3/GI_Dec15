const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const port = process.env.PORT || 3000;

//calls on express
const app = express();

//define paths for expres config
const pubDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//set handle bars for engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//set up  static directory to serve
app.use(express.static(pubDirPath));

//creating different routes for users
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "ismael martinez",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Ismael Martinez",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Ismael",
  });
});

// app.get("/weather", (req, res) => {
//   res.send({
//     forecast: "its is snowing",
//     location: "philly",
//   });
// });

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Must provide a address",
    });
  }
  const { _, units } = req.query;

  geocode(req.query.address, (error, { lat, long, location }) => {
    if (error) {
      return res.send({ error });
    }

    forecast(
      lat,
      long,
      (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        return res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      },
      units
    );
  });

  // res.send({
  //   forecast: "it is snowing",
  //   location: "buffalo",
  //   address: req.query.address,
  // });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ismael",
    errorMessage: "Help article not found",
  });
});

//gonna catching any request that doesnt match
app.get("/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ismael",
    errorMessage: "Page Not Found",
  });
});

//starting a server
app.listen(3005, () => {
  console.log("SERVER IS UP");
});
