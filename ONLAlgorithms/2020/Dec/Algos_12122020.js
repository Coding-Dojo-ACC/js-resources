// Basic algo #2: Find and Print Max
// Given an array, find and print its largest element.

function findAndPrintMax(arr) {
    // Start with the first value in the array
    var curMax = arr[0]; // Index 0 corresponds to the first element in the array
    // Find the maximum value of the array
    for (var i = 0; i < arr.length; i++) { // arr.length is the number of elements in the array; i++ means increment i by 1
        if (curMax < arr[i]) {
            // Replace the current maximum value with the current value in the array that's being examined
            curMax = arr[i]; // Assigns the current value of the array to the variable curMax
        }
        /* T diagram
        variable name | value of the variable
        -------------------------------------
        arr           | [1, 3, 8, 4] (.length = 4)
        curMax        | 8
        i             | 4
        arr[i]        | arr[3] = 4
        */
    }
    // After looking through the entire array, print out the maximum value here
    console.log("Maximum value = " + curMax);
}

// 
var myArr = [1,3,8,4,10,15];
findAndPrintMax(myArr); // You MUST call the function in order to actually execute (or run) it

/*
    var x = 20;
    if (x > 25) {
        console.log("Bigger than 25");
    } else if (x < 22) {
        console.log("less than 22"); // this runs
    } else if (x < 21) {
        console.log("less than 21") // Will NOT run - this block is skipped since we had a true statement earlier
    } else { // Else statement is optional
        // Run this if false
    }
*/

// Basic algo #3: Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

function makeArrayWithOdds() {
    // Use a for loop to generate values to add to the array
    // This means we must define a new array before we start
    var oddArr = []; // Start with an empty array
    for (var i = 1; i <= 255; i += 2) { // i += 2 means increment i by 2 (also i = i + 2)
        oddArr.push(i); // .push means add value in parentheses to end of array
    }
    return oddArr; // return the array itself at the end
}

console.log(makeArrayWithOdds()); // You MUST print the output - otherwise you won't see anything with running the function