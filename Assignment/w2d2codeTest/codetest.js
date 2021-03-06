'use strict'
/*Q 4.Write a function to compute HCF of two numbers. Write it as a function expression.*/

/**
     * 
     * @param {number} a 
     * @param {number}b
     */

let comput1=function (a,b){
      let HCF ;
    for(let i=1;i<=b;i++){
        if(b%i===0&&a%i===0){
            HCF=i;
        }
    }
    return HCF;
}

    /**
     * 
     * @param {number} a number
     * @param {number} b number
     * @return{}
     */
    
function computeHcf(a,b){
     let HCF ;
    for (let i=1;i<=b;i++){
        if(b%i===0&&a%i===0){
            HCF=i;
        }
    }

    return HCF;
}

console.log(comput1(8,16))
console.log(computeHcf(8,10))
/** */
//5. Write a function to find LCM of any two numbers using the HCF function from previous
// question. Write it as a function expression.
// a. Now write a program that asks two numbers from the user and displays HCF and LCM of
// the two numbers.
//Hint: search for relation between HCF and LCM. */
// function computeLcm(a,b){
//     let lcm=1
//         if(a<b){
//             let temp=a;
//             a=b;
//             b=temp;
// }       
//     for(let i=1;i<=a;i++){
//           if(lcm%a===0&&lcm%b===0){
//            return lcm;
//         }
//         if(b%i===0&&a%i===0){
//             lcm*=i;
//         }else{
//             if(a%i===0||b%i===0){
//                 lcm*=i
//             }
//         }
  
 
//     }
//     return lcm;
//}

//console.log(computeLcm(3,4))
function compLcm(a,b){
let producat=a*b;
let lcm=producat/computeHcf(a,b);
return lcm
}

// console.log(compLcm(3,4))
/*Write a function compute, that takes three parameters. First parameter is a call back function
that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first) */

function compute(add,a,b){

return add(a,b);

}

function add(a,b){
return a+b
}

console.log(compute(add,2,3));

// console.log("***************** function expression /anonymous function**********************")
// let compute=function(add,a,b){

// return add(a,b);

// }

// let add=function(a,b){
// return a+b
// }

// console.log(compute(add,6,3));
// console.log("***************** Arrow function **********************")
// let compute=(add,a,b)=>add(a,b);
// let add=(a,b)=>a+b;
// console.log(compute(add,6,3));



