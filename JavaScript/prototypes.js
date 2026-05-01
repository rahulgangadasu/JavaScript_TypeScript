let person = { name : 'Rahul'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // toString is a method of Object.prototype
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false, // Make the 'name' property read-only
    enumerable : false, // Make the 'name' property non-enumerable
    configurable : false // Make the 'name' property non-configurable
});

console.log(person);

function Circle(radius){
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

Circle.prototype.draw = function(){
    console.log('draw');
}
const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function(){
    return 'Circle with radius ' + this.radius;
}
// Returns all instance properties of c1, excluding properties from the prototype
console.log(Object.keys(c1));

// This will log both instance properties and prototype properties
for (let key in c1){
    console.log(key);
}
