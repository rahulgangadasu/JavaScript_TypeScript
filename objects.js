// //Object literal syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 2,
//         y: 3
//     },
//     isVisible : true,
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw();

//Factory function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const factory_circle = createCircle(10);
console.log(factory_circle);

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const constructor_circle = new Circle(100);
console.log(constructor_circle);

//Dynamic nature of objects
const circle = {
    radius: 1,
}
circle.color = 'red';
circle.draw = function() { };
console.log(circle);
delete circle.color;
delete circle.draw;
console.log(circle);

Circle.call({},110);//here {} is the value of this keyword in Circle function
Circle.apply({}, [120]);//here {} is the value of this keyword in Circle function and
                                   //[120] is the array of arguments passed to Circle function

//Enumerating properties of an object
const person = {
    person_name : 'Rahul',
    age : 28,
    work: function () {
        console.log('working');
    }
};

for(let key in person)
    console.log(key + ": " + person[key]);

// for(let key of person)
//     console.log(key); //TypeError: person is not iterable

for(let key of Object.keys(person)) //Object.keys() returns an array of keys of the object
    console.log(key + ": " + person[key]);

for(let entry of Object.entries(person)) //Object.entries() returns an array of key-value pairs of the object
        console.log(entry);

if('age' in person)
    console.log('age is present in person');

if('gender' in person) //nothing will be shown on console.
    console.log('gender is not present in person'); 

//Cloning an object
const another_person = Object.assign({gender : 'male'}, person); //Object.assign() is used to clone an object
console.log(another_person); 
const another_person2 = {...person}; //Spread operator is also used to clone an object
console.log(another_person2); 

let another_person3 = {education : 'Masters'}; //Another way to clone an object
for(let key in person)
    another_person3[key] = person[key];
console.log(another_person3);

//Strings
const myname = 'Rahul'; //String literal syntax
const last_name = new String('Gangadasu'); //String Object syntax
console.log(myname);
console.log(last_name);

//Template literals
const message = 
'This is my\n'
+ '\'first\' message';
console.log(message); //escape sequences are used to create a new line 
                     // and to include single quotes in the string

const another_message = 
`This is my 
'first' message`;
console.log(another_message); //Template literals are enclosed by backticks (`)

console.log(`message from ${myname} ${last_name}`); 
//Template literals can also include expressions inside ${} which will be evaluated and included in the string