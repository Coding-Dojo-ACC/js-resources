// Go over IF statements - >, <, >=, <=, ==, !=, &&, ||, ===, !==, "!" (not); talk about break and continue (optional)
// Go over arrays - push method, pop method, .length property
// Printing (logging) vs. returning stuff

// IF statement demos below:
var x = 10;
if (x < 15) {
    console.log("The number is less than 15");
} else if (x < 20) { // "Else if" is optional - you can have an unlimited number of these
    console.log("The number is less than 20 but greater than or equal to 15");
} else { // this is optional - only executes if every "if" statement before this line is false 
    console.log("The number is at least 20");
}

// >, <, >=, <=, ==, !=: "==" means "is equal to", "!=" means "is not equal to"
// You can also have multiple conditions: "&&" means "AND", "||" means "OR"

// You can have as many conditions as you want inside the parentheses
if (x >= 10 && x < 20) { // If x is at least 10 AND less than 20
    console.log("The number is at least 10 but less than 20");
}

if (x > 30 || x < 5) { // If x is greater than 30 OR x is less than 5 - only need one to be true
    console.log("the number is not from 5 to 30");
}

// "!" means "NOT"
if (!false) { // If NOT false
    console.log("The statement is true");
}

// From Antonio: https://processing.org/tutorials/2darray/
var y = [2, 5]; // An array is an object that holds multiple values - and you can even mix the types of values
var z = [1, "Hello", 3];
var p = [
    [1,5,4],
    [1,2],
    [3,5]
]; // An array holding arrays

console.log(y[1]); // This will print "5"; recall that index 0 gives the first element
console.log(p[0][2]); // p[0] gives [1,5,4], p[0][2] gives 4

// Common methods and properties in arrays
// .push() - Adds an element to the end of the array
y.push(8); // Now y is [2,5,8]
// .pop() - Removes the last element of the array and returns it
var b = y.pop(); // Removes 8 from the end of the array, now the variable b takes the value 8 while the array y is now [2,5]
// .length property - Returns the number of elements in the array
console.log(y.length); // Return 2 since there are two elements in y = [2,5]

// Basic Algos #4: Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function makeArrayWithOdds() {
    // Use a for loop to generate values to add to the array
    // This means we must define a new array before we start
    var oddArr = []; // Start with an empty array
    for (var i = 1; i <= 255; i += 2) { // i += 2 means increment i by 2 (also i = i + 2)
        oddArr.push(i); // .push means add value in parentheses to end of array
    }
    /* Alternate, but not as efficient, way to solve this 
    for (var k = 0; k <= 255; k++) {
        if (k % 2 == 1) { // The "%" is the modulo symbol - it returns the remainder - so for example, "7 % 3" gives 1 since 7 / 3 = 2
        // with a remainder of 1
            oddArr.push(k);
        }
    }
    */
    /* T diagram below
    variable | value
    ----------------
    i        | 5
    oddArr   | [1, 3, 5]
    */
    return oddArr; // return the array itself at the end
}
// console.log(makeArrayWithOdds()); // You MUST print the output - otherwise you won't see anything when running the function

// Basic Algos #5: Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, Y) {
    var newArr = []; // New array holding all the values greater than Y
    // Loop through the entire array
    for (var k = 0; k < arr.length; k++) {
        // arr[k]
        if (arr[k] > Y) { // If current value in the array is greater than Y
            newArr.push(arr[k]);
        }
    }
    return newArr.length; // Returns the number of values greater than Y
}
console.log(greaterThanY([1,3,2,4],1.5));

// Better version - no need to use an array; it prints inside the function
function greaterThanYV2(arr, Y) {
    var count = 0;
    // Loop through the entire array
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > Y) { // If current value in the array is greater than Y
            count++;
        }
    }
    console.log(count);
}

greaterThanYV2([5,1,4,5,8,-2,5,4],3);

// Basic Algos #6: Max, Min, Average
// Given an array, print the max, min and average values for that array.
function printMaxMinAvg(arr) {
    // You SHOULD use the first value of the array as a starting point.  Do NOT pick an arbitrary value to set as the min or
    // max.  Here's why you don't:  what if I assign the minVal to be 0 but then every element in the array is [-5,-4,-2]?
    var minVal = arr[0];
    var maxVal = arr[0];
    var cumSum = 0; // Cumulative sum of all the values in the array, starting at 0
    // Loop through entire array
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] < minVal) {
            minVal = arr[k]; // Set new min value
        } else if (arr[k] > maxVal) {
            maxVal = arr[k]; // Set new max value
        }
        cumSum += arr[k]; // Add current value to cumulative sum
    }
    // Calculate the average
    var avg = cumSum/arr.length; // Example: [1, 4, 10] returns 5 as the average (1 + 4 + 10)/3 = 5
    console.log(`Minimum value = ${minVal}`); // Use the ` (back tick) symbol to put in variable values inside a string
    console.log("Maximum value =",maxVal);
    console.log("Average value = "+avg);
}

printMaxMinAvg([1,4,10]);