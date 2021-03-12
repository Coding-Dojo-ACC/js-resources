//Algorithms

// Zero Out Negative Numbers
// Set negative array values to zero.
function setNegsToZero(arr)
    {
    for (var idx = 0; idx < arr.length; idx++)
    //start for loop at index 0; run as long as the array; increment by 1;
        {
        if (arr[idx] < 0)
        //if the index we are on is less than 0 (making it a neg. number)
            {
            arr[idx] = 0;
            // then replace that index with 0
            }
        }
    return arr;
}
console.log(setNegsToZero([-1,2,-3,4]));

// Print the smallest value in a given array.
function printMin(arr)
    {
        if (arr.length == 0) {
            console.log("Empty array, no min value.");
            return;
            //if array is empty return empty array
        }
        var min = arr[0];
        //set min to be the value of index 0
            for (var i = 1; i < arr.length; i++) {
                //start for loop off at index 1; run through entire length of array; increment by 1;
                if (arr[i] < min) {
                    //if the value of the index we are on is less than what min is currently
                    min = arr[i];
                    //set min to be that value
                }
            }
console.log("Min value is:", min);
}
printMin([1,2,3,4,5,6]);


//Find Max, Min & Average
function maxMinAverage(arr) {
    if (arr.length == 0) {
        console.log("Null arr, no min/max/avg");
        //if the array is empty, print null array.
        return;
        }
        var min = arr[0];
        var max = arr[0];
        var sum = 0;
        // set min, max to be the index of 0. (so we have a starting point to compare)
        //set sum to be 0, so we can add on to sum variable as every time we loop through.
            for (var idx = 1; idx < arr.length; idx++) {
                // start for loop at index 1; run through the length of array; increment by 1;
                if (arr[idx] < min)
                //if the index we are on is less than what we have min set to, 
                {
                min = arr[idx];
                //change min to that index.
                }
                if (arr[idx] > max) {
                //if the index we are one is greater than what we have max set to
                max = arr[idx];
                // change max to that index.
                }
                sum += arr[idx];
                // add the value of the index we are on to our sum variable
            }
        console.log("Max:", max, " Min:", min);
        console.log("Avg value:", sum / arr.length);
        // equate average by dividing the sum by the length of array
    }
maxMinAverage([10,20,1,60,4,30])

// Shift Array Values
// Shift array values: drop the first and leave '0' at end.
function arrShift(arr)
    {
    for (var i = 1; i < arr.length; i++)
    // start for loop off at index 1; run as long as the array length; increment by 1;
        {
        arr[i - 1] = arr[i];
        // replace the index value before the one we are, with the value we are on.
        // (the shift)
        }
        arr[arr.length-1] = 0;
        //after for loop is over add a 0 to the end of the array.
    return arr;
}
console.log(arrShift([1,2,3,4,5]));