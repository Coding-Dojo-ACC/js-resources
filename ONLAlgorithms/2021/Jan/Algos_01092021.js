// For 1-9-2021:
// Basic Algo #12: Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
var x = [1, 3, 4, -2, -3, 0, 4];
var expected = [1, 3, 4, 0, 0, 0, 4];

function zeroOut(arr) { // Argument: array
    // Loop through the entire array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { // If the current element of the array at index i is less than 0
            arr[i] = 0; // Change it to 0
        }
    }
    return arr; // Return the array
}

console.log(x); // Print original x
zeroOut(x);
console.log(x); // Print newly modified x

// Basic Algo #13: Shift Array Values
// Given an array, move all values forward by one index, dropping the first 
// and leaving a '0' value at the end.

var y = [1, 3, 0, 4, -3, -5, 2];
expected = [3, 0, 4, -3, -5, 2, 0];

/*
 var      | value
--------------------------------------------------
 arr      | [3, 0, 4, -3, -5, 2, 2]; .length = 7
 i        | 6
 arr[i+1] | arr[6] = 2
*/

function shiftArray(arr) {
    // Loop through the array
    for (var i = 0; i < arr.length - 1; i++) {
        // console.log(`Swapping indices ${i} and ${i+1}`); // Console.logs are handy for debugging code
        arr[i] = arr[i+1]; // Moves item up
    }
    arr[arr.length-1] = 0; // arr.length - 1 gives you the last index in the array variable "arr"
    // arr[i] = 0; // Alternate way: even though the for loop is finished, the variable "i" is still there
}

console.log(y);
shiftArray(y);
console.log(y);

// JavaScript object:
var z = {}; // An object is defined with the curly braces "{" and "}"

var a = {
    'favoriteFood': 'Pizza', // To the left of the colon is a property name, and to the right is a value
    'menuPrices': [5.99, 8.99, 11.99, 15.99], // Values can be anything - strings, arrays, numbers, even objects
    'menu': {
        'pepperoni': 14.99,
        'cheese': 12.99
    }
}

var x1 = {
    'name': 'Adrian Barnard',
    'favoriteNumber': 100,
    'friends': {
	    'friend_one': 'Johnny',
        'friend_two': 'Tina',
    }
}
// to call a property: type varName.propName OR varName['propName']
console.log(a.favoriteFood);
console.log(a['menuPrices']);
console.log(a.menu.pepperoni);

// Looping through objects - use a "for-in" loop for an object
for (var property in x1) {
    console.log(`${property}: ${x1[property]}`);
}

// Alternate way: using Object.entries, which returns an array - use "for-of" loop for an array
for (const [key, value] of Object.entries(x1)) {
    console.log(key +": "+value);
}

// Break statement in loops
for (var k = 0; k < 10; k++) {
    console.log(k);
    if (k > 7) {
        break; // The break statement exits the for loop right then and there
    }
}
console.log(k);

// Continue statement in loops
for (var p = 0; p < 10; p++) {
    if (p < 5) {
        continue; // The continue statement jumps straight to the next iteration, skipping the code below
    }
    console.log(p);
}

// Question about "const"
const q = 5; // "const" means the value of the variable q cannot be modified after its creation
// q = 8; // ERROR - q is a constant variable - it can't be changed
const q1 = [1, 3];
q1.push(5); // You CAN modify an array's contents - but you CAN'T change q1 to anything else, as in a String, number, boolean, etc.
q1[0] = 8;
console.log(q1);
// q1 = 'Hello'; // ERROR - cannot change from array to String