'use strict'; // Enable strict mode to catch common coding mistakes and unsafe actions

class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){}// this is a method defined inside the constructor, 
                                // it will be created for each instance of Circle
    } 
    draw(){ // this is a method defined outside the constructor, 
            // it will be shared among all instances of Circle
        console.log('draw');
    }

    static parse(str){ // this is a static method, it can be called on the class itself, not on instances
       const { radius } = JSON.parse(str); // parse the JSON string to get the radius value
       return new Circle(radius); // create a new Circle instance with the parsed radius and return it
    }
}

const circle = Circle.parse('{"radius": 27}'); // call the static method directly to create a Circle instance


const another = function(){
    this.draw = function(){console.log(this);}
};

const anotherCircle = new another();
//Method call.
anotherCircle.draw(); // this will log the anotherCircle object, 
                      // demonstrating that 'this' refers to the instance of the another function

//if we use a class instead of a function 
// then this will be in strict mode by default and will be undefined in this case.
const draw = anotherCircle.draw;
//Function call.
draw(); // this will log the global object (or undefined in strict mode),
        // demonstrating that 'this' refers to the global object when the function is called without an object context

// private members in classes
const _size = Symbol(); // create a unique symbol to be used as a key for the private member
const _draw = Symbol(); // create another unique symbol for a private method
const _side = new WeakMap(); // create a WeakMap to store private members, 
                             // this will allow us to associate private data with instances without exposing it
const _move = new WeakMap(); // create another WeakMap for a private method

class Square{
    constructor(size, side){
        this[_size] = size; // use the symbol as a key to store the private member,
                            // this will not be accessible outside the class
        _side.set(this,side); // use the WeakMap to store the private member,
                             // this will also not be accessible outside the class
        _move.set(this, () => console.log('move', this)); // use the WeakMap to store a private method,
                                                          //using an arrow function to ensure that 
                                                          // 'this' refers to the instance of Square when the method is called
    }
    [_draw](){// define a private method using a symbol key
        _move.get(this)(); // call the private method stored in the WeakMap,
                           // this will work because it is called within the class context
         console.log(this[_size]); // access the private member using the symbol key,
                                   // this will also work because it is called within the class context
    }
    draw(){
        this[_draw](); // call the private method from a public method,
                       //  this will work because it is called within the class context
    }
}

const square = new Square(5);
console.log(Object.getOwnPropertyNames(square)); // this will not show the private member, as it is stored using a symbol key
console.log(Object.getOwnPropertySymbols(square)); // this will show the symbol key, but not the value of the private member
square.draw(); // this will call the public method, which in turn calls the private method,
              // and it will log the value of the private member, demonstrating that it is accessible within the class context


//getters and setters
const _length = new WeakMap(); // create a WeakMap to store the private member for length

class Rectangle{
    constructor(length){
        _length.set(this, length); // use the WeakMap to store the private member for length
    }
    get length(){
        return _length.get(this); // define a getter to access the private member for length,
                                  // this will allow us to access the length property as if it were a public member
    }
    set length(value){
        if(value <= 0) throw new Error('Length must be positive'); // define a setter to validate and set the private member for length,
                                                                    // this will allow us to set the length property as if it were a public member, while still enforcing validation
        _length.set(this, value); // set the private member for length using the WeakMap
    }
}

// this will create a new Rectangle instance with a length of 10 and log the length using the getter
console.log('Rectangle Length :' + new Rectangle(10).length);

//Inheritance
class Shape{
    constructor(color){
        this.color = color; // define a property for color in the base class
    }
    move(){
        console.log('move');
    }
}

class Triangle extends Shape{ // define a Triangle class that inherits from Shape
    constructor(color, side1){
        super(color); // call the base class constructor to initialize the color property
        this.side1 = side1; // define a property specific to Triangle
    }
    draw(){ // define a method specific to Triangle
        console.log('draw');
    }
}
const triangle = new Triangle('red', 5); // create a new Triangle instance with a color and a side length