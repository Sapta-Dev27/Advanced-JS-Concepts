//lets understand closure with a settimeout example :

//Example 1:


function x() {
  var a = 1;
  setTimeout( () => {
    console.log('Value of a :' , a)
  } ,1000)
  console.log('Welcome to CLOSURE 2 part')
}
x();

/*
From the previous example : its very clearly understood that  the closure of  setTimemOut function is the function itself along with its 
lexical scope . Hence we can still access the variable 'a' from outside scope .
*/

//Example 2 : 


function a1(){
  for(var i = 0 ; i<=5 ; i++){
    setTimeout(() => {
      console.log('Value of i is :' , i)
    }, i * 2000)
  }
  console.log('Welcome to the Example 2 of Closure')
}
a1();


//Expected Output : 
/*
Welcome to the Example 2 of Closure
Value of a : 1
Value of i is : 6
Value of i is : 6
Value of i is : 6
Value of i is : 6
Value of i is : 6
Value of i is : 6
*/

/*Explanation behind such output :
  We all know that time , tide and javascript waits for none . Hence we have a setTimeOut function here , which takes some time to be executed . There is a outer loop which runs from (0-5)times ..every iteration it creates a setTimeOut function which needs to 
  executed after a particular time interval : ( i*2000) where i iterates from (0-5) . Now when these functions are kept in the some place
  to be executed after a particular time interval , they have the global referrence of 'i' as we have 'var' so it has global scope. We know
  that even after the function had been executed , we can still access the values of 'i' due to its closure property . and due to 
  its closure property it points to the global reference of 'i' which had became '6' after completing its iteration from the (0-5).HENCE
  now when the setTimeOut Functions are needed to be executed , it is pushed to the callstack and while executing it refers to the GLOBAL VALUE of 'i' which is '6' . Hence for this reason , the output is such .
*/

/*However the above behaviour can be avoided by simply using 'let' variable instead of 'var' . Hence if we use 'let' it has block scope and
when everytime the setTimeout function is created it has a reference value of 'i' which is pointing to each block scope value of 'i'. Hence now when the setTimeOut is executed , it always refers the value of 'i' from the block scope .
*/


function b1() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log('Value of i :', i);
    }, i * 1000)
  }
  console.log('Welcome to the Example 3 of closure and setTimeOut')
}
b1();

/*Expected output :
Welcome to the Example 3 of closure and setTimeOut
Value of i : 0
Value of i : 1
Value of i : 2
Value of i : 3
Value of i : 4
Value of i : 5
*/



/*Now can we think that what if the problem can also  solved with 'var' . Yes , it can be done  by wrapping the setTimeout within a function
i.e closure inside a closure.  -> nested closure 
*/

function c1() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log('Value of x is :', x);
      }, x * 1000)
    }
    close(i);
  }
  console.log('Welcome to the Example 4 of Closure & SetTimeOut ')
}
c1();


/*Expected output : 
Welcome to the Example 4 of Closure & SetTimeOut 
Value of x is : 0
Value of x is : 1
Value of x is : 2
Value of x is : 3
Value of x is : 4
Value of x is : 5
*/

/*Explanation of the Output : 
Hence : what happening here ?? We are wrapping the setTimeout inside a function and in that function we are passing the 'i' has the parameter
which refers to the current value of the 'i' during iterating from (0-5) .Now when the setTimeOut function is needed to be executed , it refers to that variable from that scope where it was declared.
*/