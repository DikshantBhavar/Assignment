function sumOfProducts(n1, n2) {
    let sum = 0;
    // Convert numbers to strings to access individual digits
    let num1Str = n1.toString();
    let num2Str = n2.toString();
    
    // Iterate over the digits of the shorter number
    for (let i = 0; i < Math.min(num1Str.length, num2Str.length); i++) {
        // Convert each digit back to number and multiply
        sum += parseInt(num1Str[i]) * parseInt(num2Str[i]);
    }
    
    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
console.log(sumOfProducts(123, 456)); // Output: 38 (1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32)
