// Exercise: Create an array from a range of numbers
const numbers = arrayfromRange(-10,-4);
console.log(numbers);

function arrayfromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// Exercise: Check if an array includes a certain element
const numbers2 = [18, 23, 48, 97, 27, 9];
console.log(includes(numbers2, -23));

function includes(array, searchElement){
    for(let element of array)
        if(element === searchElement) return true;
    return false;
}


// Exercise: Create a new array except for the excluded elements
const numbers3 = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(except(numbers3, [1, 2]));

function except(array, excluded){
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output; 
}

// Exercise: Move an element in an array
const numbers4 = [1, 2, 3, 4, 5];
console.log(move(numbers4, 0, 4));

function move(array, index, offset){
    
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index+offset, 0, element);
    return output;
}

// Exercise: Count the occurences of an element in an array
const numbers5 = [1, 2, 3, 4, 1, 2, 1];
console.log(countOccurrences(numbers5, 1));

function countOccurrences(array, searchElement){
    // let count = 0;
    // for(let element of array)
    //     if(element === searchElement)
    //         count++;
    // return count;

    return array.reduce((accummulator, current) => {
        const occurences = (current === searchElement) ? 1 : 0;
        return accummulator + occurences;
    }, 0);
}

// Exercise: Get the maximum value in an array
const numbers6 = [19, 27, 13, 42, 16, 4];
console.log(getMax(numbers6));

function getMax(array){
    if(array.length === 0) 
        return undefined;
    // let max = array[0];
    // for(let i = 1; i < array.length; i++){
    //     if(array[i] > max)
    //         max = array[i];
    // }
    // return max;

    return array.reduce((a, b) => a > b ? a : b);
}

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];
const titles = movies.filter(movie => movie.year ===2018 && movie.rating >= 4)
                 .sort((a, b) => a.rating - b.rating)
                 .reverse()
                 .map(movie => movie.title);
console.log(titles);