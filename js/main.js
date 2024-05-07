// select dom
let body = document.querySelector("body");
let value = document.querySelector("span");

let w = +prompt("Enter Your weight --> 50kg");
let h = +prompt("Enter Your height --> 1.70cm");

// function
function bmiCalc(weight, height) {
  let index = (value.textContent = Math.floor(weight / (height * height)));
  bmiStatus(index);
}
function bmiStatus(index) {
  // under Weight
  if (index <= 18) {
    body.classList.add("under");
  }
  //   normal
  if (index > 18 && index < 25) {
    body.classList.add("normal");
  }
  //   over weight
  if (index >= 25) {
    body.classList.add("over");
  }
}

// call
bmiCalc(w, h);
