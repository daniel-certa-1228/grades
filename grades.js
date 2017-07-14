// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let gradeA = [];
let gradeB = [];
let gradeC = [];
let gradeD = [];
let gradeF = [];
let scoresHiLo = scores.sort(function(a, b){return b-a});
console.log( "Sorted Scroes:", scoresHiLo );
//for loop to push each type of grade to its array
for (let i=0; i<scores.length; i++) {

	if ( (scores[i] <= 100) && (scores[i] >= 91 ) ){
		gradeA.push(scores[i]);
		// console.log( "gradeA", gradeA );
	} else if ( (scores[i] <= 90) && (scores[i] >= 81 ) ){
		gradeB.push(scores[i]);
		// console.log( "gradeB", gradeB );
	} else if ( (scores[i] <= 80) && (scores[i] >= 71 ) ){
		gradeC.push(scores[i]);
		// console.log( "gradeC", gradeC );
	} else if ( (scores[i] <= 70) && (scores[i] >= 61 ) ){
		gradeD.push(scores[i]);
		// console.log( "gradeD", gradeD );
	} else {
		gradeF.push(scores[i]);
		// console.log( "gradeF", gradeF );
	}
}

console.log( "There are " + gradeA.length + " A's." );
console.log( "There are " + gradeB.length + " B's." );
console.log( "There are " + gradeC.length + " C's." );
console.log( "There are " + gradeD.length + " D's." );
console.log( "There are " + gradeF.length + " F's." );

//use the slice method to grab the highest and lowest score

console.log( "The highest grade is " + scoresHiLo.slice(0,1) + "." );
console.log( "The lowest grade is " + scoresHiLo.slice((scoresHiLo.length - 1),(scoresHiLo.length)) + "." );











