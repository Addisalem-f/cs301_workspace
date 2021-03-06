"use strict";
/**
 * this is a simple function that takes two parameters and returns the sum 
 * @author Addisalem fuiliso
 * since 2021/3/4
 * @param {number} axx is first operand
 * @param {number} byy is second operand
 * @return {number} sum
 */
function add(axx, byy) {
    return axx+byy;
}
/**
 * 
 * @param {number} op11  is the first operand
 * @param {number} op22 is the second operand
 * @return {number} sub
 */
function sub(op11, op22) {
    return op11-op22;
}

/**
 * 
 * @param {number} op1 is the first operand 
 * @param {number} op2 is the second operand 
 * @returns {number}  it returns  number value, div
 */
function div(op1, op2) {
return op1/op2;

}
module.exports = {add, sub, div};