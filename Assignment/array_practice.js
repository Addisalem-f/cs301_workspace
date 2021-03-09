 "use strict";
 
//  Q1
/**
 * @param {array} arr is array to get average
 * @return {number};
 */
function findAverage(arr){
let arraySum=0;
for (let i=0;i<arr.length; i++){
arraySum=arraySum+arr[i];
}
let arrayAvg=arraySum/arr.length;
return arrayAvg;
}
let scores=[10,20,30,40,50];
console.log(findAverage(scores));

let scores2=[];
for(let i=1; i<10;i++){
    scores[i]=Math.floor(Math.random()*10);
}
console.log(findAverage(scores2));



/**
 * 
 * @param {array} arr is an array to be tested;
 * @return {boolean} true if the array is a palandrome array
 */
function checkPalindrome(arr){
let copy=[];

for(let aaa of arr ){
    copy.push(aaa);
}
for(let i=0;i<arr.length;i++){
    if(arr.shift()!==copy.pop()){
        return false;
    }
}
return true;
}
console.log(checkPalindrome([1,2,2,5,2,1]));