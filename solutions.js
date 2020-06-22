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

function isTrue(value){
    return value === true;
}

function isFalse(value) {
    return value === false;

}


function not(input) {
    switch (input) {
        case false:
            return true;
            break;
        case 0:
            return true;
            break;
        case "":
            return true;
            break;
        case null:
            return true;
            break;
        case NaN:
            return true;
            break;
        case undefined:
            return true;
            break;
        case true:
            return false;
            break;
        case "something":
            return false;
            break;
        case Infinity:
            return false;
            break;
        case 123:
            return false;
            break;

    }

}


function addOne(input){
    switch (input) {
        case == 0 :
            return input + 1;
            break;
        case == 2 :
            return input + 1;
            break;
        case 0 || "0" :
            return input + 1;
            break;
        case 0 || "0" :
            return input + 1;
            break;
        case 0 || "0" :
            return input + 1;
            break;


    }

}








//1
/*
function isTrue(input) {
    return input === true;
}

//2
function isFalse(input) {
    return input === false;
}

function addOne(input) {
    // if (!isNaN(input)) {
    //     return parseFloat(input) + 1;
    // } else {
    //     return NaN;
    // }
    return parseFloat(input) + 1;
}

function not(input) {
    return !input;
}

function isEven(num) {
    return parseFloat(num) % 2 === 0;
}

function isIdentical(value1, value2) {
    return value1 === value2;
}

function isEqual(value1, value2) {
    return value1 == value2;
}

function or(value1, value2) {
    return value1 || value2;
}

function and(value1, value2) {
    return value1 && value2;
}

function concat(value1, value2) {
    return "" + value1 + value2;
}*/
