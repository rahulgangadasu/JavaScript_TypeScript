let address ={
    street : 'W Royal Ln',
    city : 'Irving',
    zipCode : '75063'
}

let address1 = {
    street : 'Lake Street',
    city : 'Nashua',
    zipCode : '03060'
}

let address2 = {
    street : 'Lake Street',
    city : 'Nashua',
    zipCode : '03060' 
}

address3 = address1; //address3 and address1 are referencing the same object in memory

function showAddress(address){
    for(let key in address)
        console.log(key + ": " + address[key]);
}
showAddress(address);

//Factory function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}

//Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2){
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

let post = {
    title : 'a',
    body : 'b',
    author : 'c',
    views : 10,
    comments : [
        {author : 'x', body : 'y'},
        {author : 'z', body : 'w'}
    ],
    isLive : true
}
console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('p', 'q', 'r');
console.log(post1);

let priceRange = [{label : '$', tooltip : 'Inexpensive', minPerPerson : 0, maxPerPerson : 10},
                  {label : '$$', tooltip : 'Moderate', minPerPerson : 11, maxPerPerson : 20},
                  {label : '$$$', tooltip : 'Expensive', minPerPerson : 21, maxPerPerson : 50}
];
let restaurant = [{averagePerPerson : 5}];

