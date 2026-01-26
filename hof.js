/*
What are higher order functions ??  -> Higher Order functions are those functions that takes one function as a parameter ( or one function is passed as a argument to the higher order function) or may return a function. 
Lets understand this with a proper example : 

function x(){
console.log(x);
}
function y(x){
console.log(y);
x();
}
y(x); 
Here : y() is the higher order function and x() is the callback function .

Why do we need higher order functions? -> in order to make the code more modular and reuable . It helps to follow the main principle of 
software engineering : "DONT REPEAT YOURSELF"

*/


// example of normal function : this calculates the area , diameter and circumference of a 5 circles whose radius is given in a array //

const radius=[2,3,4,5,6];

const calcArea = (radius) => {
  const output = [] ;
  for(let i=0 ; i < radius.length ; i++){
    output.push(Math.PI * radius[i] *radius[i]);
  }
  return output;
}

const calcDiameter = (radius) => {
   const output = [];
   for(let i=0 ; i < radius.length ; i++){
    output.push(2*radius[i])
   }
   return output;
}

const calcCircumference = (radius) => {
  const output = [];
  for(let i=0 ; i < radius.length ; i++){
    output.push(Math.PI*radius[i]*2);
  }
  return output;
}

console.log(calcArea(radius));
console.log(calcDiameter(radius));
console.log(calcCircumference(radius));

/* Sample Output : 
[
  12.566370614359172,
  28.274333882308138,
  50.26548245743669,
  78.53981633974483,
  113.09733552923255
]
[ 4, 6, 8, 10, 12 ]
[
  12.566370614359172,
  18.84955592153876,
  25.132741228718345,
  31.41592653589793,
  37.69911184307752
]

So the question is whats wrong with the above code ?? Nothing wrong right ?? But it does not follow the principles of SE . We can make the 
code more reusable and modular by using higher order functions.
*/


//Example of doing the code using HOF : higher order functions // 

console.log('CODING USING HIGHER ORDER FUNCTIONS .......')

const radius2= [1,2,3,4,5]

//callback functions(area() , diameter() , circumference() ) to passed as a argument to "calculate"  which is a higher order function.

const area = (r) => {
  return Math.PI*r*r;
}
const diameter = (r) => {
  return 2*r;
}
const circumference = (r) => {
  return 2*Math.PI*r;
}

const calculate = (radius2 , logic) => {
  const output = [];
  for(let i=0 ; i < radius2.length ; i++){
    output.push(logic(radius2[i])) // logic() is the callback functions
  }
  return output ;
}

console.log("Area of circle :" , calculate(radius2,area));
console.log("Diameter of circle :" , calculate(radius2,diameter));
console.log("Circumference of circle :" , calculate(radius2,circumference));

/* Sample Output : 

CODING USING HIGHER ORDER FUNCTIONS .......
 Area of circle : [
  3.141592653589793,
  12.566370614359172,
  28.274333882308138,
  50.26548245743669,
  78.53981633974483
]
Diameter of circle : [ 2, 4, 6, 8, 10 ]
Circumference of circle : [
  6.283185307179586,
  12.566370614359172,
  18.84955592153876,
  25.132741228718345,
  31.41592653589793
]


Here we have used Higher order function : calculate()  and the 3 callback functions :  -> area() , circumference() & diameter()  as arguments of the higher order functions. This had made the code look more modular and reusable in nature .
*/