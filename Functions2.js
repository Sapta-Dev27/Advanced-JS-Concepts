/*

1. What are function statements ? 

function a(){
console.log('a is called')
}

2. What are function expressions ?

const a = function () => {
  console.log('B is called')
}

3. Difference between function statements and function expressions?
Function statements supports hoisting but function expressions do not support hoisting . Function expressions show a undefined error
or not declared error if they are hoisted

4. What are function declarations ?
Function statements are also known as functions declarations

function c(){
console.log('C is called ')
}
c();


5. What are anonomous functions?

functions are said to be anonomous functions if they donot have any name declared to them .
ex : const a = function () {
console.log('hi')
}

6.Difference between parameters and arguments :

const a = (a1,a2) => {
  return   a1+a2;
}
var b1= a(10,20) 

a1,a2 => parameters ( inputs passed to a function to be accessed in the local scope of function)
10,20 => arguments (passed to the functions when they are declared so that they can be used as input when the function is exectuted)


7.What are First Class Functions ? 

First class functions in javascript are those functions which can be used as to stored value ,or can be passed as an argument to another function ,or can be returned from another function .

ex 1: used to store values
 
const a = function(a1,a2) => {
  return a1+a2;
}
a(1,2);

ex2: can be passed as an argument to another function 

function doTask(callback){
callback();
}
doTask( function(){
console.log('Task Done)
})

ex3 : can be used to return a function from another function :
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


*/