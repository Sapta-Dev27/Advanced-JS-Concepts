/*
Hoisting in Let and Const : 

Let and const are also hoisted but they behave differently compared to var . In case of let and const , TEMPORAL DEAD ZONE (TDZ)  comes
into the play . Like var , let and const declarations are also hoisted and assigned values of undefoined in the memory . However , var 
lies in the global scope but let and const lies in the script or block scope. Hence , they cannot be access before their actual variable declaration in the code . If we try to access them before declaration ,it will throw a ReferenceError .

SO , in case of let and const , although they are hoisted , they are not initialized . They remain in TDZ from the start of the block until the declaration is encountered . Trying to access them in this zone results in a ReferenceError .


What is Temporal Dead Zone (TDZ) ?

The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const . The TDZ is the time period from the start of a block until the variable is declared and initialized . During this period , any attempt to access the variable will result in a ReferenceError .
*/

/*Example of Hoisting with let , const and var AND Temporal Dead Zone (TDZ)*/

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // undefined
let a = 10;
const b = 20;
var c = 30;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

/*Let and Const : 
Let : Variables declared with let are block-scoped , meaning they are only accessible within the block they are defined in . They can be reassigned but not redeclared within the same scope . They can declared without initialization and can be initialized later .

Const : Variables declared with const are also block-scoped . However , they must be initialized at the time of declaration and cannot be reassigned or redeclared within the same scope . Note that while the variable itself cannot be reassigned , if it holds an object or array , the contents of that object or array can still be modified .
*/


/*What is a Block in JavaScript ?
A block in javascript is a section of code that is grouped together within curly braces {} and the result will be a single statement . Blocks are commonly used in control structures like if statements , loops , and functions to define the scope of variables and the flow of execution . Variables declared with let and const within a block are scoped to that block and cannot be accessed from outside the block .
*/


/* Example of Block Scope with let , const and var */

// Start of  Block Scope
{
  let x = 100;
  var y = 200;
  const z = 300;
  console.log(x); // 100
  console.log(y); // 200
  console.log(z); // 300
}
// End of Block Scope

console.log(y); // 200
console.log(x); // ReferenceError: x is not defined
console.log(z); // ReferenceError: z is not defined


/*What is shadowing in JavaScript ?
Shadowing in JavaScript occurs when a variable declared within a certain scope (e.g., block scope or function scope) has the same name as a variable declared in an outer scope . In such cases , the inner variable "shadows" or overrides the outer variable within its own scope . This means that when you reference the variable name within the inner scope , it refers to the inner variable rather than the outer one .
*/


/* Example of Shadowing with let , const and var */

//Example 1 : Shadowing with var

var m = 20;
console.log("Outer m:", m); // Outer m: 20
{
  let n = 30;
  var m = 40; // This will shadow the outer m variable : here both are in global scope and points to the same memory location
  console.log("Inner m:", m); // Inner m: 40
}
console.log("Outer m after block:", m); // Outer m after block: 40


//Example 2 : Shadowing with let and const : its different as let and const are block scoped 

let p = 20;
console.log("Outer p:", p); // Outer p: 20  // points to memory location in the script scope
{
  let p = 30;
  console.log("Inner p:", p); // Inner p: 30  // points to  a different memory location in the block scope
}
console.log("Outer p after block:", p); // Outer p after block: 20  as it points to the memory location in the script scope



/*Illegal Shadowing Examples : 
What is illegal shadowing in javaScipt ? 
Illegal shadowing occurs when a variable declared with let or const in the outer scope is attempted to be redeclared with var in the inner scope . This is not allowed because var is function-scoped or globally-scoped , while let and const are block-scoped . Attempting to do so will result in a SyntaxError .
*/

// Example 1 : Illegal Shadowing with let and var

let q = 10; // this creates a variable 'q' in the script scope
{
  var q = 20; // SyntaxError: Identifier 'q' has already been declared and will be pointing to the same memory location in the script scope
  console.log(q);
}

// Example 2 : Illegal Shadowing with const and var

const r = 10; // this creates a variable 'r' in the script scope
{
  var r = 20; // SyntaxError: Identifier 'r' has already been declared and will be pointing to the same memory location in the script scope
  console.log(r);
}

// Example 3 : Here this is legal shadowing as both are in different scopes


var m1 = 20; // this creates a variable 'm1' in the global scope
{
  let m1 = 30;  // this creates a new variable 'm1' in the block scope so no SyntaxError
  console.log("Inner m1:", m1); // Inner m1: 30
}
console.log("Outer m1 after block:", m1); // Outer m1 after block: 20


// Example 4 : Here this is legal shadowing as both are in different scopes

const n1 = 50;  // this creates a variable 'n1' in the script scope
{
  let n1 = 50;  // this creates a new variable 'n1' in the block scope so no SyntaxError
  console.log("Inner n1:", n1); // Inner n1: 50
}
console.log("Outer n1 after block:", n1); // Outer n1 after block: 50



/*Scope Chain :
In JavaScript , scope chain refers to the hierarchical structure of scopes that determines the accessibility of variables and functions . When a variable or function is referenced , JavaScript first looks for it in the current scope . If it is not found , it moves up to the next outer scope and continues this process until it reaches the global scope . This chain of scopes is known as the scope chain .
*/

const c1 = 20;        // Global scope
{
  const c2 = 30;     // Block scope 1
  {
    const c3 = 40;   // Block scope 2
    {
      const c4 = 50; // Block scope 3
      console.log(c4); //  Found in current scope → 50
      console.log(c3); //  Found in parent scope → 40
      console.log(c2); // Found in parent scope → 30
      console.log(c1); // Found in global scope → 20
      console.log(c5); // ReferenceError: c5 is not defined
    }
  }
}



/*Types of Errors in Hoisting and Shadowing :

1. ReferenceError : This error occurs when trying to access a variable that is not yet declared or is out of scope . For example , accessing a let or const variable before its declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ) .

2. SyntaxError : This error occurs when there is a violation of the language syntax rules . In the context of shadowing , attempting to redeclare a variable with var that has already been declared with let or const in an outer scope results in a SyntaxError due to illegal shadowing .Similarly , trying to declare the same variable name multiple times with let or const in the same scope also leads to a SyntaxError .

3.TypeError : This error occurs when an operation is performed on a value of an inappropriate type . While not directly related to hoisting or shadowing , it can occur if a variable declared with const is attempted to be reassigned after its initial declaration .
*/

