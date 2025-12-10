// convert.js

export function convertCelsius(celsius) {
    // Validate input
    if (typeof celsius !== "number" || isNaN(celsius)) {
        return "Invalid temperature input";
    }

    // Convert to Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Determine status
    let status = "";
    if (celsius > 30) {
        status = "Hot";
    } else if (celsius >= 15) {
        status = "Warm";
    } else {
        status = "Cold";
    }

    // Return string using template literal
    return `${celsius}°C = ${fahrenheit}°F (${status})`;
}
