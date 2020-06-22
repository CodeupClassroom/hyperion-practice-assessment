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
console.log(isTrue(true)); //true
console.log(isTrue(false)); //false
console.log(isTrue(0));//false
console.log(isTrue(null));//false
console.log(isTrue("true"));//false
console.log(isTrue("banana"));//false
console.log(isTrue([1,2]));//false

function isFalse(input) {
    return input === false;
}

console.log(isFalse(null));
console.log(isFalse(true));
console.log(isFalse(undefined));
console.log(isFalse("1"));
console.log(isFalse(23));
console.log(isFalse(false));
console.log(isFalse(function()));


function not (input) {
    return !input;
}
not(false);
not(0);
not("");
not(null);
not(NaN);
not(undefined);
not(true);
not("something");
not(Infinity);
not(123);


function addOne(input) {
    return parseInt(input) + 1;
}

function isEven (input) {
    if(input % 2 ===0) {
        return true;
    }else {
        return false;
    }
}

function isIdentical (x, y) {
    if ( x === y){
        return true;
    } else {
        return false;
    }
}

function isEqual (a, b) {
    if(a == b) {
        return true;
    }else {
        return false;
    }
}

function or(w, z) {
    return w || z;
}

function and(c, d) {
    return c && d;
}

function concat(e, f) {
    return "e" + "f";
}























