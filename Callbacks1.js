/*
What are callbacks ??
We know  that  functions are first class citizens and as they as first class citizens so they have the access to pass another function as an argument
into another function. These are known as callbacks (when one function is passed as an argument into another function)
*/

/* Synchronous nature of JS and Blocking of Main Thread and Power of Callbacks  :

JavaScript is an synchronous language and it is a single threaded language i.e it has only one callstack to perform execution of its functions. 
Hence since it is a synchronous language , it executes code line by line . Sometime so functions may take some time to complete its execution 
like API CALLS , data fetching from DB and other asynchornous tasks. SO it may lead to the blocking of the main thread ( i.e the callstack ). But 
we know that time , tide and JS waits for none . Here callbacks comes to the picture and solves this problem .Callbacks provides the asynchronous 
nature of JS  and enables to perform some blocks of code later on. 

*/

// Examples of callbacks : 

setTimeout( () => {
  console.log('Timer after 5s')
} ,5000)   // this function is called after 5s , async code , 1st argument of setTimeout is a callback which gets invoked in the callstack after 5s

function x(y){
  console.log('X is called')
  console.log(y);
  y();  // here also , Y function is invoked as it was passed as a parameter to the X function
}
x(function y(){ 
  // here Y is passed as a argument to the X function as behaves as a callback . Now its the responsibity of the X function to call the Y function
  console.log('Y is called')
});



/* 

Now lets study about Event listners , how we can use closure in case of event listners and what is garbage collection and remove eventListners

function invokeListners(){
let count=0;
document.getElementById("click me").addEventLister("click" , function  xyz(){
  console.log('I am Clicked ' , count++)
})
}
invokeListners()


Here the explnation is : We have a button named "click me " . We are accessing the button by document.getElementById and adding a event Listner 
"click" , which makes sure that the click event takes place whenever someone clicks the button .  After that we are passing the XYZ as a callback function to that event that makes sure that every time anyone clicks the button , the callback function is invoked . We also have a count varibable for that function . The callback function along with its lexical scope is forming a closure and outside the invokeListner function gets invoked.

Garbage Collection is an automatic memory management process in JavaScript where the engine frees memory that is no longer needed. Event listeners hold references to functions and DOM elements. If not removed : it cannot clean memory , Causes memory leaks and Slows down the app

*/