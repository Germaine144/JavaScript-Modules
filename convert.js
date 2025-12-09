
function convertCelsius(celsius) {
   
    if (typeof celsius !== "number" || isNaN(celsius)) {
        return "Invalid temperature input";
    }

   
    const fahrenheit = (celsius * 9/5) + 32;

    let status = "";
    if (celsius > 30) {
        status = "Hot";
    } else if (celsius >= 15) {
        status = "Warm";
    } else {
        status = "Cold";
    }

   
    return `${celsius}°C = ${fahrenheit}°F (${status})`;
}

module.exports = convertCelsius;
