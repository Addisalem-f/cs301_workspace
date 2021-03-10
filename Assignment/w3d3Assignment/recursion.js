"use strict"
// Write recursive functions to
// • calculate the power of any base
// • count the digits of a given number
// • reverse a given string.
// Write your own recursive logic for above problems. Do not use existing methods like reverse or length
// property.
// Use the Mocha test file, recursionTests.js

// calculate the power of any base
let power = (base, exponent) => exponent === 0 ? 1 : base * power(base, --exponent)
// console.log(power(3, 2));

// count the digits of a given number
// let countDigits = (digits) => digits === "" ? 0 : 1 + countDigits(digits.substr(1))
// console.log(countDigits("1234"));
/**
 * 
 * @param {object} digits takes string value 
 * @returns {number} return number
 */
function countDigits(digits) {
    //     if (digits === "") {
    //         return 0
    //     }
    //     return 1 + countDigits(digits.substr(1));
    // }

    if (digits === 0) {
        return 0
    }
    else {
        return 1 + countDigits(Math.floor(digits / 10))
    }
}
// console.log(countDigits("1234"));

//||----------------------------------

// reverse a given string.
// Algorithm
// function reverse(str) {
//     str="Apple"
//     str= "e" + reverse("Appl")
//     str="Appl";
//     str="e"+("1"+(reverse("App")))
//     str="App"
//     str="e"+"l"+("p"+(reverse("Ap")))
//     str="Ap"
//     str="e"+"l"+"p"+("p"+reverse("A"))
//     str="e"+"l"+"p"+"p"+"A";
//     return str

// }
// console.log(reverse())

/**
 * 
 * @param {string} str takes string as input;
 * @return {string}; 
 */
function reverse(str) {
    let result = "";
    if (str === "") {
        return "";
    } else {
        result += str.substring(str.length - 1);
        return result + reverse(str.substring(0, str.length - 1));
    }
}
console.log(reverse("Apple"));
module.exports = { power, countDigits, reverse };
