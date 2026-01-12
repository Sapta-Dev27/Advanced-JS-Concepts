/*
Hoisting in javascript is a behavior in which variabls and functions declarations are moved to the top of their contatining scope during the
compilation phase . This means that you can use the variable and the functions before they are declared in the code.
Here is an example to illustrate hoisting:
*/

console.log(x); // Output: undefined
getName(); // Output: "Hoisting Example"
console.log(getName); // Output: [Function: getName]
console.log(getName2); // Output: undefined

var x = 10;
function getName() {
  console.log("Hoisting Example");
}

console.log(getName) // Output: [Function: getName]
console.log(x); // Output: 10
getName(); // Output: "Hoisting Example"


var getName2 = () => {
  console.log("Hoisting Example 2");
}

getName2(); // Output: "Hoisting Example 2"

/*
Now lets understand how this is taking place :
1. Its very imp to know about the Global execution context which is created when the js code is run .

2.During the creation phase of the global execution context , the js engine scans through the code to find all the variables and functions
declarations. Variables are initialized with UNDEFINED and functions declarations are stored in memory.

3.After the creation  phase is completed , the execution phase begins where the code is executed line by line.

4. Here the variables are functions are declared with "var" :  x -> undefined , getName -> function reference , getName2 -> undefined (
as its a arrow function : var getName2 = () => {}) . So getName2 is again with "undefined".

5. SO when the execution phase starts , the callstack gets created and the code is executed line by line. 
So x -> undefined 
   getName() -> "contains function reference " -> gets executed -> "Hoisting Example"
   getName -> function reference
   getName2 -> undefined ( as its a arrow function)

6. afte all these declarations are done , when we reach the lines where the variables and functions are assigned values or defined , they get updated in the memory and hence we get the final output as expected.

*/