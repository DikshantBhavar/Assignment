function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    return result;
}

// Example usage:
console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '-')); // Output: 2
console.log(calculate(5, 3, '*')); // Output: 15
console.log(calculate(5, 0, '/')); // Output: Cannot divide by zero
console.log(calculate(5, 3, '$')); // Output: Invalid operation
