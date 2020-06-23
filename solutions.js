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


//1
function isTrue(num){
return num === true;
}

// 2
function isFalse(num){
return num === false;}

// 3 *********
function not(num){
return !num;}

//4
function addOne(num){
return parseFloat(num) + 1;
}

//5
function isEven(num){
return parseFloat(num) % 2 === 0;
}

//6
function isIdentical(x, y){
return x === y;
}

//7
function isEqual(x,y){
return x==y;
}

//8
function or (x,y) {
return x || y;
}

//9
function and(x,y){
return x && y;
}

//10
function concat(x,y){
return ("" + x + y)}





























//
// function isTrue(val) {
//     return val === true;
// }
//
// function isFalse(val) {
//     return val === false;
// }
//
// function not(input) {
//     return !input;
// }
//
// function addOne(num) {
// return parseFloat(num) + 1;
// }
//
// function isEven(num){
// return parseFloat(num) % 2 === 0;
// }
//
// function isIdentical(one, two){
// return one === two;
// }
//
// function or(one, two){
// return one || two;
// }
//
// function isEqual(one, two){
// return one == two;
// }
//
// function and(one, two){
// return one && two;
// }
//
//
// function concat(one, two) {
//     return "" + one + two;
// }
//
