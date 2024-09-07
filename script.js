
// Function to handle the temperature conversion
function conversion() {
    // Get the input value from the field
    let number = document.getElementById("field").value;
    
    // Check if the value is not empty and is a valid number
    if (number === "") {
        document.getElementById("results").innerHTML = "Please enter a temperature value.";
        return;
    }

    let temp = parseFloat(number); // Convert the input value to a float (number)
    let resultText = "";
    
    // Get the selected radio button
    let isCelsiusToFahrenheit = document.getElementById("Fahrenheit").checked;
    let isFahrenheitToCelsius = document.getElementById("celsius").checked;

    // Perform the appropriate conversion based on the selected radio button
    if (isCelsiusToFahrenheit) {
        // Celsius to Fahrenheit conversion: (C * 9/5) + 32
        let fahrenheit = (temp * 9/5) + 32;
        resultText = `${temp.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (isFahrenheitToCelsius) {
        // Fahrenheit to Celsius conversion: (F - 32) * 5/9
        let celsius = (temp - 32) * 5/9;
        resultText = `${temp.toFixed(2)}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        resultText = "Please select a conversion type.";
    }

    // Display the result
    document.getElementById("results").innerHTML = resultText;
}

// Function to reset the form
function reset() {
    // Clear the input field
    document.getElementById("field").value = "";

    // Uncheck the radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    // Clear the results paragraph
    document.getElementById("results").innerHTML = "";
}


    


