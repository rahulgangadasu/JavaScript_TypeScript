// Type alias for object type
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
    console.log(`Retiring on ${date.getDate()}`);
  },
};
employee.retire(new Date());

//Union type example
function kgsToLbs(weight: number | string): number {
  // weight can be either a number or a string
  if (typeof weight === "number") return weight * 2.20462;
  else return parseFloat(weight) * 2.20462;
}
console.log("weight : " + kgsToLbs(10)); // Output: 22.0462
console.log("weight : " + kgsToLbs("20kg")); // Output: 22.0462

// Intersection type example
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type DraggableAndResizable = Draggable & Resizable;
let textBox: DraggableAndResizable = {
  drag: () => {},
  resize: () => {},
};
textBox.drag();
textBox.resize();

// Literal type example
type Quantity = 50 | 100;
let quantity: Quantity = 100;
console.log(quantity);

// Nullable type example
function greet(name: string | null): string {
  // name can be either a string or null,
  // allowing us to handle cases where a name might not be provided.
  if (name) {
    return `Hello, ${name.toUpperCase()}!`;
  } else {
    return "Hello, World!";
  }
}
console.log(greet("Alice"));
console.log(greet(null));

// Optional chaining example

type Customer = {
  birthday?: Date;
  name?: string;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date(), name: "Alice" };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
// In this example, since getCustomer(0) returns null,
// the optional chaining operator (?.) prevents an error when trying to access customer.birthday.getFullYear()
// and instead returns undefined.

//Nullish coalescing operator example
function getCustomerName(id: number): string {
  const customer = getCustomer(id);
  return customer?.name ?? "Unknown"; // ?? is the nullish coalescing operator,
  // it returns the right-hand side value ("Unknown") if the left-hand side value (customer?.name) is null
  // or undefined.
}
console.log(getCustomerName(0)); // Output: "Unknown"

// Type assertion example
//let phone = document.getElementById("phone") as HTMLInputElement;
// In this example, we are asserting that the element with id "phone" is an HTMLInputElement.
// This allows us to access properties specific to HTMLInputElement, such as value,
// without TypeScript throwing an error.
// However, it's important to use type assertions carefully, as they can lead to runtime errors
// if the assertion is incorrect.
// Type assertion is used to tell the TypeScript compiler that a value is of a specific type,
// even if the compiler cannot infer it.
//phone.value; // Accessing the value property of the input element after asserting its type as HTMLInputElement

//let phone = <HTMLInputElement>document.getElementById("phone");
// This is another syntax for type assertion, but it can cause issues in JSX files,
// so the "as" syntax is generally preferred in modern TypeScript code.

//The unknown type example
function render(document: unknown): string | null {
  if (typeof document === "string") return document.toUpperCase();
  return null;
}
// In this example, the parameter document is of type unknown, which means it can be any value,
//  but we cannot perform any operations on it without first checking its type.
// By using a type guard (typeof document === "string"),
// we can safely access string-specific methods like toUpperCase().
// The unknown type is useful when you want to accept any value
// but still want to ensure type safety by performing runtime checks before using the value.
console.log(render("Hello, World!"));
console.log(render(null));

//never type example
// function generateError(message: string): never {
//   throw new Error(message);
// }
// In this example, the function generateError is of type never, which means it will never return a value.
// This is useful when you want to indicate that a function will always throw an error and never complete normally.
