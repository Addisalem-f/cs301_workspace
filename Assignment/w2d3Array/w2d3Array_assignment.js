"use strict";
// // 1. Write a function, isArrayEqual, that returns true if two arrays have === elements, else returns
// // false.
/**
 * 
 * @param {array} firstArray is the first array;
 * @param {array} secondArray is the second array;
 * @return {boolean}; if the selements are similar returns true otherwise returns false
//  */
function isArrayEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;
    
    for (let i = 0; i < firstArray.length; i++) {
    
    if (firstArray[i] !== secondArray[i]) {
    return false;
    }
    }
    return true;
   }
   console.log(isArrayEqual([1, 2,3,3], [1,2,3,3]));

// //    2. Write a function addend(arr) that accepts an array of numbers as parameters and returns the
// //    sum of first and last elements of the array

/**
 * 
 * @param {array} arr;
 * @returns {number} ; 
 */
function addend(arr){
    let firstE = arr[0];
    let lastE= arr[arr.length-1];
    return (firstE+lastE);
}
console.log(addend());

// // 3. Write a function named getMiddle that returns the value of the middle element in an array. If
// // the array has an even number of elements, then this function must return the average of the
// // two middle elements.

// /**
//  * 
//  * @param {array} arr;
//  * @return {number} ;
//  */
// function getMiddle(arr){
//     let middle;
//     middle=(arr.length)/2;
//     if(arr.length%2===0){
//     return (arr[middle-1]+arr[middle])/2;
//     }else{
//     return arr[Math.ceil((arr.length-1)/2)];
// }}
// console.log(getMiddle());
// console.log(getMiddle([1,2,3,4,5]));
// // 4. Write a function to rotate the elements in an array to the left by 1.
/**
 * 
 * @param {array} list takes array parameter
 * @returns {array} return array 
  */
function rotateLeft(list) {
    for (let i = 0; i + 1 < list.length; i++) {
        let swap = list[i];
        list[i] = list[i + 1];
        list[i + 1] = swap
    }
    return list;
}

// console.log(rotateLeft([2,4,8,0,3,1]))
// 5. Write a function to rotate the elements in an array to the right by 1.
/**
 * 
 * @param {array} arr enter the array
 * @param {number} num enter the 
 * @returns{array}; array of element
 */
function rotateNRight(arr,num){
 for (let i = 1; i <= num; i++) {
    arr.unshift(arr.pop());  
 }
    return arr;
}
console.log(rotateNRight([2,5,6,7,4],2));

// 7. Given an expression array exp, write a program to examine whether the pairs and the orders of
// “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
// Example:
// Input: exp = ["(", ")", "[", "{", "}", "]"]
// Output: Balanced
// Input: exp = ["[", "(", "]", ")"]
// Output: Not Balance


// algorithm
// step1= 
// give an array expression
// step 2=
// write program to examine
// use examination technique to examine pairs, and orders of the given expression
// use logical expression
// step 4=
// if all are balanced print out "balanced", if not balanced print out "not balanced"
/**
 * 
 * @param {array} arr1  takes array values
 * @returns {value} returns balanced,if it is balanced,otherwise not balanced; 
 */
function ifBalance(arr1){
    let output=[];
   if(arr1.length%2!==0)return false;
for(let i=0;i<arr1.length;i++){
        if(arr1[i]==="{"||arr1[i]==="["||arr1[i]==="("){
            output.push(arr1[i]);
        }else if(output [output.length-1]==="{"&&arr1[i]==="}"){
            output.pop();
        }else if(output [output.length-1]==="["&&arr1[i]==="]"){
            output.pop();
        }else if(output [output.length-1]==="("&&arr1[i]===")"){
            output.pop();
        }
    }
    if(output.length===0){
        return "balanced";
    }
    return "not balanced";
}
let exp = ["[", "]", "(", "{", "}", ")"] ;
console.log(ifBalance(exp));



// 8. Write a function that merges two sorted arrays into one single sorted array. Make use of shift
// and push array methods.
/**
 * 
 * @param {array} arr1  first array
 * @param {array} arr2 second array
 * @returns {e} r
*/ 
function checkSort(arr1,arr2){
let z=(arr1.length+arr2.length);
let x=0;
let y=0;
let array1=[];
for (let i = 0; i < z; i++){​​​​​​​​
if(arr1[x]<arr2[y]){​​​​​​​​
array1[i]=arr1[x];
x++;
        }​​​​​​​​else{​​​​​​​​
array1[i]=arr2[y];
y++;
        }​​​​​​​​
    }​​​​​​​​
return array1;
​​​​​​​​}
console.log(checkSorted([1,3,5,7],[2,6,8,9,10]))




// 8. Write a function that merges two sorted arrays into one single sorted array. Make use of shift
//of shift and push array methods.

/**
 * 
 * @param {array} arr1 first array 
 * @param {array} arr2 second array
 * @returns {array} last result
 */
function merge(arr1,arr2) {
    for(let i=0;i<=arr1.length;i++){
    
    let xy1=arr1.shift();
    arr2.push(xy1);

}
let lastItem=arr1[0];
arr2.push(lastItem);
return arr2;
}
console.log(merge([4,5,6],[1,2,3]));
// ----------------------------------------------------
// 9. Write a function that transforms a given array as following. Use appropriate array methods.

/**
 * 
 * @param {array} arr takes string array 
 * @returns {array} transformed array
 */
function reverse2String(arr){
arr=["Quick", "Brown", "Fox"];
let transformed=(arr.reverse().join("_"));
return transformed;
}
console.log(reverse2String());


// 10. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a value to search in the array and return an array result with three values.
// a. First value is boolean representing if the search value exists in the array.
// b. Second value is the first index of value found in the array or -1
// c. Third value is the last index of value found in the array or -1.

/**
 * 
 * @param {array} array first parameter
 * @param {} value second 
 * @return {..} return 
 */
 function enhancedIncludes(arr, value) {
    let resu = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            resu[0] = true
            resu.push(i)
        }

    }
    if (resu.length === 0) {
        resu = [false, -1, -1]
    }
    if (resu.length === 2) {
        resu.push(-1)
    }
    return resu;
}
console.log(enhancedIncludes([1, 2, 3, 4], 2))
// 12. Write a JavaScript program that number input from the user at once as comma separated values
// and stores it into an array and do following operations
// a. Filters out negative values.

let given_arr = [5,-3,6,-5,9];

let filtered_arr = given_arr.filter(e => e < 0);
console.log(filtered_arr);

//Using loop.
function return_negative(arr){
    let negative_arr = [];
    let k = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            negative_arr[k] = arr[i];
            k++;
        }
    }
    return negative_arr;
}

console.log(return_negative(given_arr))


function filterRange(arr,opd1,opd2){
    const newArr=[];
    let arrLngth=arr.length;
    let count=0;
    for(let i=0;i<arrLngth;i++){
    if(arr[i]>=opd1 && arr[i]<=opd2){
    newArr[count++]=arr[i];
    }
    
    }
    return newArr;
   }
   let arrr=[0, 100, 3, 6, -555];
   console.log(filterRange(arrr,6,120));