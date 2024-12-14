const path = require("path");
const express = require("express");
const hbs = require("hbs");

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
    title: "weather app",
    name: "ismael martinez",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Ismael",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
    name: "Ismael Martinez",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecase: "it is snowing",
    location: "buffalo",
  });
});

//starting a server
app.listen(3000, () => {
  console.log("SERVER IS UP");
});

app.get("/shoes", (res, req) => {
  req.send({
    products: [],
  });
});
