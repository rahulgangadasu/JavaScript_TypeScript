"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("age", 30);
console.log(pair);
console.log(pair.key);
console.log(pair.value);
//generic function
function createKeyValuePair(key, value) {
    return new KeyValuePair(key, value);
}
let pair2 = createKeyValuePair("name", "Alice");
console.log(pair2);
console.log(pair2.key);
console.log(pair2.value);
let myInterface = {
    key: "age",
    value: 30,
};
console.log(myInterface);
console.log(myInterface.key);
console.log(myInterface.value);
let myConstraintInterface = {
    value: "Alice",
};
console.log(myConstraintInterface);
console.log(myConstraintInterface.value);
//Extending generic classes
class MyGenericClass {
    value;
    constructor(value) {
        this.value = value;
    }
}
class MyExtendedGenericClass extends MyGenericClass {
    constructor(value) {
        super(value);
    }
}
let myExtendedGenericClass = new MyExtendedGenericClass(10);
console.log(myExtendedGenericClass);
console.log(myExtendedGenericClass.value);
//# sourceMappingURL=generics.js.map