// Function Declaration
walk(); //Hoisting allows us to call the function before its declaration
function walk(){
    console.log("I am walking");
}

// Anonymous Function Expression
let run = function(){
    console.log("I am running");
}

let move = run; // move is now referencing the same function as run
run(); // Output: I am running
move(); // Output: I am running

// Function with arguments
function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log('sum : ' + sum(1, 2, 3, 6, 7));

// Rest Operator
function sum2(...args){ // ... is the rest operator and should be last parameter.
    return args.reduce((a,b) => a + b);
}
console.log('sum2 : ' + sum2(19, 20, 13, 96, 17));

//Default Parameters
function interest(principal, rate = 3.5, years){ // Default values for rate and years
    return principal * rate / 100 * years;
}
console.log('interest : ' + interest(10000)); // Uses default values for rate and years, but years is undefined, so the result will be NaN (Not a Number).
console.log('interest : ' + interest(10000, 4.5)); // Uses undefined for years.
console.log('interest : ' + interest(10000, 4.5, 10)); // Uses provided values for rate and years

const person ={
    first_name : 'rahul',
    last_name : 'gangadasu',
    get full_name(){
        return `${this.first_name} ${this.last_name}`;
    },
    set full_name(value){
        if(typeof value !== 'string') 
            throw new Error('Invalid input. Please provide a string.'); // Validate that the input is a string
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Invalid input. Please provide a full name with first and last name.');
        this.first_name = parts[0];
        this.last_name = parts[1];
    }
}

try {
    person.full_name = 'phanindra reddy';  // Using setter to update first_name and last_name
} 
catch (e) {
    alert(e); // Display error message if input is invalid
}

console.log(`${person.first_name} ${person.last_name}`); // Template Literals
console.log('getter access:' + person.full_name); // Accessing getter

const video = {
    title : 'My Video',
    tags : ['javascript', 'programming', 'web development'],
    showTags(tags){
        this.tags.forEach(function(tag){
            console.log(this.title, tag); // 'this' refers to the global object, not the video object
        }.bind(this));//,this); // Passing 'this' as the second argument to forEach to ensure it refers to the video object
        // Using bind to create a new function with 'this' set to the video object
    }
}

video.showTags(); // Calling the method to show tags

function playVideo(a, b){
    console.log(this); // 'this' refers to the global object (window in browsers)
}

playVideo.call({name: 'rahul'}, 1, 2 ); // Using call to set 'this' to a custom object 
playVideo.apply({name: 'rahul'}, [1, 2]); // Using apply to set 'this' to a custom object and pass arguments as an array
playVideo.bind({name: 'rahul'})(); // Using bind to create a new function with 'this' set to a custom object