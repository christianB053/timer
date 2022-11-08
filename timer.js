const timeForm = document.querySelector(".time-form");
const inpHrs = timeForm.querySelector(".inp-hrs");
const inpMin = timeForm.querySelector(".inp-min");
const inpSec = timeForm.querySelector(".inp-sec");
const startBtn = timeForm.querySelector(".start-btn");
const resetBtn = timeForm.querySelector(".reset-btn");
const startImg = timeForm.querySelector(".start-img");
const resetImg = timeForm.querySelector(".reset-img");

function startTimer() {
  if (inpHrs.value || inpMin.value || inpSec.value) {
    startImg.src = "images/start-default.png";
    resetImg.src = "images/reset-default.png";
  }
}

function handleStartBtn() {
  if (startImg.src == "http://127.0.0.1:5500/images/start-default.png")
    startImg.src = "images/pause.png";
  else if (startImg.src == "http://127.0.0.1:5500/images/pause.png") {
    startImg.src = "images/start-default.png";
  }
}

function handleResetBtn() {
  inpHrs.value = "";
  inpMin.value = "";
  inpSec.value = "";
  startImg.src = "images/start-disabled.png";
  resetImg.src = "images/reset-disabled.png";
}

timeForm.addEventListener("input", startTimer);
startBtn.addEventListener("click", handleStartBtn);
resetBtn.addEventListener("click", handleResetBtn);
