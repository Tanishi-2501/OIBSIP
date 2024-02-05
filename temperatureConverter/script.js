let degree = document.getElementById('degree');
let type = document.getElementById('type');
let ans = document.getElementById('result');

const converter = (value, typeToConvert) => {
    value = parseFloat(degree.value);
    typeToConvert = type.value;

    if (typeToConvert === 'CelsiusToFahrenheit') {
        ans.innerText = `${value}°C = ${(9 / 5 * value) + 32}°F`;
    }
    else if (typeToConvert === 'FahrenheitToCelsius') {
        ans.innerText = `${value}°F = ${(value - 32) * 5 / 9}°C`;
    }
}

document.getElementById('convert').addEventListener('click', () => {
    if (degree.value === "" || type.value === "") {
        alert("Please  enter a number and select the conversion type")
    }
    else {
        converter(degree, type);
    }
})