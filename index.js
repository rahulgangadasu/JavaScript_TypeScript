let person = {
    name: 'Rahul',
    age: 28,
    city: 'New Hampshire'
};
person.city = 'Texas';
person['age'] = 29;
let key = 'name';
person[key] = 'Rahul Gangadasu';
person['country'] = 'USA';
console.log(person);

function greet(name, middleName) {
    console.log('Hello' + ' ' + name + ' ' + middleName + '!');
}
greet('Mahesh', 'Babu');
console.log(true == '1'); //converts '1' to boolean true and then compares
console.log('moderate' =='Moderate');
for(let key in person) 
    console.log(key + ': ' + person[key]);
const colors = ['red', 'green', 'blue'];
for(let index in colors) //index here is the index of the array element, not the element itself
    console.log(index + ': ' + colors[index]);
for(let color of colors) //color here is the element of the array, not the index
    console.log(color);