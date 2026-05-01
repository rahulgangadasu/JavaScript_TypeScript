"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, TypeScript!");
let age = 28;
if (age >= 18) {
    console.log("You are an adult.");
}
// Tuple type example
let user = ["Rahul", 28];
console.log(user);
// Enum type example
var Size;
(function (Size) {
    Size[Size["Small"] = 5] = "Small";
    Size[Size["Medium"] = 6] = "Medium";
    Size[Size["Large"] = 7] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// Function with type annotations
function calculateTax(income, taxRate) {
    //taxRate is optional, if not provided, it will be undefined.
    //We can use a default value of 0.3 (30%) for taxRate when it's not provided.
    //if the caller does not specify a tax rate, the function will use 0.3 as the default tax rate for calculations.
    if ((taxRate || 0.3) < 0.5) {
        return income * (taxRate || 0.3) - 5000; // Deducting a fixed amount for lower tax rates
    }
    return income * (taxRate || 0.3);
}
let tax = calculateTax(50000, 0.2); // Using default tax rate
console.log(`Tax to be paid: ${tax}`);
let employee = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    retire: (date) => {
        console.log(`Retiring on ${date.getMonth()}`);
    },
};
console.log(employee, employee.retire(new Date()));
//# sourceMappingURL=index.js.map