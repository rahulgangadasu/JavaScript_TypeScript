console.log("Hello, TypeScript!");

let age: number = 28;
if (age >= 18) {
  console.log("You are an adult.");
}
// Tuple type example
let user: [string, number] = ["Rahul", 28];
console.log(user);

// Enum type example
const enum Size {
  Small = 5,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Function with type annotations
function calculateTax(income: number, taxRate?: number): number {
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

// Object type example
// let employee: {
//   id: number;
//   name: string;
//   email?: string;
//   retire: (date: Date) => void;
// } = {};

//Type alias for object type
type Employee = {
  id: number;
  name: string;
  email?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Rahul",
  email: "rahul@example.com",
  retire: (date: Date) => {
    console.log(`Retiring on ${date.getMonth()}`);
  },
};

console.log(employee, employee.retire(new Date()));
