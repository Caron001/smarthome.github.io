function turnOn() {
  fetch("/led/on");
}

function turnOff() {
  fetch("/led/off");
}

function setAutoMode() {
  fetch("/mode/auto");
}
function setManualMode() {
  fetch("/mode/manual");
}
