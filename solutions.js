"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}

function isFalse (input) {
    return input === false;
}
function not(input) {
    return !input;
}
function concat(input1, input2){
    return "" + input1 + input2;
}
function addOne(num) {
    return parseFloat(num) + 1;
}
function isEven(num) {
    return parseFloat(num) % 2 === 0;
}
function isEqual(num1, num2) {
    return num1 == num2;

}
function isIdentical(input1,input2) {
    return input1 === input2;
}
function or(input1, input2){
    return input1 || input2;
}
function and(input1, input2) {
    return input1 && input2;
}











