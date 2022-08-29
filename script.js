//buttons in the header that control which calculator is being used
let speedCalcBtn = document.querySelector(".speed-calc-btn");
let projectileCalcBtn = document.querySelector(".projectile-calc-btn");

//calculator tabs that can be switched between
let speedCalc = document.querySelector(".calc-one");
let projectileCalc = document.querySelector(".calc-two");

//buttons to choose the unkown you want to find
let findInitVelocityUA = document.querySelector(".find-velocity-i-ua");
let findFinalVelocityUA = document.querySelector(".find-velocity-f-ua");
let findTimeChangeUA = document.querySelector(".find-time-change-ua");
let findDisplacementUA = document.querySelector(".find-displacement-ua");
let findAccelerationUA = document.querySelector(".find-acceleration-ua");

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
let errorMsgCont = document.querySelector(".error-message-container");

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

findInitVelocityUA.addEventListener("click", () => {
  initVelocityUA.disabled = true;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = false;
  displacementUA.disabled = false;
  accelerationUA.disabled = false;
});

findFinalVelocityUA.addEventListener("click", () => {
  initVelocityUA.disabled = false;
  finalVelocityUA.disabled = true;
  timeChangeUA.disabled = false;
  displacementUA.disabled = false;
  accelerationUA.disabled = false;
});

findTimeChangeUA.addEventListener("click", () => {
  initVelocityUA.disabled = false;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = true;
  displacementUA.disabled = false;
  accelerationUA.disabled = false;
});

findDisplacementUA.addEventListener("click", () => {
  initVelocityUA.disabled = false;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = false;
  displacementUA.disabled = true;
  accelerationUA.disabled = false;
});

findAccelerationUA.addEventListener("click", () => {
  initVelocityUA.disabled = false;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = false;
  displacementUA.disabled = false;
  accelerationUA.disabled = true;
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
      //whatever value is not entered, make it an x
      dataArr[i] = "x";
      emptyData++;
    }

    if (emptyData == 3) {
      errorMsg.innerText = "THERE CANNOT BE MORE THAN 1 EMPTY DATA FIELD";
      errorMsgCont.style.backgroundColor = "#ff9494";
      return;
    }
  }

  //if initial velocity is the unkown variable
  if (initVelocityUA.disabled) {
    finalAnswer = calcInitVelocityUA(
      dataArr[1],
      dataArr[2],
      dataArr[3],
      dataArr[4]
    );
  }
  //if final velocity is the unkown variable
  if (finalVelocityUA.disabled) {
    finalAnswer = calcFinalVelocityUA(
      dataArr[0],
      dataArr[2],
      dataArr[3],
      dataArr[4]
    );
  }
  //if timeChange is the unkown variable
  if (timeChangeUA.disabled) {
    finalAnswer = calcTimeChangeUA(
      dataArr[0],
      dataArr[1],
      dataArr[3],
      dataArr[4]
    );
  }
  //if dispalcement is the unkown variable
  if (displacementUA.disabled) {
    finalAnswer = calcDisplacementUA(
      dataArr[0],
      dataArr[1],
      dataArr[2],
      dataArr[4]
    );

  //if acceleration is the unkown variable
  if (accelerationUA.disabled) {
    finalAnswer = calcAccelerationUA(
      dataArr[0],
      dataArr[1],
      dataArr[2],
      dataArr[3]
    );
  }

  answer.innerText = finalAnswer;

  //reset the input fields to empty
  initVelocityUA.value = "";
  finalVelocityUA.value = "";
  timeChangeUA.value = "";
  displacementUA.value = "";
  accelerationUA.value = "";
});

//Calculate initial velocity//////////
function calcInitVelocityUA(
  finalVelocity,
  timeChange,
  displacement,
  acceleration
) {
  let initialVelocity = 0;

  //calculate init velocity without finalVelocity
  if (finalVelocity == "x") {
    let component = -0.5 * acceleration * (timeChange * timeChange);
    initialVelocity = displacement + component;
    initialVelocity /= timeChange;
  }
  //calculate init velocity wihtout change in time
  else if (timeChange == "x") {
    let component = -2 * acceleration * displacement;
    initialVelocity = finalVelocity * finalVelocity + component;
    initialVelocity = Math.sqrt(initialVelocity);
  }
  //calculate init velocity without displacement
  else if (displacement == "x") {
    let component = -1 * acceleration * timeChange;
    initialVelocity = finalVelocity + component;
  }
  //calculate init velocity without acceleration
  else {
    let component = displacement / (0.5 * timeChange);
    initialVelocity = component - finalVelocity;
  }

  //calculated initial velocity is returned
  return initialVelocity;
}

function calcFinalVelocityUA(
  initVelocity,
  timeChange,
  displacement,
  acceleration
) {
  let finalVelocity = 0;

  //calculate final velocity without initial velocity
  if (initVelocity == "x") {
    let component = 0.5 * acceleration * Math.pow(timeChange, 2);
    finalVelocity = displacement + component;
    finalVelocity /= timeChange;
  }
  //calculate final velocity without change in time
  else if (timeChange == "x") {
    let component = 2 * acceleration * displacement;
    let toBeRooted = Math.pow(initVelocity, 2) + component;
    finalVelocity = Math.sqrt(toBeRooted);
  }
  //calculate final velocity without displacement
  else if (displacement == "x") {
    let component = acceleration * timeChange;
    finalVelocity = initVelocity + component;
  }
  //calculate final velocity without acceleration
  else {
    let component = displacement / (0.5 * timeChange);
    finalVelocity = component - initVelocity;
  }

  //calculate final velocity is returned
  return finalVelocity;
}

function calcTimeChangeUA(
  initVelocity,
  finalVelocity,
  displacement,
  acceleration
) {
  let timeChange = 0;

  //calculate change in time without initial velocity
  if (initVelocity == "x") {
    //let y = -1/2 * acceleration
    //let n = final velocity
    //let d = displacement
    //calculate initial velocity then use it to calculate timeChange
    let n = finalVelocity;
    let d = displacement;
    let twoYAComp = 2 * acceleration * d;
    let sqrtComp = Math.sqrt(Math.pow(n, 2) - twoYAComp);
    timeChange = (n - sqrtComp) / acceleration;
  }
  //calculate change in time without final velocity
  else if (finalVelocity == "x") {
    let twoADComp = 2 * acceleration * displacement;
    let sqrtComp = Math.sqrt(Math.pow(initVelocity, 2) + twoADComp);
    timeChange = (sqrtComp - initVelocity) / acceleration;
  }
  //calculate change in time without displacement
  else if (displacement == "x") {
    timeChange = (finalVelocity - initVelocity) / acceleration;
  }
  //calculate change in time without acceleration
  else {
    timeChange = (2 * displacement) / (initVelocity + finalVelocity);
  }

  //calculated initial velocity is returned
  return timeChange;
}

function calcDisplacementUA(
  initVelocity,
  finalVelocity,
  timeChange,
  acceleration
) {
  let displacement = 0;

  //calculate displacement without initial velocity
  if (initVelocity == "x") {
    displacement =
      finalVelocity * timeChange - 0.5 * acceleration * Math.pow(timeChange, 2);
  }
  //calculate displacement without final velocity
  else if (finalVelocity == "x") {
    displacement =
      initVelocity * timeChange + 0.5 * acceleration * Math.pow(timeChange, 2);
  }
  //calculate displacement without change in time
  else if (timeChange == "x") {
    let velocityDiffComp =
      Math.pow(finalVelocity, 2) - Math.pow(initVelocity, 2);
    displacement = velocityDiffComp / (2 * acceleration);
  }
  //calculate displacement without acceleration or when all input fields have data
  else {
    displacement = 0.5 * (initVelocity + finalVelocity) * timeChange;
  }

  return displacement;
}

function calcAccelerationUA(
  initVelocity,
  finalVelocity,
  timeChange,
  displacement
) {
  let acceleration = 0;

  if (initVelocity == "x") {
    let numerator = displacement - finalVelocity * timeChange;
    let denominator = -0.5 * Math.pow(timeChange, 2);
    acceleration = numerator / denominator;
  }

  return acceleration;
}

//initialization of uniform acceleration calculator
function initUACalculator() {
  initVelocityUA.disabled = true;
  finalVelocityUA.disabled = false;
  timeChangeUA.disabled = false;
  displacementUA.disabled = false;
  accelerationUA.disabled = false;
}

//initialization code for the calculators
initUACalculator();
