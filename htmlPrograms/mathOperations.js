var number1value, number2value;

function getValues() {
  number1value = parseInt(document.getElementById('firstNo').value);
  number2value = parseInt(document.getElementById('secondNo').value);
}

function addNumbers() {
  getValues();
  document.getElementById('result').innerText = number1value + number2value;
};

function subtrNumbers() {
  getValues();
  document.getElementById('result').innerText = number1value - number2value;
}

function multiNumbers() {
  getValues();
  document.getElementById('result').innerText = number1value * number2value;
}

function divisNumbers() {
  getValues();
  document.getElementById('result').innerText = number1value / number2value;
}