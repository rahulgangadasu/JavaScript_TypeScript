function Shape(color){
    this.color = color;
}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

// Circle is a subclass of Shape
function Circle(radius, color){
    Shape.call(this, color); // to call the parent constructor and set the color property for Circle instances
    this.radius = radius;
}
Circle.prototype.draw = function(){
    console.log('draw');
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);// to set up the prototype chain so that Child inherits from Parent
    Child.prototype.constructor = Child; // to fix the constructor property after setting the prototype
}
// Circle.prototype = Object.create(Shape.prototype); // to set up the prototype chain so that Circle inherits from Shape
// Circle.prototype.constructor = Circle; // to fix the constructor property after setting the prototype

extend(Circle, Shape); // to set up the prototype chain so that Circle inherits from Shape

const s = new Shape('blue');
const c = new Circle(10, 'red');


// Square is a subclass of Shape
function Square(side){
    this.side = side;
}

extend(Square, Shape); // to set up the prototype chain so that Square inherits from Shape

// Square.prototype = Object.create(Shape.prototype); // to set up the prototype chain so that Square inherits from Shape
// Square.prototype.constructor = Square; // to fix the constructor property after setting the prototype

function Circle2(){
}

extend(Circle2, Shape); // to set up the prototype chain so that Circle2 inherits from Shape

Circle2.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this); // to call the duplicate method from the Shape prototype
    console.log('duplicate Circle2'); // to override the duplicate method for Circle2 instances
}

const c2 = new Circle2();

function Square2(){

}

extend(Square2, Shape); // to set up the prototype chain so that Square2 inherits from Shape

Square2.prototype.duplicate = function(){
    console.log('duplicate square2'); // to override the duplicate method for Square2 instances 
}

const shapes = [new Circle2(), new Square2()];

for (let shape of shapes)
    shape.duplicate(); // to call the duplicate method for each shape in the array, demonstrating polymorphism



function mixin(target, ...sources){
    Object.assign(target, ...sources); // to mix in the behaviors from the source objects into the target prototype
}


const canEat = {
    eat : function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk : function(){
        console.log('walking');
    }
};

const canSwim = {
    swim : function(){
        console.log('swimming');
    }
};

function Person (){

}
mixin(Person.prototype, canEat, canWalk); // to mix in the canEat and canWalk behaviors into the Person prototype

const person = new Person();
console.log(person);

function GoldFish (){
} 
mixin(GoldFish.prototype, canEat, canSwim); // to mix in the canEat and canSwim behaviors into the GoldFish prototype

const goldFish = new GoldFish();
console.log(goldFish);