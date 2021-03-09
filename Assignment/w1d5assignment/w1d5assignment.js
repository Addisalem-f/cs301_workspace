"use strict"
// let prompt=require("prompt-sync")();
// 1. Write a function named checkPrime that accepts a parameter and returns true if the argument
// is a prime number otherwise returns false.
// a. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not. 

function checkPrime(number) {
  let i=2;
    while(i<number){

        if (number%i===0) 
              return false;            
  i++
}
return true;
}

let number=prompt("please enter number");
let isPrime=checkPrime(number)
console.log(isPrime)


// using for loop 

// let num=2
let num=+prompt("enter num")
function issPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) {
      return false;
      }
    return num > 1;
  }
  let number2=issPrime(num)
  console.log(number2)

// Q2
// 2. Write a function that computes and returns area of a circle based on the value of input radius.
// a. Write a function that compute volume of a cylinder and making use of function that
// computes area of a circle..

let r=+prompt("enter the radius ") 
let h=prompt("please enter height ")

function areaOfCircle(r) {
    let AreaOfC=Math.PI*Math.pow(r,2);
    return AreaOfC;
}
console.log(areaOfCircle(r))

  function VolumeOfC(h){
     
      let  volumeCylinder=areaOfCircle(r)*h
      return volumeCylinder;
  } 
  console.log(VolumeOfC(h))

// Q3
let w=prompt("width")
let d=prompt("depth")
let h=prompt("height")
let sweep=prompt("sweep")
let sweep1=prompt("sweep1")

function triangleArea(sweep,sweep1,w){
    let  s=(sweep+sweep1+w)/2
 return Math.sqrt(s*(s-sweep)*(s-sweep1)*(s-w))
 }

function livingVol(w,h,d){

    let  livingVolume=w*h*d;
    return livingVolume;

    }

function roofVolume(sweep,sweep1,w){
        return triangleArea(sweep,sweep1,w)*w

    
    }

function houseVol(w,h,d,sweep,sweep1){

  return livingVol(w,h,d) + roofVolume(sweep,sweep1,w,w);

}

console.log(houseVol(w,h,d,sweep,sweep1,w))




// // *Q 4.Write a function to compute HCF of two numbers. Write it as a function expression.*/
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */

let comput1=function (a,b){  let HCF ;
    for(let i=1;i<=b;i++){
        if(b%i===0&&a%i===0){
            HCF=i;
        }
    }
    return HCF;}
    /**
     * 
     * @param {number} a  it takes number parrameter
     * @param {number} b 
     * @return {HCF}
     */
function computeHcf(a,b){
     let HCF ;
    for(let i=1;i<=b;i++){
        if(b%i===0&&a%i===0){
            HCF=i;
        }
    }
    return HCF;
}
console.log(comput1(8,16))
console.log(computeHcf(8,10))

// /*5. Write a function to find LCM of any two numbers using the HCF function from previous
// question. Write it as a function expression.
// a. Now write a program that asks two numbers from the user and displays HCF and LCM of
// the two numbers.
// Hint: search for relation between HCF and LCM. */
// function computeLcm(a,b){
    let lcm=1
        if(a<b){
            let temp=a;
            a=b;
            b=temp;
}       
    for(let i=1;i<=a;i++){
          if(lcm%a===0&&lcm%b===0){
           return lcm;
        }
        if(b%i===0&&a%i===0){
            lcm*=i;
        }else{
            if(a%i===0||b%i===0){
                lcm*=i
            }
        }
  
 
    }
    return lcm;
}

console.log(computeLcm(3,4))
function compLcm(a,b){
  let producat=a*b;
  let lcm=producat/computeHcf(a,b);
  return lcm
  }
  
//   console.log(compLcm(3,4))
//   /*Write a function compute, that takes three parameters. First parameter is a call back function
//   that does the actual operation, second and third are the operands.
//   For e.g., compute (add, 2,3) should return 5
//   - Write compute function as a function expression.
//   - Write add function as a function expression and call compute passing add as a callback.
//   o Refactor to pass add logic as an anonymous function. (Make a copy first)
//   o Refactor to pass add logic as an arrow function. (Make a copy first) */
  
  /**
   * 
   * @param {call fun} add 
   * @param {number} a 
   * @param {number} b 
   */
  function compute(add,a,b){
  
  return add(a,b);
  
  }
  
  function add(a,b){
  return a+b
  }
  
  console.log(compute(add,2,3));
  
  console.log("function expression /anonymous function")
  let compute=function(add,a,b){
  
  return add(a,b);
  
  }
  
  let add=function(a,b){
  return a+b
  }
  
  console.log(compute(add,6,3));
  console.lo("---Arrow function ----")
  let compute=(add,a,b)=>add(a,b);
  let add=(a,b)=>a+b;
  console.log(compute(add,6,3));
  
  
  
