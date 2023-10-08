"use strict";
try {
    var x = 1; // valid in strict mode
    y = 1;     // invalid in strict mode
} catch (ex) {
    console.log('I have handled of try catch this error:' + ex);
}
/** 
 * 1. Define a function max() that takes two numbers as arguments and returns 
 * the largest of them. Use the if-thenelse construct available in Javascript. 
 */
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log('Q1/');
console.log(max(10, 20));
/**
 * 2. Define a function maxOfThree() that takes three numbers as arguments and returns 
 * the largest of them.
 * 
 */
function maxOfThree(a, b, c) {
    let max1 = max(a, b);
    return max(max1, c);
}
console.log('Q2/');
console.log(maxOfThree(1, 3, 2));
/** 3.
 * Write a function isVowel() that takes a character (i.e. a string of length 1) 
 * and returns true if it is a vowel, false otherwise.
 */
function isVowel(c) {
    return (['a', 'e', 'i', 'o', 'u'].indexOf(c.toLocaleLowerCase()) >= 0);
}
console.log('Q3/');
console.log(isVowel('A'));
console.log(isVowel('B'));

/** 4.
 * Define a function sum() and a function multiply() that sums and multiplies (respectively) 
 * all the numbers in the given array of numbers. For example, sum([1,2,3,4]) 
 * should return 10, and multiply([1,2,3,4]) should return 24. 
 * Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
 */
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        sum = sum + e;
    }
    return sum;
}
function multiply(arr) {
    let m = 1;
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        m = m * e;
    }
    return m;
}
console.log('Q4/');
console.log(sum([1, 2, 3, 4])); //10
console.log(multiply([1, 2, 3, 4])); //24

/** 5.
 * Define a function reverse(str) that computes the reversal of a string. 
 * For example, reverse("jag testar") should return the string "ratset gaj"
 */
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log('Q5/');
console.log(reverse('jag testar')); //ratset gaj

/** 6.
 * Write a function findLongestWordLength() that takes an array of words and 
 * returns the length of the longestone
 */
function findLongestWordLength(arr) {
    let maxlen = 0;
    let element = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= maxlen) {
            maxlen = arr[i].length;
            element = arr[i];
        }
    }
    return maxlen;
}
console.log('Q6/');
console.log(findLongestWordLength(['jag', 'testar', 'apple', 'kingkong'])); //8

/** 7.
 * Write a function filterLongWords() that takes an array of words and an integer 
 * i and returns a new array containing only those words that were longer than i characters
 */
function filterLongWords(arr, i) {
    let newarray = arr.filter(e => e.length > i);
    return newarray;
}
console.log('Q7/');
console.log(filterLongWords(['jag', 'testar', 'apple', 'kingkong'], 7)); // ['kingkong]

/** 8.
 * Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
 * and calculates andreturns the sum of the squares of each number in the input array. 
 * E.g. computeSumOfSquares([1,2,3]) should becomputed as 1*1 + 2*2 +3*3 = 14. 
 * Note: Write your Javascript code without using Imperative programming. 
 * i.e. DoNOT use any explicit looping construct; instead use functional programming style/approach
 */
function computeSumOfSquares(array) {
    return array.reduce((sum, e) => sum += e * e, 0);
}
console.log('Q8/');
console.log(computeSumOfSquares([1,2,3])); //14

/** 9.
 * Write a function named, printOddNumbersOnly, that takes as input, an array of 
 * numbers and it finds and prints only the numbers which are odd
 */
function printOddNumbersOnly(arr) {
    return arr.filter(e => e%2 != 0);
}
console.log('Q9/');
console.log(printOddNumbersOnly([1,2,3,7,8,2,4,1,5,4,2])); //[1,3,7,1,5]

/** 10.
 * Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, 
 * an array of integral numbers and calculates and returns the sum of the 
 * squares of only the even numbers in the input array. 
 * E.g. computeSumOfSquaresOfEvensOnly([1,2,3,4,5]) should be computed as 2*2 +4*4 = 20
 */
function computeSumOfSquaresOfEvensOnly(arr) {
    let localArr = arr.filter(e => e % 2 == 0);
    return localArr.reduce((s, e) => s + e * e, 0)
}
console.log('Q10/');
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5])); //20

/** 11.
 * Using the Array.reduce(…) function, re-implement your functions, 
 * sum(…) and multiply(…) (defined in Problem 4 above) without using 
 * Imperative programming.
 *  i.e. Do NOT use any explicit looping construct; instead use 
 * functional programming style/approach
 */
function sumReduce(arr) {
    return arr.reduce((sum, e) => sum + e);
}
function multiplyReduce(arr) {
    return arr.reduce((sum, e) => sum * e);
}
console.log('Q11/');
console.log(sumReduce([1, 2, 3, 4])); //10
console.log(multiplyReduce([1, 2, 3, 4])); //24

/**12.
 * Write a function named printFibo, that takes as input, a given length, n, 
 * and any two starting numbers a and b, and it prints-out the Fibonacci 
 * sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
 * beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
 * as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; 
 * printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
 * printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
 * and printFibo(n=10, a=0, b=1), 
 * prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output)
 */
function printFibo(n, a, b) {
    if (n == 0) return null;
    if (n == 1) return [a];
    if (n == 2) return [a, b];
    let num1 = a;
    let num2 = b;
    if (a<=b) {
        num1 = a;
        num2 = b;
    }
    if (a>b){
        num1 = b;
        num2=a;
    }
    let arr = [num1, num2];
    for (let i = 2; i < n; i++) {
        let nextNum = num1 + num2;
        arr[arr.length] = nextNum;
        num1 = num2;
        num2 = nextNum;
    }
    return arr;
}
console.log('Q12/');
console.log(printFibo(0, 0, 1)); //null
console.log(printFibo(1, 0, 1)); //0
console.log(printFibo(2, 0, 1)); //0,1
console.log(printFibo(3, 0, 1)); //0,1,1
console.log(printFibo(6, 0, 1)); //0,1,1,2,3,5
console.log(printFibo(10, 0, 1)); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(printFibo(5, 3, 2)); //2,3,5,8,13
console.log(printFibo(5, 2, 3)); //2,3,5,8,13
