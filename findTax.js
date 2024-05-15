function findTax(salary) {
    let taxAmount;
    switch (true) {
        case (salary > 1500000):
            taxAmount = salary * 0.3;
            break;
        case (salary > 1000000):
            taxAmount = salary * 0.2;
            break;
        case (salary > 500000):
            taxAmount = salary * 0.1;
            break;
        default:
            taxAmount = 0;
    }
    return taxAmount;
}

// Example usage:
console.log(findTax(400000)); // Output: 0 (0% tax on salary less than or equal to 500000)
console.log(findTax(600000)); // Output: 60000 (10% tax on salary between 500000 and 1000000)
console.log(findTax(1200000)); // Output: 240000 (20% tax on salary between 1000000 and 1500000)
console.log(findTax(2000000)); // Output: 600000 (30% tax on salary greater than 1500000)
