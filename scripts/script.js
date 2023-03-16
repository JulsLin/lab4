const courselist = [
    {code: "ACIT 1620", name: "Web Fundamental Technologies"},
    {code: "ACIT 1420", name: "Introduction to Systems Administration"},
    {code: "ACIT 1630", name: "Database System"}
];

let input = prompt("Please enter a 4-digit number: ");

while ((isNaN(input)) + input.length !== 4) {
    input = prompt("Invalid input. Please enter a 4-digit number.")
}