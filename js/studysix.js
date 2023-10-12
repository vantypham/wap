/**
console.log(foo); //undefined
//console.log(x); //x is not defined
var foo = function() {
    var x = "ABC"
    console.log(x);
}
console.log(foo); //print content of function above
//console.log(x); //x is not defined
foo();//print ABC
console.log(foo); //print content of function above
//console.log(x); //x is not defined

function b() {
    console.log(x);//20
    function a() {
        console.log(x);//undefined
        if (x==10) {
            var x =15;
        }
        {
            var x = 30;
            console.log(x);//30
        }
        console.log(x);//30
    }
    x = 10;
    console.log(x);//10
    a();
    console.log(x);
}
var x=20;
b();
console.log(x);//10

 */

/** lab6 code 1
x=1;
var a=5;
var b=10;
var c=function(a,b,c) {
    document.write(x);
    document.write(a);
    var f = function(a,b,c) {
        b=a;
        document.write(b);
        document.write(x);
        b=c;
        //var x = 5; //=> by commented out this, c becomes Closure !!! has x value
    }
    f(a,b,c);
    document.write(b);
    var x = 10;
}
c(8,9,10);
document.write(b);
document.write(x);           */

/** lab6 Code 2  
var x = 9;
function myFunction() {
    return x*x;
}
document.write(myFunction());
x=5;
document.write(myFunction())         */

/** lab6 Code 3 */
var foo =1;
function baz() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
baz();   

/** Closure 
let x =1;
function foo(y) {
    return function(z) {
        return x+y+z;
    }
}
let f = foo(2);
console.dir(f);
f(5);                  */
