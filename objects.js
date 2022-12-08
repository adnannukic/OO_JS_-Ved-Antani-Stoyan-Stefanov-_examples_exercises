//                                 //
// Acessing an object's properties //
//                                 //

let hero = {
     breed: 'Turtle',
     ocuppation: 'Ninja'
};
console.log(hero.breed); // Turtle
console.log(hero['ocuppation']); // Ninja
console.log('Hair color is ' + hero.hair_color); // Hair color is undefined, If the property does not exist, a ccessing will return the undefined value;
let book = {
     name: 'Catch-22',
     published: 1961,
     author: {
          first_name: 'Joseph',
          last_name: 'Heller'
     }
};
console.log(book.author.first_name); // Joseph
console.log(book['author']['last_name']); // Heller
console.log(book.author['first_name']); // Joseph, works even if you mix the accessing ways;

//                            //
// Calling an object's method //
//                            //

let hero1 = {
     breed: 'Turtle',
     ocuppation: 'Ninja',
     say: function () {
          return 'I am ' + hero.ocuppation;
     }
};
console.log(hero1.say()); // I am Ninja
console.log(hero1['say']()); // I am Ninja

//                             //
// Altering properties/methods //
//                             //

let hero2 = {};
hero2.breed = 'Turtle';
hero2.name = 'Leonardo';
hero2.sayName = function () {
     return hero2.name;
};
console.log(hero2.sayName()); // Leonardo
delete hero2.name;
console.log(hero2.sayName()); // undefined

//                      //
// Using the this value //
//                      //

let hero3 = {
     name: 'Rafaelo',
     sayName: function () {
          return this.name;
     }
};
console.log(hero3.sayName()); // Rafaelo

//                       //
// Constructor functions //
//                       //

function Hero() {
     this.occupation = 'Ninja';
}
let hero4 = new Hero(); // Store object in variable, and must use a new keyword;
console.log(hero4.occupation); // Ninja

function Hero1(name) {
     this.name = name;
     this.occupation = 'Ninja';
     this.whoAreYou = function () {
          return `I'm ${this.name} and I'm a ${this.occupation}`;
     }
}
let h1 = new Hero1('Michelangelo');
let h2 = new Hero1('Donatelo');
console.log(h1.whoAreYou()); //  I'm Michelangelo and I'm a Ninja
console.log(h2.whoAreYou()); //  I'm Donatelo and I'm a Ninja

//NOT AN ERROR::
let h3 = Hero1('Leonardo');
console.log(typeof h3); // undefined, without new keyword, when you call a function design to be constructor you will not make an error, but in otherhand you will not create an object, just store a value that function returns in the variable, in this case function does not return anything;
//In this case, "this" refers to the global object;

//                   //
// The Global object //
//                   //

//                          //
// The constructor property //
//                          //

//                         //
// The instanceof operator //
//                         //

function Hero2() { };
var h = new Hero2();
var o = {};
console.log(h instanceof Hero2); //true
console.log(h instanceof Object); // true
console.log(o instanceof Object); // true
console.log(o instanceof Hero2); // false

//                              //
// Fuctions that return objects //
//                              //

function factory(name) {
     return {
          name: name
     };
}
var obj = factory('one');
console.log(obj.name); // one
console.log(obj.constructor); // function Object()

function C() {
     this.a = 1;
}
var c = new C();
console.log(c.a); // 1

function C2() {
     this.a = 1;
     return { b: 2 };
}
var c2 = new C2();
console.log(c2.a) // undefined
console.log(c2.b) // 2, if there is a return in constructor he will return what that return carry(only in case of object in that return), but if there is no explicit return, function will  return "this" object

function C3() {
     // var this = {}; //pseudo code, can't do this, because "this" is a keyword, reserved
     this.a = 1;
     // return this;
}

//                //
// Passing object //
//                //

var original = { howmany: 1 };
var mycopy = original;
console.log(mycopy.howmany); // 1
mycopy.howmany = 10;
console.log(original.howmany); // 10, when assigning a object to another variable, you only pass a reference to that object, so if you make the change on that copyed object you re making a change on original object;
// Same applies when passing objects to functions:
var nullify = function (o) { o.howmany = 0 };
nullify(original);
console.log(original.howmany); // 0

//                   //
// Comparing objects //
//                   //

//When you compare objects you will get "true" only if you comparetwo references to the same object;

var fido = { breed: 'dog' };
var benji = { breed: 'dog' };
console.log(fido === benji) // false, not the same object
console.log(benji == fido) // false, not the same object

var myDog = benji;
console.log(myDog === benji) // true, because myDog variable points to the benji object, any change on variable myDog will apply on the original benji object;
console.log(fido === myDog) // false, not the same object

//                     //
// ES6 object literals //
//                     //

let a = 1;
let b = 2;
let val = { a: a, b: b };
console.log(val) // { 'a': 1, 'b': 2 }
let val1 = { a, b }; //shorted syntax
console.log(val1) // { 'a': 1, 'b': 2 }
var obje = {
     prop: 1,
     modifier: function () {
          console.log(this.prop);
     }
}
var obje1 = {
     prop: 1,
     modifier() {
          console.log(this.prop);
     }
}//shorted sytax                
obje1.prop = 2;
obje1.modifier(); // 2

let vehicle = "car";
function vehicletype() {
     return "truck";
}
let car = {
     [vehicle + "_model"]: "Ford"  //dynamic property names, ES6
}
let truck = {
     [vehicletype() + "_model"]: "Mercedes" //dynamic property names, ES6
}
console.log(car, truck); // { car_model: 'Ford' } { truck_model: 'Mercedes' }

//                                 //
// Object properties and atributes //
//                                 //
//every object ha a key and atributes:

let object1 = {
     age: 25
}
console.log(Object.getOwnPropertyDescriptor(object1, 'age')); // { value: 25, writable: true, enumerable: true, configurable: true }

Object.defineProperty(object1, 'age', { configurable: false });
console.log(Object.getOwnPropertyDescriptor(object1, 'age')); // { value: 25, writable: true, enumerable: true, configurable: false }

//                    //
// ES6 object methods //
//                    //

//Copy properties using Object.assign
let aObject = {};
Object.assign(aObject, { age: 25 });
console.log(aObject); // {age: 25}

let aObject1 = { age: 25, gender: 'male' };
Object.assign(aObject1, { age: 27 });
console.log(aObject1); // {age: 27, 'gender': "male"}

let aObject2 = { age: 23, gender: "male" }
Object.defineProperty(aObject2, 'superpowers', { enumerable: false, value: 'ES6' })
console.log(aObject2); // {age: 23, 'gender': "male"}
// Object.assign(aObject2, { superpowers: 'strongman' }); //error, superpower set to be readonly 

//Compare values with Object.is only to avoid comparation of NaN and NaN, and -0 and +0:
console.log(NaN === NaN) // false
console.log(-0 === +0)  // true
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(-0, +0)) // false

//               //
// Destructuring //
//               //

var config = {
     server: 'localhost',
     port: '8080',
     timeout: 900
}
var server1 = config.server;
var port1 = config.port; //pretty straightforward, but what ifsome properties are nested, and much more complicated  to access;

let { server, port } = config;
console.log(server, port); // localhost 8080

let { timeout: t } = config;
console.log(t); // 900

server = '127.0.0.1';
port = '80';
console.log(server, port); // 127.0.0.1 80
({ server, port } = config); // must be in ()
console.log(server, port); // localhost 8080

//                  //
// Built-in objects //
//                  //

//Object() - is a parent of all JS objects
var o = {}; // or, var o = new Object();
console.log(o.constructor); // [Function: Object], object o is not completely blank(empty), it already contains several inherited methods and properties;
console.log(o.toString()); // [object Object]
console.log(o.valueOf()); // {}, often this is the object itself

//Array() - is a function that you can use as a constructor to create arrays
var arr = new Array(1, 2, 3, 'four'); // or, var a = [1,2,3,'four'];
var arr1 = new Array(5); //in this case it will create an array with 5 elements of value undefined, it consider passed number as length
console.log(arr, arr1); // [ 1, 2, 3, 'four' ] [ <5 empty items, 'undefined'> ]
//arrays are objects, but special type, their names of properties are automaatically assigned using numbers starting from 0,they have length property, they have more built-in methods

//differences between array and an object:
console.log(arr.length, typeof o.length) // 4 undefined

//                   //
// ES6 array methods //
//                   //

//Array.from
function toArray(args) {
     var result = [];
     for (let i = 0; i < args.length; i++) { // must loop arguments object
          result.push(args[i])
     }
     return result;
}
function doSomething() {
     var args = toArray(arguments);
     console.log(args);
}

doSomething("hellow", "world"); // [ 'hellow', 'world' ]

function doSomething1() {
     console.log(Array.from(arguments));
} //much cleaner syntax
doSomething("hellow", "world"); // [ 'hellow', 'world' ]

function doSomething2() {
     console.log(Array.from(arguments, function (elem) {
          return elem + " mapped"; //mapping arguments elements
     }));
}
doSomething("hellow", "world"); // [ 'hellow', 'world' ]

//Array.of
let arrayOf1 = Array.of(1, "2", { obj: "3" });
console.log(arrayOf1.length) // 3

//Array.prototype methods

let arrayPrototype = ['a', 'b', 'c'];
for (const index of arrayPrototype.keys()) {
     console.log(index); // 0 1 2
}
for (const value of arrayPrototype.values()) {
     console.log(value); // a b c
}
for (const [index, value] of arrayPrototype.entries()) {
     console.log(index, value); // 0 a 1 b 2 c
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.find(n => n > 5)); // 6
console.log(numbers.findIndex(n => n > 5)); // 5

//           //
// Functions //
//           //

var sum = new Function('a', 'b', 'return a + b;');
console.log(sum(1, 2)); // 3

//                                //
// Properties of function objects //
//                                //

function myFunction(a, b, c) {
     return true;
}
console.log(myFunction.length); // 3,number of formal parameters the function expects

//Using the prototype property
//it point to another object, its benefits shine only when you use this function as a constructor, all objects created with this function keep a reference to the prototype propertyand can use its properties as their own
var ninja = {
     name: 'Ninja',
     say: function () {
          return 'I am a ' + this.name;
     }
}
function F() { }
console.log(typeof F.prototype); // object

F.prototype = ninja;

var baby_ninja = new F();
console.log(baby_ninja.name); // Ninja

//                              //
//  Methods of function objects //
//                              //

// apply, call, toString

//                                 //
//  The arguments object revisited //
//                                 //

// argments is an array-like object
function f() {
     var args = [].slice.call(arguments);
     return args.reverse();
}

console.log(f(1, 2, 3, 4));

//                                  //
//  Lexical this in arrow functions //
//                                  //

var greeter = {
     default: "hello",
     greet: function (names) {
          names.forEach(function (name) {
               console.log(this.default + name);
          })
     }
}

console.log(greeter.greet(['world', 'heaven'])); //undefinedworld undefinedheaven undefined
//assign lexical this to solve this problem:
var greeter1 = {
     default: "hello",
     greet: function (names) {
          let that = this;
          names.forEach(function (name) {
               console.log(that.default + name);
          })
     }
}
console.log(greeter1.greet(['world', 'heaven'])); //helloworld helloheaven undefined
//arrow functions:
var greeter2 = {
     default: "hello",
     greet: function (names) {
          names.forEach(name => {
               console.log(this.default + name);
          })
     }
}
console.log(greeter1.greet(['world', 'heaven'])); //helloworld helloheaven undefined

//                         //
//  Inferring object types //
//                         //

//Silver bullet to replace typeOf operator
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call([])); // [object Array]

var toStr = Object.prototype.toString;

(function () {
     return console.log(toStr.call(arguments)); // [object Arguments]
})();

//         //
// Boolean //
//         //

var bool = new Boolean();

//         //
// Numbers //
//         //

var n = new Number('12.12');
var n1 = Number('12.12');
console.log(typeof n, typeof n1); // object number

console.log(Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN); // 1.7976931348623157e+308 5e-324 NaN

var num1 = new Number(123.456);
console.log(num1.toFixed(1)); // 123.5
//don't need to store number object:
console.log((123456).toExponential()); //1.23456e+5, the Number object is created and destroyed after use
var num2 = new Number(255);
console.log(num2.toString()); // 255
console.log(num2.toString(10)); // 255
console.log(num2.toString(16)); // ff

//        //
// String //
//        //

var strObj = new String('Hello');
console.log(strObj[0], strObj[3], strObj.length); // H l 5
console.log(strObj.valueOf(), strObj.toString(), strObj + ""); // Hello Hello Hello

console.log(String({ p: 1 })); // [object Object], it will call objects toString() method

//                       //
// String object methods //
//                       //

var s = new String("Couch potato");

console.log(s.toUpperCase(), s.toLowerCase()); // COUCH POTATO couch potato
console.log(s.charAt(0), s.charAt(101)); // C ""
// every method used on strings does not change originaly object type String, all of them return primitive String

//      //
// Date //
//      //

console.log(new Date()); // 2022-12-06T22:41:46.121Z, it return a string, because using new keyword we create a object, and in the background toString() method of that object is called
console.log(new Date(2015, 0, 1, 17, 05, 03, 120)); // 2015-01-01T16:05:03.120Z
console.log(new Date(2016, 1, 30)); // 2016-02-29T23:00:00.000Z, note that the actual day returned is 29,because there is not 30 feb, 2016 is leap year

console.log(Date()) // Tue Dec 06 2022 23:59:12 GMT+0100 (Central European Standard Time), string of current time, not an object
//in this case it doesn't matter if we pass a parameters or not 

//        //
// RegExp //
//        //

var re= new RegExp("j.*t");
var re1 = /j.*t/; //regexp literal notation