// Greater Than Y
// Count and print the number of array values less than a given Y.
function numGreaterThanY(arr, y) {
    var numGreater = 0;
    // setting a variable to be 0; this is what we are going to add to everytime a value is greater than y
        for (var idx = 0; idx < arr.length; idx++) {
            //start for loop off at index 0; run through entire length of array; increment by 1;
            if (arr[idx] > y) {
                //if the index value we are on is greater than y
            numGreater++;
            // add 1 to numGreater
            }
        }
    console.log("%d values are greater than %d", numGreater, y);
}
numGreaterThanY([1,3,5,6,7],3)


// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.

function numToStr(arr)
    {
        for (var idx = 0; idx < arr.length; idx++)
        //starting for loop off at index 0 of array; running through the entire length of array; increment by 1;
        {
            if (arr[idx] < 0)
            // if index of arr is < 0 (making it a negative number)
            {
            arr[idx] = "Dojo";
            // replace that index of array with the word Dojo
            }
        }
        return arr;
    }
console.log(numToStr([1,-2,5,-1]));


// Square the Values
// Given an array, square each value in the array.
function squareArrVals(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        //start for loop off at index 0; run through the array length; increment by 1;
        arr[idx] *= arr[idx];
        //change the index we are on to be the value of itself times itself;
        }
    return arr;
}
console.log(squareArrVals([10,2,3,4,5]));

