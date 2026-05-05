type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component Decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}
//Decorator composition, applying multiple decorators to a single class,works like f(g(x)))
function Pipe(constructor: Function) {
  console.log("Pipe Decorator called");
  constructor.prototype.pipe = true;
}

@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

const component = new ProfileComponent();
console.log(component);

//Method Decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before executing the method");
    originalMethod.call(this, ...args);
    console.log("After executing the method");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log(message);
  }
}
let person = new Person();
person.say("Hello, World!");

//Accessor Decorators
function Capitalize(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const originalGet = descriptor.get;
  descriptor.get = function () {
    const value = originalGet?.call(this);
    return typeof value === "string" ? value.toUpperCase() : value;
  };
}

class User {
  constructor(
    public firstname: string,
    public lastname: string,
  ) {}

  @Capitalize
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

let user = new User("rahul", "reddy");
console.log(user.fullName);

//Property Decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `The value of ${propertyName} must be at least ${length} characters long.`,
          );
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class Product {
  @MinLength(10)
  product_desc: string;
  constructor(product_desc: string) {
    this.product_desc = product_desc;
  }
}

let product = new Product("This.");
console.log(product.product_desc);
