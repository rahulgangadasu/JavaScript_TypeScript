const numbers = [10, 29, 54];

numbers.push(36, 98, 77, 11); // Add elements to the end of the array

numbers.unshift(7, 3); // Add elements to the beginning of the array

numbers.splice(5, 2, 'a', 11); // Add element at index 5 and remove 2 elements starting from index 5

console.log(numbers);

console.log('length: ' + numbers.length); // Get the length of the array

console.log("index of 3: " + numbers.indexOf(3)); // Get the index of the first occurrence of 3

console.log("last index of 11: " + numbers.lastIndexOf(11)); // Get the index of the last occurrence of 11

console.log("includes 5: " + numbers.includes(5)); // Check if 5 is in the array

console.log("index of 11 starting from index 7: " + numbers.indexOf(11, 7)); // Get the index of the first occurrence of 11 starting from index 7

const courses = [{id : 1, name: 'Node.js'}, {id : 2, name: 'React.js'}];
const course = courses.find(function(course){
    return course.name === 'Node.js';
}); // Find the first element that satisfies the provided testing function
console.log("course: " + course.name);

const course2 = courses.find(course => course.name === 'React.js'); // Using arrow function
console.log("course2: " + course2.name);

const course3 = courses.find(course => course.name === 'Angular'); // This will return undefined since there is no course with name 'Angular'
console.log("course3: " + course3);

const numbers2 = [10, 20, 30, 33, 4, 5];
console.log('last element: ' + numbers2.pop()); // Remove the last element from the array
console.log('first element: ' + numbers2.shift()); // Remove the first element from the array
console.log('middle elements: ' + numbers2.splice(2, 1)); // Remove 1 element starting from index 2 (which is the element 30 in this case)
console.log(numbers2);

let number_array = [1, 2, 3, 4, 5];
another_array = number_array; // This will create a new reference to the same array in memory, 
                              // so both number_array and another_array will point to the same array [1, 2, 3, 4, 5]. 

// number_array = [];  // This will create a new empty array and assign it to number_array,
                    // but the original array [1, 2, 3, 4, 5] will still exist in memory if there are other references to it.

// number_array.length = 0; // This will clear the original array [1, 2, 3, 4, 5] by setting its length to 0,
                          // so both number_array and another_array will now point to the same empty array [].

number_array.splice(0, number_array.length); // This will also clear the original array [1, 2, 3, 4, 5] by removing all elements starting from index 0,
                                              // so both number_array and another_array will now point to the same empty array []. 
console.log('number_array: ' + number_array);
console.log('another_array: ' + another_array);


const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // Combine two arrays into a new array
console.log('combined: ' + combined);

const slice = combined.slice(2, 5); // Get a shallow copy of a portion of the array from index 2 to index 5 (exclusive)
console.log('slice: ' + slice);

const third = [{id : 1}];

const combined2 = third.concat(first); // Combine an array of numbers with an array of objects into a new array
third[0].id = 10; // This will change the id of the object in the combined2 array as well, 
                  // since both third and combined2 reference the same object in memory.

const combined3 = [...first, '100', ...second, '300']; // Using spread operator to combine arrays into a new array
console.log('combined3: ' + combined3);

const copy = combined3.slice(); // Create a shallow copy of the combined3 array
console.log('copy: ' + copy);

const iterator = [10, 20, 30, 40, 50];
for (let number of iterator) {
    console.log(number);
}

iterator.forEach((number, index) => console.log(index, number)); // Using forEach method to iterate over the array

const  join_numbers = [1, 2, 3, 4, 5];

const joined = join_numbers.join(','); // Join all elements of the array into a string with a specified separator
console.log('joined: ' + joined);

const message = 'Hello! How are you doing?';
const parts = message.split(' '); // Split a string into an array of substrings based on a specified separator
// In this case, the separator is a space character, so the message will be split into an array of words.
console.log(parts);

const combined_parts = parts.join('-'); // Join the array of words back into a single string with a hyphen as the separator
console.log('combined_parts: ' + combined_parts);

const sort_numbers = [5, 2, 9, 1, 5, 6];
sort_numbers.sort(); // Sort the elements of the array in place and return the sorted array
console.log(sort_numbers);
sort_numbers.reverse(); // Reverse the order of the elements in the array in place
console.log(sort_numbers);

const courses2 =[{id : 1, name: 'Node.js'}, {id : 2, name: 'angular.js'}];
courses2.sort(function(a,b){
    const nameA = a.name.toUpperCase(); // Convert the name to uppercase for case-insensitive comparison
    const nameB = b.name.toUpperCase(); 
    if(nameA < nameB)  return -1; // If nameA comes before nameB in alphabetical order, return -1
    if(nameA > nameB)  return 1; // If nameA comes after nameB in alphabetical order, return 1
    return 0; // If nameA and nameB are equal, return 0
}); // This will sort the courses2 array based on the name property of the objects in ascending order (A-Z)
console.log(courses2);

const testing_numbers = [-3, -4, 1, 2, 3, 4, 5, -1];
const all_greater_than_zero = testing_numbers.every(function(value){
    return value > 0;
}); // This will check if every element in the testing_numbers array is greater than 0 and return true if all elements satisfy the condition, otherwise it will return false.
console.log('all_greater_than_zero: ' + all_greater_than_zero);

const some_greater_than_zero = testing_numbers.some(function(value){
    return value > 0;
}); // This will check if at least one element in the testing_numbers array is greater than 0 and return true if any element satisfies the condition, otherwise it will return false.
console.log('some_greater_than_zero: ' + some_greater_than_zero);

const filter_numbers = [1, -4, 6, -3, -1, 5, 7];
const items = filter_numbers
              .filter(n => n >= 0)
              .map(n => ({value : n}));
console.log(items);

const sum = filter_numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('sum: ' + sum);