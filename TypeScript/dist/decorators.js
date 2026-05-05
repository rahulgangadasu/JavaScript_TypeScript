"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Component(options) {
    return (constructor) => {
        console.log("Component Decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
//Decorator composition, applying multiple decorators to a single class,works like f(g(x)))
function Pipe(constructor) {
    console.log("Pipe Decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
const component = new ProfileComponent();
console.log(component);
//Method Decorators
function Log(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before executing the method");
        originalMethod.call(this, ...args);
        console.log("After executing the method");
    };
}
class Person {
    say(message) {
        console.log(message);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
let person = new Person();
person.say("Hello, World!");
//Accessor Decorators
function Capitalize(target, propertyName, descriptor) {
    const originalGet = descriptor.get;
    descriptor.get = function () {
        const value = originalGet?.call(this);
        return typeof value === "string" ? value.toUpperCase() : value;
    };
}
class User {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
__decorate([
    Capitalize
], User.prototype, "fullName", null);
let user = new User("rahul", "reddy");
console.log(user.fullName);
//Property Decorators
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`The value of ${propertyName} must be at least ${length} characters long.`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Product {
    product_desc;
    constructor(product_desc) {
        this.product_desc = product_desc;
    }
}
__decorate([
    MinLength(10)
], Product.prototype, "product_desc", void 0);
let product = new Product("This.");
console.log(product.product_desc);
//# sourceMappingURL=decorators.js.map