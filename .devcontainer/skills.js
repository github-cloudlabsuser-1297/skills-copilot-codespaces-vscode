// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// function to covert Fahrenheit
// to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
// function to covert Celsius
// to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Driver code
let celsius = 25;
let fahrenheit = 77;
let kelvin = 298.15;
console.log(celsius + "°C is " + celsiusToFahrenheit(celsius) + "°F");
console.log(fahrenheit + "°F is " + fahrenheitToCelsius(fahrenheit) + "°C");
console.log(celsius + "°C is " + celsiusToKelvin(celsius) + "K");
console.log(kelvin + "K is " + (kelvin - 273.15) + "°C");
console.log(kelvin + "K is " + (kelvin - 273.15) * 9/5 + 32 + "°F");
// function to covert Fahrenheit
// to Kelvin       

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}
             
