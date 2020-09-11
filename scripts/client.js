console.log('Hello Castor');

//
// EQUALS OPERATOR
// ==============================
const numSet = 3;
let numComp = '3';
const tester = '3';

// = - set a value
// == - checks for value
// === - check for value & Ty

if (numSet == numComp && tester === numComp) {
  console.log('IT WORKS!!!');
}



//
// LOOPS & ARRAYS
// ==============================

const listOfThings = ['#ffffff', 1, 3, 20, 50, 2100];
// 2 index of 0
// 0: 2
// 1: 1
// 2: 3
//...
console.log(listOfThings);

//
// How many items are in our array?
// ------------------------------
console.log(listOfThings.length);

// What item is in our array?

// what is the first item?
console.log('first item:',listOfThings[0]);
// what is the last item?
console.log('last item:',listOfThings[listOfThings.length - 1]);

//
// LOOP TYPE: for i
// ------------------------------
console.log('\nSTART OF for i loop ::');

for (let i = 0; i < listOfThings.length; i++) {
  console.log(i + ': ' + listOfThings[i]);

  // something to change BG
  // DOM Manipulation
  // select an element
  // manipulate
}

//
// LOOP TYPE: for in[dex]
// ------------------------------
console.log('\nSTART OF for in loop ::');

for (let i in listOfThings) {
  console.log(i);
}

//
// LOOP TYPE: for of
// ------------------------------
console.log('\nSTART OF for of loop ::');

for (let item of listOfThings) {
  console.log(item);
}

//
// LOOP TYPE: while
// ------------------------------
console.log('\nSTART OF while loop ::');
let iteration = 2;

// 2
while (iteration < 9) {
  iteration++; // 3
  console.log(iteration);
}
