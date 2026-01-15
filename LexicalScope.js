/*Example 1*/

function a1(){
  c1();
  function c1(){
    console.log("Output from Function a1: ",b1);
  }
}
var b1 = 10;
a1(); 

/*example 2*/

function a2(){
  c2();
 function c2(){
  console.log("Output from Function a2: ",b2);
 }
}
var b2 ;
a2();

/*example 3*/

function a3(){
  c3();
  function c3(){
    console.log("Output from Function a3: ",b3);
  }
}
a3();


/*Lexical Environment 
Whenever a function is invoked, a new lexical environment is created for that function. This lexical environment contains all the local variables defined within that function as well as a reference to its outer lexical environment (the environment in which the function was defined).
*/

/*Explanation of How Scope Chaining and Lexical Environment Works in the Above Examples:
In JavaScript, scope chaining and lexical environment determine how variable lookups are performed. Each function creates its own lexical environment, which consists of the function's local variables and a reference to its outer environment (the environment in which the function was defined).

In Example 1, when function a1 is called, it invokes c1, which looks for the variable b1. Since b1 is not found in c1's local scope, JavaScript looks up the scope chain and finds b1 in the global scope, resulting in the output of 10.

In Example 2, when function a2 is called, it invokes c2, which looks for the variable b2. Since b2 is declared but not initialized in the global scope, it has the value undefined. Therefore, the output is undefined.

In Example 3, when function a3 is called, it invokes c3, which looks for the variable b3. Since b3 is neither declared nor initialized in any scope, JavaScript cannot find it in the local scope of c3 or in the global scope. This results in a ReferenceError indicating that b3 is not defined.

This demonstrates how JavaScript uses scope chaining to resolve variable references, starting from the innermost scope and moving outward until it finds the variable or reaches the global scope.
*/