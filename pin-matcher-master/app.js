//pin generator
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

//calculator part
document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") calcInput.value = "";
  } else {
    const calcInput = document.getElementById("typed-numbers");
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});
//varify display pin and typed numbers
function verifyPin() {
  const pinDisplay = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const notifyError = document.getElementById("notify-fail");
  const notifySuccess = document.getElementById("notify-success");
  if (pinDisplay == typedNumbers) {
    notifySuccess.style.display = "block";
    notifyError.style.display = "none";
  } else {
    notifyError.style.display = "block";
    notifySuccess.style.display = "none";
  }
}
