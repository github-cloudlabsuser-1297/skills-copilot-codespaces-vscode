// Calculator Function
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Select an operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    // Prompt user for operation choice
    const choice = parseInt(prompt("Enter your choice (1/2/3/4):"));

    // Validate choice
    if (![1, 2, 3, 4].includes(choice)) {
        console.log("Invalid choice. Please restart the calculator.");
        return;
    }

    // Prompt user for numbers
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    // Validate numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Perform calculation based on choice
    let result;
    switch (choice) {
        case 1:
            result = num1 + num2;
            console.log(`The result of addition is: ${result}`);
            break;
        case 2:
            result = num1 - num2;
            console.log(`The result of subtraction is: ${result}`);
            break;
        case 3:
            result = num1 * num2;
            console.log(`The result of multiplication is: ${result}`);
            break;
        case 4:
            if (num2 === 0) {
                console.log("Error! Division by zero is not allowed.");
            } else {
                result = num1 / num2;
                console.log(`The result of division is: ${result}`);
            }
            break;
    }
}

// Run the calculator
calculator();