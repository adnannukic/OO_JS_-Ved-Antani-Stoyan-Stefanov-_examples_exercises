// git commit -m "Initial commit, functions section examples"

//                                          //
// What is a function? & Calling a function //
//                                          //

function sum(a, b) {
     var c = a + b;
     return c;
}
// var result = sum(1, 2); // result = 3;
// var result = sum(1); // result = NaN, as second argument sets the parameter to "undefined" => 1 + undefined = NaN;
var result = sum(1, 2, 3, 4, 5, 6); // result = 3, other arguments are ignored;
console.log(result);

//            //
// Parameters //
//            //

function args() {
     return arguments; //special value, object of all passed arguments
}
var objectOfArgumentsPasedToFunction = args(1, 2, 3, 4, 'nija', true);
console.log(objectOfArgumentsPasedToFunction); // the special value of arguments in the function is an object in which all passed arguments are saved, the first has the name (key) "0", the second "1", and so on...


function sumOfSteroids() {
     var res = 0;
     for (const argument in arguments) {
          res += arguments[argument];
     } //loop through special object arguments who stores all passed arguments in a "key: value" pair
     return res;
}
console.log(sumOfSteroids(1, 2, 3, 4, 5));

//                    //
// Default parameters //
//                    //

function render(fog_level = 0, spark_level = 100) {
     console.log(`Fog Level: ${fog_level} and Spark Level: ${spark_level}`);
}

render(10); //Fog Level: 10 and Spark Level: 100 ,in this call we're passing one argument, wich will set the value of first parameter in function  from 0 to 10, second one will stay as default with value od 100, we are ommiting the secon argument;
render(undefined, 10) //Undefined is considered as an absence of parameter value, JS ignore undefined as a value in this case

//The following is allowed:
function t(fog_level = 1, spark_level = fog_level) {
     console.log(`Fog Level: ${fog_level} and Spark Level: ${spark_level}`);
}
t(10); //Fog Level: 10 and Spark Level: 10
function s(fog_level = 10, spark_level = fog_level * 10) {
     console.log(`Fog Level: ${fog_level} and Spark Level: ${spark_level}`);
}
s(10);//Fog Level: 10 and Spark Level: 100

var scope = "outer_scope";
function scoper(val = scope) {
     var scope = "inner_scope";
     console.log(val);
}
scoper(); // outer_scope, because val variable has its own scope sandwiched between outer and inner fuction scope

//                 //
// Rest parameters //
//                 //

function sayThings(tone, ...quotes) {
     console.log(Array.isArray(quotes)); //true
     console.log(`In ${tone} voice, I say ${quotes}`);
}
sayThings("Morgan Freeman", "Something serious", "Imploding Universe", "Amen"); //(...)rest parameter can replace the slightly controversial "arguments" variable

//                  //
// Spread Operators //
//                  //

function sumAll(a, b, c) {
     return a + b + c;
}
console.log(sumAll(...[6, 7, 8])); // 21, the array is splited into individual argument variables 6,7 and 8;

var midWeek = ["Wed", "Thu"];
var weekEnd = ["Sat", "Sun"];
var week = ["Mon", "Tue", ...midWeek, "Fri", ...weekEnd]; //spread operator split the existing array into individual variables;
console.log(week);

//                      //
// Predefined functions //
//                      //

// parseInt()
console.log(parseInt('123'), parseInt('abc123'), parseInt('1abc23'), parseInt('123abc')); //123 NaN 1 123, it return NaN if fails, if string start with number it convert it into number type of data;
console.log(parseInt('FF', '10'), parseInt('FF', 16)); // NaN 255, second argument is radix, he's telling the function what type of numer to expect (decimal, hexadecimal, binary, and so on);
// parseFloat()
console.log(parseFloat('123'), parseFloat('1.23'), parseFloat('1.23abc.00'), parseFloat('a.bc1.23')); // 123 1.23 1.23 NaN
console.log(parseFloat('123e-2'), parseFloat('1e3'), parseInt('1e10')); // 1.23 1000 1, parseFloat() unlike patseInt() understand exponents in the input;
//isNaN()
console.log(isNaN(NaN), isNaN(123), isNaN(parseInt('abc123'))); // true false true
console.log(isNaN('1.23'), isNaN('a1.23')); // false true, if we pass a string to this function, function will also try to convert the input to a number
//isFinite()
console.log(isFinite(Infinity), isFinite(-Infinity), isFinite(12), isFinite(1e309)); // false false true false;
//Encode/decode URIs (Uniform Resource Identifier's)
var uri = "http://www.packtpub.com/script.php?q=this and that";
console.log(encodeURI(uri)); // http://www.packtpub.com/script.php?q=this%20and%20that
console.log(encodeURIComponent(uri)); // http%3A%2F%2Fwww.packtpub.com%2Fscript.php%3Fq%3Dthis%20and%20that
//in second case encode all chars inside a passed string, first one make a usable URI
// eval() is evil!!
// alert() originali not JS function, no docs in ECMA spec, it is provided by the browser (host)

//                    //
// Scope of variables //
//                    //

//local variable is define inside function
//global variable is define outside any function
var global = 1;
function f() {
     var local = 2; //if we omit key word var, and just type local = 2; in the background JS will declare this variable as var type global scope variable, hoisted declaration 
     global++;
     return global;
}
console.log(f(), f(), f()); // 2 3 4
console.log(global); // 4
// console.log(local); //ReferenceError..., local variable is not visible outside function f;


//                   //
// Variable hoisting //
//                   //

var a = 123;
function fa() {
     console.log(a); // undefined, because local var a will hoist declaration at the top of the function and will initialize with value "undefined";
     var a = 1;
     console.log(a); // 1
}
fa();


//             //
// Block scope //
//             //

var x = 1;
{
     let x = 2;
     console.log(x); // 2
}
console.log(x); // 1

function swap(a, b) {
     if (a > 0 && b > 0) {
          let temp = a;
          a = b;
          b = temp;
     }
     console.log(a, b); // 2 1
     // console.log(temp); //ReferenceError: temp is not defined;
     return [a, b];
}
swap(1, 2);

function blocker(x) {
     if (x) {
          let f;
          // let f; // SyntaxError, we cannot redeclare the same variable within the same function;
     }
}

const car = {};
car.tyres = 4;
console.log(car); // tyres: 4, const has nothing to do with immutable values, they create immutable binding;

//                   //
// Function are data //
//                   // 

var f = function () {
     return 1;
} // known as "function literal notation", function () { return 1; } is a function expression;
var fu = function myFunct() {
     return 1;
} // function myFunct () { return 1; } is a named function expression (NFE), rearly used;
function define() {
     return 1;
}
var express = function () {
     return 1;
}
console.log(typeof define, typeof express); // function function
var sumOf = function (a, b) {
     return a + b;
}
var add = sum;
console.log(typeof add, add(1, 2)); // function 3, function is treated as a regular value, it can be copied to a different variable;

//                     //
// Anonymous functions //
//                     //

var func = function (a) {
     return a;
} // anonymous function, function without name, often without assigning it to a variable;

//                    //
// Callback functions // // Type of anonymous function //
//                    //

function invokeAdd(a, b) {
     return a() + b();
}
function one() {
     return 1;
}
function two() {
     return 2;
}
console.log(invokeAdd(one, two)); // 3
console.log(invokeAdd(function () { return 1; }, function () { return 2; })); // 3. function that return a 1 and 2 are anonymous callback functions;

function multiplyByTwo(a, b, c) {
     let arr = [];
     for (let i = 0; i < 3; i++) {
          arr[i] = arguments[i] * 2;
     }
     return arr;
}
function addOne(a) {
     return a + 1;
}
console.log(multiplyByTwo(1, 2, 3), addOne(100)); // [2,4,6] 101

let myArr = [];
myArr = multiplyByTwo(10, 20, 30);
for (let i = 0; i < myArr.length; i++) {
     myArr[i] = addOne(myArr[i]);
}
console.log(myArr); // [21,41,61]

//modifications:
function multiplyByTwo1(a, b, c, callback) {
     myArr = [];
     for (i = 0; i < 3; i++) {
          myArr[i] = callback(arguments[i] * 2);
     }
     return myArr;
}
console.log(multiplyByTwo1(10, 20, 30, addOne)); // [21,41,61], all work is done in one function call;
//modifications, instead of defining addOnd(), use anonymous callback function:
console.log(multiplyByTwo1(10, 20, 30, function (a) {
     return a + 1;
})); // [21,41,61], these functions are easy to change, you can see change results on the 

//                     //
// Immediate functions //
//                     // 

//they are called immediately after defined

(
     function () {
          console.log('boo');
     }
)();
(
     function (params) {
          console.log('boo');

     }()
); // it does the same as previous one;
(
     function (name) {
          console.log('Hello ' + name + '!');
     }
)('dude');

//                           //
// Inner (private) functions //
//                           //

function outer(param) {
     function inner(theinput) {
          return theinput * 2;
     }
     return 'The result is ' + inner(param);
}
// or:
let outerVar = function (param) {
     let innerVar = function (theinput) {
          return theinput * 2;
     }
     return 'The result is ' + innerVar(param);
}
console.log(outer(2), outerVar(8)); // The result is 4 The result is 16;

//                                 //
// Functions that return functions //
//                                 //

function aa() {
     console.log('A!');
     return function () {
          console.log('B!');
     }
}
aa()(); // A! B!, executing returned function immediately without assigning it to a new variable;

//                            //
// Functions, rewrite thyself //
//                            //

//Continuing with the previous example:
aa = aa(); // A!, overwriting the function, on next call code will print only B!, wont do repetitive work and print A!;
function aaa() {
     console.log('A!');
     aaa = function () {
          console.log('B!');
     };
} // function rewrite itself
aaa(); //A
aaa(); //B
aaa(); //B ... all next calls will display B!;

var aaaa = (function () {
     function someSetup() {
          let setup = 'done';
     }

     function actualWork() {
          console.log("Worky-worky");
     }
     someSetup();
     return actualWork;
}()); // on this initially call there is no console log , just setup vriable initalization
aaaa(); //Worky-worky

//*
//          //
// Closures //
//          //
//*

//             //
// Scope chain //
//             //

var a = "globale variable";
var F = function () {
     var b = "local variable";
     var N = function () {
          var c = "inner variable";
          return b;
     };
     return N;
};
// console.log(b); // ReferenceError...
var inner = F();
console.log(inner());

var inner1; // Placeholder
var F1 = function () {
     var b1 = "local variable";
     var N1 = function () {
          return b1;
     };
     inner1 = N1;
};
F1(); // must be invoked to initialize inner1 global variable;
console.log(inner1()); // now the inner1 has the reference to the local N1 function, closure effect;

function F2(param) {
     var N2 = function () {
          return param;
     }
     param++;
     return N2;
}
var inner2 = F2(232);
console.log(inner2()); // 233 

//                    //
// Closures in a loop //
//                    //

function F3() {
     var arr3 = [], i;
     for (i = 0; i < 3; i++) {
          arr3[i] = function () {
               return i;
          };
     }
     return arr3;
}
var arr31 = F3();
console.log(arr31[0](), arr31[1](), arr31[2]()); // 3 3 3, but if we change a counter i in a loop to be let type of variable we would get a expected 0,1,2 output;
// second solution with still using var keyword would be:
function F4() {
     var arr4 = [], i;
     for (i = 0; i < 3; i++) {
          arr4[i] = (function (x) {
               return function () {
                    return x;
               };
          })(i);
     }
     return arr4;
}
var arr41 = F4();
console.log(arr41[0](), arr41[1](), arr41[2]()); // 0 1 2, additional closure;

//                   //
// Getter and setter //
//                   //

var getValue, setValue; // global variables, they will except function value;

(function () {
     var secret = 0;
     getValue = function () {
          return secret;
     }
     setValue = function (x) {
          if (typeof x === 'number') { // simple validation, checking if the passed argument is number type of data;
               secret = x;
          }
     }
}());
console.log(getValue()); // 0
setValue(123);
console.log(getValue()); // 123
setValue(true);
console.log(getValue()) // 123

//          //
// Iterator //
//          //

function setup(x) {  // x is a array
     var i = 0;
     return function () {
          if (i < x.length) {
               return x[i++];
          } else { // when done with iteration, go back to start;
               i = 0;
               return 'You finished looping through array.';
          }
     }
}

var next = setup(['a', 'b', 'c']);
console.log(next()); // a
console.log(next()); // b
console.log(next()); // c
console.log(next()); // You finished looping through array.
console.log(next()); // a
console.log(next()); // b
console.log(next()); // c

//                 //
// Arrow functions //
//                 //

const num = [1,2,3];
const squares = num.map(n => n*n); // no keyword function or return, n is a parametar, n*n is an expression;
console.log(squares); // [ 1, 4, 9 ]