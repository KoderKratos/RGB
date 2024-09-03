const display = document.getElementById('display');
const inputRed = document.getElementById('input-red');
const inputGreen = document.getElementById('input-green');
const inputBlue = document.getElementById('input-blue');
const invertBtn = document.getElementById('colour-inverter');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');

function updateBackgroundColor() {
    display.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
    redValue.textContent = inputRed.value;
    greenValue.textContent = inputGreen.value;
    blueValue.textContent = inputBlue.value;
}

function invertClr() {
    inputRed.value = 255 - inputRed.value;
    inputGreen.value = 255 - inputGreen.value;
    inputBlue.value = 255 - inputBlue.value;
    
    updateBackgroundColor();
}

inputRed.addEventListener('input', updateBackgroundColor);
inputGreen.addEventListener('input', updateBackgroundColor);
inputBlue.addEventListener('input', updateBackgroundColor);
updateBackgroundColor();
invertBtn.addEventListener('click', invertClr);
