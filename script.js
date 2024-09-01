const display = document.getElementById('display');
const inputRed = document.getElementById('input-red');
const inputGreen = document.getElementById('input-green');
const inputBlue = document.getElementById('input-blue');

function updateBackgroundColor() {
    display.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
}

inputRed.addEventListener('input', updateBackgroundColor);
inputGreen.addEventListener('input', updateBackgroundColor);
inputBlue.addEventListener('input', updateBackgroundColor);

updateBackgroundColor();