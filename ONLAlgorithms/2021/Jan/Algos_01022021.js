// Basic Algo #10: Get and Print Average
// Analyze an array’s values and print the average.

function getAndPrintAverage(arr) {
    // Example: [1, 5, 12] -> average = (1+5+12)/3 = 18/3 = 6
    var cumSum = 0; // Cumulative sum
    for (var k = 0; k < arr.length; k++) { // Loop through each element in the array
        cumSum += arr[k]; // Recall: arr[k] means get the element in the "k"th index of the array called "arr"
    }
    // cumSum = 18 at this point for [1, 5, 12]
    console.log("Average value =",cumSum/arr.length);
}

var x = [1, 5, 12];
getAndPrintAverage(x);

// In place vs. returning a new array
function changeArray(arr) {
    // Change the first element in the array - NOTE that the array is now modified even after running this function.
    arr[0] = 'First';
    // You don't need to return the array back here - it's changed.  The elements are said to have been changed "in place".
}

var y = [1, 5, 2];
console.log("Original y = ",y);
changeArray(y);
console.log("Changed y = ",y);

// Basic Algo #11: Square the Values
// Square each value in a given array, returning that same array with changed values.

function squareArray(arr) {
    /*
      variable  | value
    -------------------------
    arr         | [9, 25, 0, 2.25, 36]
    k           | 5
    arr.length  | 5
    arr[k]      | arr[4] = 36
    */
    for (var k = 0; k < arr.length; k++) { // Loop through each element in the array
        // arr[k] *= arr[k]; // Option 1 (*= means multiply by thing on the right)
        arr[k] = arr[k]*arr[k]; // Option 2
    }
    return arr;
}

var z = [-3, 5, 0, 1.5, 6];
console.log(squareArray(z));
console.log(z);

// Array methods like .push(), .pop(), and the .length property
var m = [1, 3];
m.push(8); // Add the number 8 to the end of the array
console.log(m); // m = [1, 3, 8]
var p = m.pop(); // p = 8; the .pop() method removes the last element of the array
console.log(m); // m = [1, 3]
console.log(p); // p = 8
console.log(m.length); // 2: m has two elements [1, 3]