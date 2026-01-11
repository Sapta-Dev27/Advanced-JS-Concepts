/*async : Asynchronous Programming in JavaScript - Advanced Concepts*/

/*
Async : Async function is a function that is declared with a async keyword.
The async function always returns a promise. If the return value of the async 
function is not explicitly not a promise , it will always be wrapped in a promise and then returned .
*/

// Example of aysnc function 

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise  1 is  Resolved")
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise  2 is  Resolved")
  }, 10000)
});

async function handlePromises() {
  console.log("Handling Promises...");
  const data1 = await p1; // waiting for promise 1 to resolve
  console.log(data1);
  const data2 = await p2; // waiting for promise 2 to resolve
  console.log(data2);
  console.log("All Promises are handled");
}

handlePromises();

/* This is a classical example of how behind the scenes async and await works. We know  that javascript is a single threaded language and contains
only one call stack . It also a synchronous language by deafult. We with the help of await keyword we can make javascript to wait for a promise to resolve before moving to the next block of code. But do javascript really waits here ?? The answer is NO. TIME TIDE AND JAVASCRIPT WAITS FOR NONE . This is
100% true . So whats happens behind the scenecs ?? . When the handledPromise()
function is called , it is pushhed to the callstack and executed. It sees that there are 2promises : P1 and P2 to be resolved . P1 takes 5 seconds to resolve and P2 takes 10 seconds to resolve. Both the promises are set for execution. So when the handlePromise() is called : the console.log() gets printed ..after that : it sees a await keyword
which indicates that it needs to wait 5s for to be resolved . So meanwhile :
handlepromise() function does not occupy the call stack .It is moved out of the call stack and the event loop keeps checking if the promise is resolved or not. After 5s, when the promise is resolved : the event loop pushes the
handlePromise() function again to the call stack and resumes its execution where it left off . It prints the resolved value of promise 1. Then again it sees another await keyword for promise 2 whick takes 10s to resolve so it needs more 5s to be resolved. So again the handlePromise() function is moved out of the call stack and the event loop keeps checking for promise 2 to be resolved . After 5s , when promise 2 is resolved : the event loop pushes the handlePromise() function again to the call stack and resumes its execution where it left off . It prints the resolved value of promise 2 and then prints "All Promises are handled" .

*/

const p3 = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve("Promise 3 is resolved")
  },10000)
});

const p4 = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve("Promise 4 is resolved")
  }, 5000)
});

async function handlePromises2() {
  console.log("Handling Promises Part 2 ...");
  const data1 = await p3;
  console.log(data1);
  const data2 = await p4;
  console.log(data2);
  console.log("All Promises are handled Part 2");
}

handlePromises2();


/* Calculation of callstack for both handlePromises() and handlePromises2() functions :

V.V.V.IMP:

At 0s : handlePromises() is called and pushed to callstack
At 0s : console.log("Handling Promises...") is executed and printed
At 0s : await p1 is encountered : handlePromises() is moved out of callstack
At 0s : handlePromises2() is called and pushed to callstack
At 0s : console.log("Handling Promises Part 2 ...") is executed and printed
At 0s : await p3 is encountered : handlePromises2() is moved out of callstack
At 5s : p1 is resolved : handlePromises() is pushed to callstack
At 5s : console.log(data1) is executed and printed
At 5s : await p2 is encountered : handlePromises() is moved out of callstack
At 10s : p2 is resolved : handlePromises() is pushed to callstack
At 10s : console.log(data2) is executed and printed
At 10s : console.log("All Promises are handled") is executed and printed
At 10s : p3 is resolved : handlePromises2() is pushed to callstack
At 10s : console.log(data1) is executed and printed
At 10s : await p4 is encountered : handlePromises2() is moved out of callstack
At 10s : p4 is resolved : handlePromises2() is pushed to callstack
At 10s : console.log(data2) is executed and printed
At 10s : console.log("All Promises are handled Part 2") is executed and printed

*/