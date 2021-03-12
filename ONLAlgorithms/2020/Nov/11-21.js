// Print Sum 0-255
// Print integers from 0 to 255, and the sum so far.

function printSum0to255() {
    var sum = 0;
    for(var i =0; i<=255; i++) {
        sum = sum + i;
        console.log("New number:", i, "Sum:", sum);
    }
}
// printSum0to255();

// Greater Than Y
// Count and print the number of array values less than a given Y.
function numGreaterThanY(arr, y) {
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > y) {
            count++;
        }
    }
    console.log("%d value(s) are greater than %d", count, y)
}
// numGreaterThanY([1,3,5,7,9], 3);

//set any negatives to 0 
// zero out any negative numbers

function setNegativesToZero(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(setNegativesToZero([-5,2,-10,3,-1]));

