
"use strict"
let prompt=require("prompt-sync")();
// 1. Write a function named checkPrime that accepts a parameter and returns true if the argument
// is a prime number otherwise returns false.
// a. Now write a program that prompts user to input a number and calls the function
// checkPrime to see if the entered number is a prime number or not. 

// function checkPrime(number) {
//   let i=2;
//     while(i<number){

//         if (number%i===0) 
//               return false;            
//   i++
// }
// return true;
// }

// let number=prompt("please enter number");
// let isPrime=checkPrime(number)
// console.log(isPrime)


// using for loop 

// let num=2
let num=+prompt("enter num")
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) {
      return false;
      }
    return num > 1;
  }
  let number=isPrime(num)
  console.log(number)

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