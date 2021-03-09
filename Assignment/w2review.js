"use strict";

// 1. Write a function that takes an array as input and returns second largest element of the array.

/**
 * @param {array} arr array
 * @returns {number} prints number
 *
 */
// function SecondLargest(arr) {
//     let largest = 0;
//     let SecondLargest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             SecondLargest = largest;
//             largest = arr[i];
//         }
//         else if (arr[i] > SecondLargest && arr[i] < largest) {
//             SecondLargest = arr[i];
//         }
//     }
//     return SecondLargest;
// };
// console.log(SecondLargest([1, 5, 6, 8, 9]))


// 2. An evenDominated array is an array that has count of even elements in the array more than the odd elements. Write a function that tests if an array is even dominated.
/**
 * 
 * @param {array} array2 takes array 
 * @returns {boolean} true if evenDominated, otherwise false
 */
// function evenDominated(array2) {
//     let evennumCount = 0;
//     let oddnumCount = 0;
//     for (let i = 0; i < array2.length; i++) {
//         if (array2[i] % 2 === 0) {
//             evennumCount++;

//         }
//         else if (array2[i] % 2 !== 0) {
//             oddnumCount++;
//         }

//         if (evennumCount > oddnumCount) {
//             return true

//         } else {
//             return false
//         }

//     }
// }
// console.log(evenDominated([4, 6, 8, 3]))




// 3. Write a function deleteArrayElement that takes two parameters, first an array and second parameter is an array index to delete element from. You should do this without using any inbuilt functions.
/**
 *  
 * @param {array} arr2;
 * @param {array} num ;
 * @returns {array};
 */
function deletArray(arr2, num) {
    let newArr = []
    let k = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (i !== num) {
            newArr[k] = arr2[i];
            k++;
            continue;

        }

    }
    arr2 = newArr;
    return arr2;
}

console.log(deletArray([1, 2, 3, 4, 5, 6, 7, 8], 3))
/**
 * this program removes one element from the array  ,by using inbuilt methods
 * @param {array} arr first array
 * @param {number} value number
 * @returns {returns} array
 */
// function removeItemOnce(arr, value) {
//     var index = arr.indexOf(value);
//     if (index > -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }
// console.log(removeItemOnce([2, 5, 9, 1, 5, 8, 5], 1));

/**
 * this program removes multiple elements occured more than one place from the array 
 * @param {array} arr first array
 * @param {number} value number
 * @returns {returns} array
 */
// function removeItemAll(arr, value) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] === value) {
//             arr.splice(i, 1)
//         }
//         else {
//             i++;
//         }
//     }
//     return arr;
// }
// console.log(removeItemAll([2, 5, 3, 3, 3], 3))

// 4.Write a functionto count total number of duplicate elements in an array.
/**
 * 
 * @param {array} array takes array number
 * @return {array} prints array
 */
// function countDuplicated(array) {
//     array = [3, 2, 4, 5, 6, 7, 8, 4, 3, 2];
//     //sort first
//     array.sort();
//     let dupCount = 1;
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] === array[i + 1]) {
//             dupCount++;
//         }

//     }
//     return dupCount;

// }
// console.log(countDuplicated())



// 5.Twoarrays are considered equal if they have exact same elements, even if order may differ.Write a functionthat tests weather two arrays are equal.e.g. [1, 2, 3] isequal to[1, 2, 3] and[3, 1, 2] but notequal to[1, 2] or[2, 1, 3, 4]
/**
 * 
 * @param {array} arr1 first array 
 * @param {array} arr2 second array
 * @returns {boolean}  returns true or false
 */
function equalArray(arr1, arr2) {
    arr1.sort()
    arr2.sort()
    for (let i = 0; i < arr1.length; i++) {

        if (arr1.length !== arr2.length) {
            return false
        }
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
} console.log(equalArray([2, 2, 5, 3], [2, 2, 4, 5]));



