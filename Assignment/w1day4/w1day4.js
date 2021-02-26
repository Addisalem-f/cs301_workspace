"use strict"
let prompt=require("prompt-sync")();
Q1
// ||||||a||
let pNum=+prompt("enter a number")
let count=0;
for(let i=2;i<pNum;i++){
    if(pNum%i===0){
        count++}
}
if(count===0){
    console.log("prime number")
}
else{
    console.log("is not prime")
}
// /
// b
let pNum=+prompt("enter a number")

for(let i=2;i<pNum;i++){
    if(pNum%i===0){

        console.log("is not prime")
    break;

    }
    else{
        console.log("prime number")
    }
    // break;
    }

// Q2 factorial
let factoNum= +prompt("please enter number")
let totaFa=1;
for(let i=factoNum;i>1;i--){
totaFa*=i
}
console.log(totaFa)

// Q3
let guess = prompt("Enter your pin number form 1 to 9 ");
const pin ="0000";
if(pin===guess){
 console.log("correct, welcom back")
}
 else{
console.log("incorrect, try again ")
guess = prompt("please the enter  pin again");
if(pin===guess){
console.log("correct, welcom back")
}else{
console.log("incorrect, try again ")
guess = prompt("Enter the enter your pin number");
if(pin===guess){
console.log("correct, welcom back")
}else{
console.log("sorry but You have been locked out")
}
 }
 
 }

// Q4 fibonance

let fibNum=prompt("enter the number")
let i=0;
let j=1;
let count=1;
let result="";
result=result+ i +","+ j+",";
while(count<fibNum){
let nextNum= i+j;
result=result+nextNum+",";
i=j
j=nextNum;
count++;
}
console.log(result);

Q5
let value=prompt("Enter a digit here")
let sum=0
for(let j=0;j<value.length;j++){
sum+=parseInt(value[j]) 
}
console.log(sum)


Q6
console.log("=====The first pattern======")
for(let i=1;i<=5;i++){
let result="";
for(let j=0;j<i;j++){
result+=i;
 }
console.log(result);
}
console.log("=======The second pattern=======")
for(let i=1;i<=5;i++){
let result="";
for(let j=1;j<=i;j++){
result+=j;
 }
console.log(result);
}

console.log("======The thrid pattern=======")
for(let i=5;i>=1;i--){
let result="";
for(let j=1;j<=i;j++){
result+=i;
 }
console.log(result);
}