let inputEl = document.querySelector(".inputEl");
const converterBtn = document.getElementById("convert");
let meterToFoot = document.getElementById("meter-foot");
let literToGallons = document.getElementById("liter-gallons");
let killogramsToPound = document.getElementById("killograms-pound");

converterBtn.addEventListener("click", convertUnit);

function convertUnit() {
    const inputValue = parseFloat(inputEl.value);

    // Convert meters to feet
    const feetValue = inputValue * 3.28084;
    meterToFoot.textContent = `${inputValue} meters = ${feetValue.toFixed(3)} feet | ${feetValue.toFixed(3)} feet = ${inputValue} meters`;

    // Convert liters to gallons
    const gallonsValue = inputValue * 0.264172;
    literToGallons.textContent = `${inputValue} liters = ${gallonsValue.toFixed(3)} gallons | ${gallonsValue.toFixed(3)} gallons = ${inputValue} liters`;

    // Convert kilograms to pounds
    const poundsValue = inputValue * 2.20462;
    killogramsToPound.textContent = `${inputValue} kilograms = ${poundsValue.toFixed(3)} pounds | ${poundsValue.toFixed(3)} pounds = ${inputValue} kilograms`;
}

