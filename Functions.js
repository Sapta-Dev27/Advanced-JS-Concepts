/*Hoisting is functions in javascript is a behavior in which function declarations are moved to the top of their containing scope during the
compilation phase. This means that you can call the function before it is declared in the code.
Here is an example to illustrate hoisting with functions:
*/



var x = 1;

a();
b();
console.log(x); // Output: 1    

function a(){
  var x = 10;
  console.log(x); // Output: 10
}

function b(){
  var x = 100;
  console.log(x); // Output: 100
}



/*Explanation of the code above :

1. When the JavaScript engine executes the code, it first creates a global execution context. During the creation phase of this context, it scans through the code to find all function declarations and variable declarations. Function declarations are stored in memory, while variables declared with "var" are initialized with "undefined".

2. In this example, the functions a() and b() are declared, so they are hoisted to the top of their containing scope (the global scope in this case). The variable x is also declared with "var", so it is initialized with "undefined" during the creation phase.

3. After the creation phase is completed, the execution phase begins, where the code is executed line by line. When the engine encounters the calls to a() and b(), it finds the function declarations in memory and executes them.

4. Inside the function a(), a new local variable x is declared and assigned the value 10. This local variable shadows the global variable x. When console.log(x) is called inside a(), it refers to the local variable, so it outputs 10.

5. Similarly, inside the function b(), another local variable x is declared and assigned the value 100. This local variable also shadows the global variable x. When console.log(x) is called inside b(), it refers to the local variable, so it outputs 100.


6. Finally, when console.log(x) is called in the global scope, it refers to the global variable x, which was initialized with the value 1. Therefore, it outputs 1.

*/


/*Shortest Program is JS : a Empty file is a program in JS is created , If is runs , it creates a Global Execution Context and a Global Object (Window in browsers) . All the variables and the function declarations that are outside the function come under the global scope.   So even an empty file is a valid JS program . */