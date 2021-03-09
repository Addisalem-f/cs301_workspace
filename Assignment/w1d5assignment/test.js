"use strict";
let prompt=require("prompt-sync")();
// 1. Write a function named checkPrime that accepts a parameter and returns true if the argument
// is a prime number otherwise returns false.
// a. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not. 
 /**
  * 
  * @param {number} number the parammeter takes a number
  * @returns{boolean} it returns boolean value
  */
function checkPrime(number) {
    let i=2;
      while(i<number){
  
          if (number%i===0) 
                return false;            
    i++;
  }
  return true;
  }
let number=prompt("please enter number");
let isPrime=checkPrime(number);
console.log(isPrime);

/**
 * this is the same to check if the number is prime or not prime by using for loop 
 * @param {number} num  it takes number  
 * @return {boolean} its result is true, if number is prime otherwise false; 
 */
function issPrime(num){
    for (var i = 2; i < num; i++){
      if(num % i === 0) {
      return false
      }
    return num > 1;
  }}
let num=+prompt("enter num");
  let number2=issPrime(num);
  console.log(number2);

//    Q2
// // 2. Write a function that computes and returns area of a circle based on the value of input radius.
// // a. Write a function that compute volume of a cylinder and making use of function that
// // computes area of a circle..

/**
 * @param {number} rrr takes radius in number
 * @param {number} hhh takes height in number
 * @return {number} it returns number
 */
let rrr=+prompt("enter the radius ") ;
let hhh=+prompt("please enter height ");
function areaOfCircle(rrr) {
  let AreaOfC=Math.PI*Math.pow(rrr,2);
  return AreaOfC;
}
console.log(areaOfCircle(rrr));
/**\
 * 
 */

function VolumeOfC(hhh){
    let  volumeCylinder=areaOfCircle(rrr)*hhh;
    return volumeCylinder;
} 
console.log(VolumeOfC(hhh));


// Q3
/**
 * @param {string} ..
 * @param {string}
 * @param {string}
 * 
 */

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

console.log(houseVol(w,h,d,sweep,sweep1,w));



// // *Q 4.Write a function to compute HCF of two numbers. Write it as a function expression.*/
/**
 * 
 * @param {number} a  
 * @param {number} b 
 */
let comput1=function (a,b){
    let hcf ;
  for(let i=1;i<=b;i++){
      if(b%i===0&&a%i===0){
          hcf=i;
      }
  }
  return hcf;}
  /**
   * 
   * @param {number} a  it takes number parrameter
   * @param {number} b 
   * @return {HCF}
   */
function computeHcf(a,b){
   let hcf ;
  for(let i=1;i<=b;i++){
      if(b%i===0&&a%i===0){
          hcf=i;
      }
  }
  return hcf;
}
console.log(comput1(8,16))
console.log(computeHcf(8,10))


  