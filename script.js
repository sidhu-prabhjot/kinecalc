//buttons in the header that control which calculator is being used
let speedCalcBtn = document.querySelector(".speed-calc-btn");
let projectileCalcBtn = document.querySelector(".projectile-calc-btn");

//calculator tabs that can be switched between
let speedCalc = document.querySelector(".calc-one");
let projectileCalc = document.querySelector(".calc-two");

//input fields for the uniform acceleration calculator
let initVelocityUA = document.querySelector("#velocity-i-ua");

//calculate button
let calculateBtn = document.querySelector(".calculate-btn");

//final answer display
let answer = document.querySelector(".answer");

//click event handler for calculator buttons that toggle between the types
speedCalcBtn.addEventListener("click", () => {
  speedCalc.style.display = "block";
  projectileCalc.style.display = "none";
});

projectileCalcBtn.addEventListener("click", () => {
  speedCalc.style.display = "none";
  projectileCalc.style.display = "block";
});

//final calculate button function
calculateBtn.addEventListener("click", () => {
  let initVelocityUAText = initVelocityUA.value;
  answer.innerText = initVelocityUAText;
});
