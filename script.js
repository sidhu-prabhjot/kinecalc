//buttons in the header that control which calculator is being used
let speedCalcBtn = document.querySelector(".speed-calc-btn");
let projectileCalcBtn = document.querySelector(".projectile-calc-btn");

//calculator tabs that can be switched between
let speedCalc = document.querySelector(".calc-one");
let projectileCalc = document.querySelector(".calc-two");

//click event handler for calculator buttons
speedCalcBtn.addEventListener("click", () => {
  speedCalc.style.display = "block";
  projectileCalc.style.display = "none";
});
