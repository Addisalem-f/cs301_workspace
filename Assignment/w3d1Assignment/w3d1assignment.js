"use strict";

// 1. Write the code, one line for each action:
// a. Create an empty object car
// b. Add the property name make with value Toyota
// c. Add the property name model with value Camry
// d. Print the object
// e. Without modifying the code structure of the object, change the value of the model to
// RAV4.
// f. Print the object
// g. Without modifying the code structure of the object, Remove property make from the
// object
// h. Print the object

let car = {};
car = {
    make: "Toyota",
    model: "Camry",
};
console.log(car);
car.model = "RAVA";
console.log(car);
delete car.make;
console.log(car);

// 2. Write the function countProperties(obj) which returns number of properties of an object.
/**
 * 
 * @param {object} obj takes an object properties and values
 * @returns {number} it returns number of count
 */
function countProperties(obj) {
    obj = {
        name: "Addisalem",
        lastname: "fuiliso",
        age: 70,
        isStudent: true
    };

    return Object.keys(obj).length;

}
console.log(countProperties());

// 3. Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
// otherwise return false
/**
 * 
 * @param {object} str string object
 * @returns {boolean} true if character included
 */
function checkSpam(str) {
    str = "I won lottery"
    return str.includes("lottery" || "prize")

}
console.log(checkSpam())

// 4. Write a function named suffix that returns the common suffix of two strings.For example, the
// common suffix of “swimming” and “walking” is “ing”.This function takes two parameters and returns the common suffix.

//////////////////|
/**
 * 
 * @param {object} strX string 1
 * @param {object} strY string2
 * @returns {boolean};
 */
function suffix(strX, strY) {
    let index = 0;
    let xyz = strY.length - 1
    for (let i = strX.length - 1; i >= 0; i--) {
        if (strX[i] === strY[xyz]) {
            xyz--;
            index++;
            continue;
        }
        break;
    }
    let charX = strX.length - index;
    let result = strX.slice(charX, strX.length);
    return result;
}
console.log(suffix("running", "Reading"));

// 5. Write a function named titleCase with one parameter named s.This function returns a copy of s
// but with the first letter of each word capitalized.
/**
 *
 * @param {object} s string
 * @returns {string};
 */
function titleCase(s) {
    let splitStr = s.toLowerCase().split(" ");
    // console.log(splitStr)//to test
    for (let i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
}
console.log(titleCase("HelLo woRld"))

// Q66. Write a swap function that takes two parameters of number type and swap the values of the passed parameters.
// a. Once your function is ready run following code and see if your swap function works?
/**
 * 
 * @param {number} a ;
 * @param {number} b; 
 */
function swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log(x, y);
}
console.log(swap(5, 7));
// 7. Write the function getAverageAge(users) that gets an array of objects with two properties
// name and age and returns the average age.
/**
 * 
 * @param {object} users ;
 * @returns {number} number
 */
function getAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;
}
let object1 = {
    name: "Abc",
    age: 20
};
let object2 = {
    name: "xyz",
    age: 10
};
let users = [];
users[0] = object1;
users[1] = object2;
console.log(getAverageAge(users));