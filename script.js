//buttons in the header that control which calculator is being used
let speedCalcBtn = document.querySelector(".speed-calc-btn");
let projectileCalcBtn = document.querySelector(".projectile-calc-btn");

//calculator tabs that can be switched between
let speedCalc = document.querySelector(".calc-one");
let projectileCalc = document.querySelector(".calc-two");

//buttons to choose the unkown you want to find
let findInitVelocity = document.querySelector(".find-velocity-i-ua");

//input fields for the uniform acceleration calculator
let initVelocityUA = document.querySelector("#velocity-i-ua");
let finalVelocityUA = document.querySelector("#velocity-f-ua");
let timeChangeUA = document.querySelector("#time-change-ua");
let displacementUA = document.querySelector("#displacement-ua");
let accelerationUA = document.querySelector("#acceleration-ua");

//calculate button
let calculateBtnUA = document.querySelector(".calculate-btn");

//final answer display
let answer = document.querySelector(".answer");

//error message display
let errorMsg = document.querySelector(".error-message");

//click event handler for calculator buttons that toggle between the types
speedCalcBtn.addEventListener("click", () => {
  speedCalc.style.display = "flex";
  projectileCalc.style.display = "none";
});

projectileCalcBtn.addEventListener("click", () => {
  speedCalc.style.display = "none";
  projectileCalc.style.display = "flex";
});

//code to choose which unknown you want to calculate////////////////////////////

//NEED TO FINISH ADDING ALL THE OTHER SELECTOR BUTTONS AND CODING THE CALCULATIONS !!!!!!!!!!!!!!!!!

findInitVelocity.addEventListener("click", () => {
  initVelocityUA.disabled = true;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = false;
  displacementUA.disabled = false;
  accelerationUA.disabled = false;
});

////////////////////////////////////////////////////////////////////////////////

//final calculate button function
calculateBtnUA.addEventListener("click", () => {
  //numerical answer, and NOT the answer
  let finalAnswer = 0;

  //get values that are entered by the user
  let initVelocityUAVal = parseInt(initVelocityUA.value);
  let finalVelocityUAVal = parseInt(finalVelocityUA.value);
  let timeChangeUAVal = parseInt(timeChangeUA.value);
  let displacementUAVal = parseInt(displacementUA.value);
  let accelerationUAVal = parseInt(accelerationUA.value);

  //arrays to store text length and data values
  let dataTextLenArr = [
    initVelocityUA.value.length,
    finalVelocityUA.value.length,
    timeChangeUA.value.length,
    displacementUA.value.length,
    accelerationUA.value.length,
  ];

  let dataArr = [
    initVelocityUAVal,
    finalVelocityUAVal,
    timeChangeUAVal,
    displacementUAVal,
    accelerationUAVal,
  ];

  //check for more than 2 empty data fields (there cannnot be more than 2 empty data fields)
  let emptyData = 0;
  for (let i = 0; i < dataTextLenArr.length; i++) {
    if (dataTextLenArr[i] == 0) {
      emptyData++;
    }

    if (emptyData == 2) {
      errorMsg.innerText = "THERE CANNOT BE MORE THAN 1 EMPTY DATA FIELD";
      return;
    }
  }

  //if initial velocity is not entered then use equation 4 to solve for initial velocity

  answer.innerText = finalAnswer;
});
