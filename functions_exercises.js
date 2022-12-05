// 1.
function getRGB(hexadecimalColor) {
     //using parseInt() function
     if(hexadecimalColor.length === 7) {
          return 'rgb(' + parseInt(hexadecimalColor[1] + hexadecimalColor[2], 16) + ', ' +
                          parseInt(hexadecimalColor[3] + hexadecimalColor[4], 16) + ', ' +
                          parseInt(hexadecimalColor[5] + hexadecimalColor[6], 16) + ')';

     } else {
          return 'Wrong input. Not a hexadecimal color representation sytact';
     }
}
let rgb = getRGB('#f1f1f1');
console.log(rgb);

//2.
console.log(parseInt(1e1)); // 10, 1e1 = 1*10^1 = 10
console.log(parseInt('1e1')); // 1, parseInt() doesnt see exponents in string;
console.log(parseFloat('1e1')); // 10, unlike parseInt() this one see exponents;
console.log(isFinite(0/10)); // true, 0 is finite in math;
console.log(isFinite(20/0)); // false, 20/0 = infinity 
console.log(isNaN(parseInt(NaN))); //true, parseInt(NaN) is NaN;

//3.
var a = 1; // global variable;
function f () { // global function;
     function n () { // local function;
          console.log(a);
     }
     var a = 2; // local variable;
     n();
}                                  
f(); // 2, it will alert 2, the local one variable a = 2, because it is in the function f scope;

//4.
//Example 1:
var f = console.log;
f("Boo!"); // we assign a function to a different variable, then f points to the console.log method;
//Example 2:
var e;
var f = console.log;
(e = f)('Boo!');
//Example 3:
(function() {
     return console.log;
})()('Boo!'); //function will invoke itself and return keyword console with a metode .log attached to it.
// then will attach ('Boo!') to it and display the Boo!;
//immediate invoked anonymous function returns a pointer to the console method .log and ivoke this metod with a prameter 'Boo!';