// Basic Algo #7: Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
function swapNegativeWithString(arr) {
    for (var k = 0; k < arr.length; k++) { // Loop through each element in the array
        if (arr[k] < 0) { // If this current element is negative, replace with string
            arr[k] = 'Dojo';
        }
    }
}

var x = [2, 3, -4, -1, 4, -3];
console.log(x);
swapNegativeWithString(x);
console.log(x);

// Basic Algo #8: Print Odds 1-255
// Print all odd integers from 1 to 255.
function printOdds() {
    for (var k = 1; k <= 255; k += 2) { // Loop from 1 to 255 in increments of 2
        console.log(k);
    }
}

printOdds();

// Modification of #8: Print odd numbers from 1 to X (assuming X > 1 - can you modify the code
// so that it can handle negative numbers?)
function printOddsV2(x) { // Prints the odd numbers from 1 to X (instead of a fixed end, like 255)
    for (var k = 1; k <= x; k += 2) {
        console.log(k);
    }
}

printOddsV2(500);

// Basic Algo #9: Iterate and Print Array
// Iterate through a given array, printing each value.
function printArrayValues(arr) {
    for (var k = 0; k < arr.length; k++) { // Loop through each element in the array
        console.log(arr[k]);
    }
}

function printArrayValuesV2(arr) { // Going backwards
    for (var k = arr.length - 1; k >= 0; k--) { // Loop through each element in the array
        console.log(arr[k]);
    }
}

var y = [3, 4, -1, 'Hello', 2];
printArrayValues(y);
printArrayValuesV2(y);

// While loops - used most often when you don't know how many times you'll run the same block of code

// A while loop is not guaranteed to execute - it checks the condition(s) first, then runs the code if true
// You can have any number of conditions you want, just like with if statements
var z = 0;
while (z < 100) {
    console.log(z);
    z++; // Must include something that will change at least one variable inside the conditions in the while loop, otherwise
         // you could have an infinite loop
}

// Do-while loop - will always run at least once since the code runs first BEFORE checking the condition(s)
z = 6;
do {
    console.log(z);
    z++;
} while (z < 10);

// How many coin flips will we need to get 4 consecutive tails?
function flip4Tails() {
    var numOfConsecutiveTails = 0;
    var numOfCoinFlips = 0;
    while (numOfConsecutiveTails < 4) {
        numOfCoinFlips++; // Flipped a new coin
        var x = Math.random(); // .random is a method that generates a number from 0 (inclusive) to 1 (exclusive)
        if (x < 0.5) { // Heads
            console.log("Heads");
            numOfConsecutiveTails = 0;
        } else { // Tails
            console.log("Tails");
            numOfConsecutiveTails++;
        }
    }
    console.log("Number of coins needed =",numOfCoinFlips);
}

flip4Tails();

// DEMO: How many possessions will it take for a team to lead by 10 
// or more points in a basketball game?  Assume each team is given a percentage (between 0.1 and 0.9)
// to successfully make a 2- or 3- point shot; no free throws for simplicity.

function basketball() {
    var team1Score = 0;
    var team2Score = 0;
    var currentTeam = 1; // Integer saying which team has the ball
    // For simplicity, assume team 1 has the ball to start
    // The numbers below are picked by me - have fun with it!
    // Assume: 80% chance the team will try a 2-point shot, and a 20% chance the team will try a 3-point shot
    // Assume: 60% to make the 2-point shot, 35% to make the 3-point shot
    while (Math.abs(team1Score-team2Score) < 10) { // Math.abs(x) means take the absolute value of x 
        // Pick a 2- or 3-pointer
        var pickShot = Math.random();
        // Pick whether that shot will be made
        var makeShot = Math.random();
        if (pickShot < 0.8) { // 2-point shot attempted
            if (makeShot < 0.6) { // 2-point shot made
                if (currentTeam == 1) { // First team scored
                    console.log("Team 1 scored 2 points");
                    team1Score += 2;
                } else { // Second team scored
                    console.log("Team 2 scored 2 points");
                    team2Score += 2;
                }
            } else { // Shot missed
                console.log(`2-point shot missed by team ${currentTeam}`);
            }
        } else { // 3-point shot attempted
            if (makeShot < 0.35) { // 3-point shot made
                if (currentTeam == 1) { // First team scored
                    console.log("Team 1 scored 3 points");
                    team1Score += 3;
                } else { // Second team scored
                    console.log("Team 2 scored 3 points");
                    team2Score += 3;
                }
            } else { // Shot missed
                console.log(`3-point shot missed by team ${currentTeam}`);
            }
        }
        console.log("Team 1 score:", team1Score);
        console.log("Team 2 score:", team2Score);
        // Switch teams (we're assuming no offensive rebounds here for simplicity)
        if (currentTeam == 1) {
            currentTeam = 2;
        } else {
            currentTeam = 1;
        }
    }
}

basketball();