// height
// function height(num) {
//     // create a variable to hold a place for the child's height
//     var childHeight = num;
//     // compare the child's height to a set number 
//     // in this case it's 52 in
//     if(childHeight > 52 ) {
//         // if they are (meet the conditions) then message is printed to the terminal
//         console.log("go ahead!");
//     }
//     else {
//         // they do not meet the conditions
//         console.log("sorry kid, next year!");
//     }
// }

// height(36)

// replace any negative array values with a string
// introducing a new function and feeding an arr into the parameters
function numToString(arr) {
    // loop through each index of the array, continue until we reach the end of the array, increment by 1
    for(var i =0; i<arr.length; i++){
        // compare if the value at index of the array is less than 0
        if( arr[i] < 0){
            //if this meets our conditions, then we want to set the current index to a string
            arr[i] = "Coding Dojo";
        }
    }
    // always return
    return arr;
    // console.log(arr);
}

// console.log(numToString([1,-5,10,-3]));
// numToString([1,-5,10,-3]);

//Shift Array Values
// drop the first value and leave 0 at the end
function shiftArr(arr) {
    // start the loop off at index 1; run for the entire length of the array; incement by 1;
    for(var i =1; i<arr.length; i++){ 
        //replace (or set) the index before the one we are on with the index we are on
        // this is the shift
        arr[i-1] = arr[i];
    }
    //outside of the for loop (after the loop is over) we make the last index 0
    arr[arr.length-1] = 0;
    return arr;
}
console.log(shiftArr([1,-5,10,-3]));
