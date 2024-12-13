const fs = require("fs");

// const book = {
//   title: "4 agreements",
//   author: "Ismael",
// };

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

//getting the JSON buffer data
const jsonBuffer = fs.readFileSync("1-json.json");
//turning buffer into a strig
const bookJSON = jsonBuffer.toString();
//then parsing the string into a usable object
const user = JSON.parse(bookJSON);

user.title = "Ty";
user.author = "Hello";

//turning the JSON vals back into strings
const users = JSON.stringify(user);
fs.writeFileSync("1-json.json", users);

console.log(user.title);
