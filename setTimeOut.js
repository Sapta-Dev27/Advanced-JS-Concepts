// EXAMPLE OF CODE //

console.log(' Start of execution');

setTimeout( () => {
  console.log('Callback Function')
} , 5000)

let startTime = new Date().getTime();
let endTime = startTime;

while(endTime <= startTime + 10000) {
 endTime = new Date().getTime();
}

console.log('END OF WHILE LOOP')

console.log('End of execution');

/* 
OUPUT : 
Start of execution
END OF WHILE LOOP
End of execution
Callback Function
*/

/* Explanation of code : 
1.GEC is created , then console1 is printed.
2.setTimeOut function is created and then the timer is started for 5s , after it expires , the callback function is pushed from the webapis env to the callback queue.
3.then the while loop is created , and it remains in the callstack for 10s after which 
console2 and console3 is printed 
4.then when the callstack is empty,the event loop pushes the callback function from the 
callback queue to the callstack 

This is also known as the CONCURRENCY MODEL !!
*/
 

// exmaple 2 : 

console.log('Start of execution')

setTimeout( () => {
  console.log('Callback function')
} , 0)

console.log('END OF EXECUTION')

/* output :
Start of execution
end of execution
Callback function 

Explanation : even if the setTimeout is set to 0s , but still at fisrt it goes to the webapi env -> callback queue -> event loop -> callstack . So
even if timer is set to be 0s , the output of the console1 and console3 is at first then the callback console is printed . */
