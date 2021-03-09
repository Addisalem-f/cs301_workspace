
"use strict"
/**
 * 
 * @param {array} firsArray first array
 * @param {array} secondArray second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    isArrayEqual()
    /**
     * 
     * @param {array} arr 
     * @returns {number} result of addition of first and last elements of the array 
     */
    function addend(arr) {
        let firstE = arr[0];
        let lastE = arr[arr.length - 1];
        return (firstE + lastE);
    }

    /**
     * 
     * @param {array} arr;
     * @return {number} ;
     */
    function getMiddle(arr) {
        let middle;
        middle = (arr.length) / 2;
        if (arr.length % 2 === 0) {
            return (arr[middle - 1] + arr[middle]) / 2;
        } else {
            return arr[Math.ceil((arr.length - 1) / 2)];
        }
    }
    /**
     * 
     * @param {array} list takes array parameter
     * @returns {array} return array 
      */
    function rotateLeft(list) {
        for (let i = 0; i + 1 < list.length; i++) {
            let swap = list[i];
            list[i] = list[i + 1];
            list[i + 1] = swap
        }
        return list;
    }
    /**
     * 
     * @param {array} arr 
     * @returns {array};
     */
    function rotateRight(arr) {
        arr.unshift(arr.pop());
        return arr;
    }
    /**
     * 
     * @param {array} arr enter the array
     * @param {number} num enter the 
     * * @returns{array}; array of element
     */
    function rotateNRight(arr, num) {
        for (let i = 1; i <= num; i++) {
            arr.unshift(arr.pop());
        }
        return arr;
    }
    /**
     * 
     * @param {array} arr 
     * @param {array} opd1 
     * @param {array} opd2 
     * @returns 
     */
    function filterRange(arr, opd1, opd2) {
        const newArr = [];
        let arrLngth = arr.length;
        let count = 0;
        for (let i = 0; i < arrLngth; i++) {
            if (arr[i] >= opd1 && arr[i] <= opd2) {
                newArr[count++] = arr[i];
            }

        }
        return newArr;
    }
    /**
     * 
     * @param {array} arr 
     * @returns 
     */

    function filterPalindromes(arr) {
        const newArr = [];
        let ArLn = arr.length;
        let count = 0;
        for (let i = 0; i < ArLn; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i].charAt(j) === arr[i].charAt((arr[i].length - 1) - j)) {
                    newArr[count] = arr[i];
                }

            }
            count++;
        }
        return newArr;
    }

    /**
     * 
     * @param {array} arr takes string array 
     * @returns {array} transformed array
     */
    function reverse2String(arr) {
        arr = ["Quick", "Brown", "Fox"];
        let transformed = (arr.reverse().join("_"));
        return transformed;
    }

    /**
     * 
     * @param {array} arr 
     * @returns {};
     */
    function reverse2String(arr) {
        let reversedArray = [];
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            reversedArray.push(arr.pop());
        }
        let result = reversedArray.join("_");
        return result;
    }

    /**
     * @param{array}
     * @param{array}
     */
    function matrixAddition(matr1, matr2) {
        letnewm = [];
        for (leti = 0; i < matr1.length; i++) {
            //let sum=0;
            for (letj = 0; j < matr1[i].length; j++) {
                //sum+=matr1[i][j]+matr2[i][j];
                newm.push(matr1[i][j] + matr2[i][j]);
            }
            console.log();
        }
        returnnewm;
    }

    //Given an expression array exp, write a program to examine whether the pairs and the orders of 
    // “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
    // Example: 
    // Input: exp = ["(", ")", "[", "{", "}", "]"] 
    // Output: Balanced
    // Input: exp = ["[", "(", "]", ")"] 
    // Output: Not Balanced

    function isBalanced(expr) {
        let stack = [];
        for (let i = 0; i < expr.length; i++) {
            // if opening braces push
            if (expr[i] == "(" || expr[i] == "[" || expr[i] == "{") {
                stack.push(expr[i]);
                continue;
            }

            // if it a closing brace and nothing to match with it's not balanced.
            if (stack.length === 0) return false;

            let opn = stack.pop();

            // if opening and closing pairs not matching it's not balanced.
            switch (expr[i]) {
                case ")":
                    if (opn === "{" || opn === "[") return false;
                    break;
                case "}":
                    if (opn === "(" || opn === "[") return false;
                    break;
                case "]":
                    if (opn === "(" || opn === "{") return false;
                    break;
            }
        }

        // if there are extra closing brackets not balanced.
        return (stack.length === 0);
    }

    console.log(isBalanced(['{', '(', ')', '}', '{', '}', ']']))
    module.exports = { isArrayEqual, addend, getMiddle, rotateLeft, rotateRight, rotateNRight, filterRange, filterPalindromes, reverse2String, matrixAddition };