"use strict";
// 1. Write a function findMin that takes an array as a parameter and returns the minimum value.
// Now use this function to find minimum value in the array [2,3, -1,-4,3,2,1]
/**
 * 
 * @param {array} array takes array values
 * @returns {array} returns minimum of array
 */
// function findMin(array) {
// let min=[0]
//     for(let i=1;i<=array.length;i++){
//         if(array[i]<min){
//             min=array[i]
//         }
//     }
//     return min;
// }
// console.log(findMin([2,3,-1,-4,3,2,1]));


//2. Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
// of values on the odd indices. 

function sumOddIndicesValues(arr){
    let sum=[]
    for(let i=0;i<arr.length;i++){
        if(i%2!==0){
            sum+=arr[i];
        }
    }
    return sum;
};
console.log(sumOddIndicesValues([1,3,4,6,4,7,2]));

// Write a function sumArrays, that takes two arrays as parameters (you can assume of same
    // length) then returns a new array by adding two array values at the corresponding indices.
    
    // function sumArrays(arr){
    //     let sum=[]
    //     for(let i=0;i<arr.length;i++){
    //         i
    // };
    // console.log(sumOddIndicesValues([1,3,4],[6,4,7]));






    // function sortNumbersInArrays(a) {
    //     var numbers = a;
    //     console.log(numbers);
    //     var j = true;
    //     while (j) {
    //         console.log(
    //             "Enters while loop condition - " + "because J's value in the () is " + j
    //         );
    //         j = false;
    //         console.log(
    //             "to stop the while loop we change J's value immediately to - " +
    //                 j +
    //                 ", since the while loop has already started "
    //         );
    
    //         for (var i = 1; i < numbers.length; i++) {
    //             console.log("current array order ---> " + numbers);
    //             console.log("for loop - " + i);
    //             console.log("compares " + numbers[i - 1] + " and " + numbers[i]);
    
    //             if (numbers[i - 1] > numbers[i]) {
    //                 j = true;
    //                 console.log(
    //                     "Enters the if condition because " +
    //                         numbers[i - 1] +
    //                         " > " +
    //                         numbers[i]
    //                 );
    //                 console.log(
    //                     "since it entered the if condition we want to change J's value to - " +
    //                         j +
    //                         ", so it will enter the while loop again, once it finishes the for loop"
    //                 );
    //                 var tmp = numbers[i - 1];
    //                 //	tmp = 176
    //                 console.log(numbers);
    //                 numbers[i - 1] = numbers[i];
    //                 //[134,176,99] i.e
    //                 //	(position of 176) = (position of 99)
    //                 //therefore, we've 99 = 99
    //                 console.log(numbers);
    //                 numbers[i] = tmp;
    //                 // (position of 99)=tmp(176)
    
    //                 console.log(numbers);
    //             }
    //         }
    //     }
    //     return numbers;
    // }
    
    // someArray = [16, 99, 88];
    
    // console.log(sortNumbersInArrays(someArray));

/**
 * 
 * @param {array} array  this returns 
 * @returns {array} array;
 */
    function arrSort(array) {
        let xyz=false;
        while(!xyz){
          xyz=true;
          for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
              xyz=false;
             let temp=array[i-1];
             array[i-1]=array[i];
             array[i]=temp;
            }
          }
        }
        return array;
      }
      var num= [12, 10, 15, 11, 14, 13, 16]
      arrSort(num)
      console.log(num)


      
//////////////
arr1=[1,3,2,4,5,7,10,22,33];
arr1.sort(myComparator);
console.log(arr1);
function myComparator(a,b){
    return a-b;
}

// function expression
arr1=[1,3,2,4,5,7,10,22,33];
let myComparator=function(a,b){
    return a-b;
}
console.log(arr1)

// |||||||||||||||

//anonmouse function
let arr1=[1,3,2,4,5,7,10,22,33];
arr1.sort(function (a,b){
    return a-b;
})
console.log(arr1);


//function arrow
arr1=[1,3,2,4,5,7,10,22,33];
arr1.sor((a,b)=>a-b)
console.log(arr1)
/////////////////////||||||||||||||||\

