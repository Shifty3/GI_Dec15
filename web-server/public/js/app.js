console.log("app.js");

const form = document.querySelector("form");
const input = document.querySelector("input");
const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");
const select = document.querySelector("select");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = input.value;
  const regex = /^[a-zA-Z0-9, \-'\.]+$]+$/;

  msg1.textContent = "Loading ...";

  if (regex.test(location)) {
    msg2.textContent = "Please try again!";
  } else {
    fetch(
      `http://localhost:3005/weather?address=${location}&units=${
        select.options[select.selectedIndex].value
      }`
    ).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          msg2.textContent = data.error;
        } else {
          msg1.textContent = data.location;
          msg2.textContent = data.forecast;
        }
      });
    });
  }

  console.log(location);
});
