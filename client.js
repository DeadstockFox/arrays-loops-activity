/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


let hobbies = ['reading','walking','watching-tv','gaming'];

for (hobby of hobbies){
     console.log (hobby);
}
console.log('Number of hobbies:',hobbies.length );

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['blue','teal', 'green', 'teal'];
let tealcount = 0;



for(let index = 0; index < colors.length; index += 1 ){
     if (colors[index] === 'teal') {
          tealcount += 1;
     }
     else{
          tealcount +=0
     }
}
     console.log(colors);
     console.log(tealcount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let evenOdd = [3,7,11,14,16]
let oddNumbers = [];
let evenNumbers = [];
for (let index = 0; index < evenOdd.length; index += 1 ){
     if(evenOdd[index] % 2 === 0){
          evenNumbers.push(evenOdd[index]);
     }
     else{
          oddNumbers.push(evenOdd[index]);
     }
}
console.log('Full Array:', evenOdd);
console.log('Odd Numbers:', oddNumbers);
console.log('Even Numbers:', evenNumbers);
// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let bool = [true,true,false,false,true];
let toggled = [];
for (let index = 0; index < bool.length; index += 1 ){
     if(bool[index] === true){
       toggled.push(false);
     }
     else{
       toggled.push(true)
     }
}
console.log('Base Values:', bool);
console.log('Opposite Values:', toggled);
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

let newNumbers = [7,8,9,10,0,0,0];

while (newNumbers.length <= 7){
if (newNumbers[] === 0){
     newNumbers.pop(newNumbers[i]);
}
   i++;
}






for (let index = 0; index <= newNumbers.length; index += 1 ){
     if(newNumbers[index]=== 0){
          newNumbers.pop(newNumbers[index]);
     }
}
console.log('New Values:', newNumbers);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
