// ## Steps 1 - 6 (Hoisting & Functions)
// name = 'Michael';
// var name;
// // let name;
// console.log(name);


// ## Steps 7 - 9 (Hoisting & Functions)
// setName();
// function setName() {
//     var name = 'Covalence';
//     console.log(name);
// }

// ## Steps 10 - 11 (Hoisting & Functions)
// console.log('Step 1');
// let avg = findAvg(5, 3);
// console.log('Step 2', avg);
// function findAvg(a, b) {
//     console.log('Step 3');
//     var answer = (a + b) / 2;
//     return answer;
// }

// ## Steps 1 - 13 (Scoping)
// let fruits = ['apples', 'grapes', 'peaches'];

// // let favFruit;

// function printFruits() {
//     let favFruit = fruits[2];
//     console.log(fruits[0]);
// }

// function printFavFruit() {
//     console.log(favFruit);
// }

// printFruits();
// printFavFruit();

// ## Steps 14 - 20 (Scoping)
// let fruits = ['apples', 'grapes', 'peaches'];


// function printFruits() {
//     let favFruit = fruits[2];
//     console.log(fruits[0]);
//     printFavFruit()
//     console.log(leastFav);

//     function printFavFruit() {
//         console.log(favFruit);
//         let leastFav = 'kiwi';
//     }
// }
// printFruits();

// ## Step 21 Scoping)
// someFunc();
// function someFunc() {
//     console.log('Hello Michael');
// }

// ## Step 22 - 23 Scoping)
// someName();
let someName = function newFunc() {
    alert('Hello World!');
}
someName();