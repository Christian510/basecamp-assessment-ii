
// The last 3 problems I cannot get to pass not matter how I write them.  I know they are technically right.  But, for some reason (beyond my understanding) I can get them to pass.  This has been my experience with both assessements.  

/**
 * #1
 *
 * Create an object called 'me' that has three keys, 'firstname', 'age', and 'state'.
 * Assign the keys the appropriate values.
 */

var me = {
  firstname: "Christian",
  age:        80,
  state:      "Idaho"
}

/**
 * #2
 *
 * Add a new key/value pair to the 'me' object using dot notation.
 * The new key should be 'faveColor'. Set it to your favorite color as a string.
 */

me.faveColor = "Magenta";

/**
 * #3
 *
 * Below is an object, 'message'. Below it, add a 'text' key using bracket notation,
 * and assign it a string of whatever you would like.
 */

// DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
// DON'T TOUCH THE CODE ABOVE
message["text"]="jasmine is a pain my coding.";

/**
 * #4
 *
 * Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'.
 * upVote() should take in a number, add one to it, and return the number.
 * downVote() should take in a number, subtract one from it, and return the number.
 */

var adjustCount = {
  upVote: function(num){num += 1; return num},
  downVote: function(num){num -= 1; return num;}
};

/**
 * #5
 *
 * Create an array called 'myFriends' with four of your friends names.
 */

var myFriends = ["Patrick", "Jason", "Melissa", "Jesse"];

/**
 * #6
 *
 * Add a fifth friends name to the end of your 'myFriends' array.
 */

myFriends.push("Sonja");

/**
 * #7
 *
 * Create a 'myArrayCopy' variable. It should equal the 'myArray' variable.
 * Use a built-in JavaScript method to create a copy.
 */

// DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
// DON'T TOUCH THE CODE ABOVE
var myArrayCopy;

myArrayCopy = myArray.slice(0,4);

/**
 * #8
 *
 * Below is a array, 'myNumbers'. Create a function called 'evensOnly'
 * that returns an array of only even numbers.
 */

//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE

function evensOnly() {
  myNumbers.forEach(function(num){
   if(num % 2 === 0){
     return num;
   }
 });
 }
  



/**
 * #9
 *
 * Using .filter(), return only your friends of the array of people below.
 * Assign it to a variable called 'trueFriends'.
 */

var trueFriends = peopleIknow.filter(function(arr){
  if(arr.friend){return arr};
});
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];

/**
 * #10
 *
 * Create a function called 'indexFinder' that loops over an array and returns a new array
 * of the indexes of the array passed into the function. For example, passing the array [243, 123, 4, 12]
 * into the function would return [0,1,2,3]. Create a new variable called 'indexes' and set it to contain
 * the indexes of 'randomNumbers'.
 */

let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
let indexes=[];
function indexFinder() { 
  indexes = randomNumbers.map((num, i) => {
    return i;
  });
  return indexes;
}
