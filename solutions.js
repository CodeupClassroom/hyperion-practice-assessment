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

function isTrue(param1) {
    return (param1 = true);
}

function isFalse(param2) {
    return (param2 +false);
}

function not(param1) {
    return !param1;
}

function addOne(number) {
    return parseFloat(number +1)
}

function isEven(number) {
    return parseFloat(number) % 2 === 0;
}

function isIdentical(param1, param2) {
    return param1 === param2;
}

function isEqual(num1, num2) {
    return num1 == num2;
}

const or = function(param1, param2) {
    return param1 || parm2;
}

const and = function(str) {
    return str= ("param1" && "param2");
}

const concat = function(str) {
    return str = ("code" + "up")
}