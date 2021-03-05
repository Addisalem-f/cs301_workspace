"use strict";
// 1. Write a function, isArrayEqual, that returns true if two arrays have === elements, else returns
// false.
/**
 * 
 * @param {array} firstArray is the first array;
 * @param {array} secondArray is the second array;
 * @return {boolean}; if the selements are similar returns true otherwise returns false
 */
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

//    2. Write a function addend(arr) that accepts an array of numbers as parameters and returns the
//    sum of first and last elements of the array

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

// 3. Write a function named getMiddle that returns the value of the middle element in an array. If
// the array has an even number of elements, then this function must return the average of the
// two middle elements.

/**
 * 
 * @param {array} arr;
 * @return {number} ;
 */
function getMiddle(arr){
    let middle;
    middle=(arr.length)/2;
    if(arr.length%2===0){
    return (arr[middle-1]+arr[middle])/2;
    }else{
    return arr[Math.ceil((arr.length-1)/2)];
}}
console.log(getMiddle());
console.log(getMiddle([1,2,3,4,5]));
// 4. Write a function to rotate the elements in an array to the left by 1.
/**
 * 
 * @param {array} arr entery any array 
 * @returns{array};
 */
function  rotateLeft(arr){
    let copy=[];
    let temp=arr.shift();
    copy=arr;
    copy.push(temp);
    return copy;
}


/**
 * 
 * @param {array} arr enter the array
 * @param {number} num enter the number of shifting
 * @returns{array};
 */
function rotateNRight(arr,num){
    let copy=[];
    
    for (let i = 1; i <= num; i++) {
     let temp=arr.pop(); 
     copy=arr;
    copy.unshift(temp);  
 }
    return copy;
}


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

