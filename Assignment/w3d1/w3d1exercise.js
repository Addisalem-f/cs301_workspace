"use strict";

let prompt = require("prompt-sync")();






// let sam1 = { name: "sam", age: 10 };
// let sam2 = { name: "sam", age: 10 };
// let john = { name: "john", age: 10 };

// console.log(sam1 === sam2)//false
// console.log(isPersonEquals(sam1, sam2))//true//is javascript rule
// console.log(isPersonEquals(sam1, john))//false///is my rule

// function isPersonEquals(obj1, obj2) {
//     if (obj1.name === obj2.name && obj1.age === obj2.age) {
//         return true
//     } else {
//         return false
//     }
// }

// // 1.Write a program that keeps on asking for user input and prints it, until
// // user types the word "stop"(without quotes). "Stop" word can be in
// //     any case (small, capital or mixed)

let input;
let capitalCased;
do {
    input = prompt("enter text :  ")
    capitalCased = input.toUpperCase();
} while (capitalCased == "stop");

// // 2• Write a program that takes comma separated text from user and 
// // converts it into an array of words and prints in reverse order.

let someWords = prompt("please enter some text")
let arrWords = someWords.split(",");
arrWords.reverse();
let joined = arrWords.join("_")
console.log(joined)
// // • Write a program to replace all the occurrence of "for" in an input 
// // string with 4

let input2 = prompt("write something")
let xyz = input2.replace("for", 4)
console.log(xyz)