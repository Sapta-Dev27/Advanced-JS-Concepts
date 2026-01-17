/*Closures in Javascript : 
Functions along with their lexical scopr bundles together to form a closure.
*/

//example1 : 

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x(); // Output : 7

/*Explanation :
In the above example, function y() is defined inside function x(). 
Function y() has access to the variable a defined in its parent function x() due to lexical scoping. 
When y() is called inside x(), it prints the value of a, which is 7.
*/

//example2 :


function x1() {
  var a = 7;
  function y1() {
    console.log(a);
  }
  return y1;
}

var z = x1();
z(); // Output : 7


/*Explanation :
In this example, function y1() is declared inside function  x1() and it returns y1 without invoking it.
Now the function x1() is called and when called it returns the function y1 and is stored in variable z.
Now the returned fucntion is stored in variable z . Important point to note here is that when the function y1 is returned , its still have the 
access to the variable 'a' defined in its parent function x1() due to closure as when the function y1 is returned , its returned along with its lexical scope.
Hence , when z() is invoked , it prints the value of a which is 7.
*/


//example 3:  closure inside closure : 


function m1() {
  var c = 1000;
  function n1() {
    var b = 100;
    function l1() {
      var a= 10;
      function k1() {
        console.log(a);
        console.log(b);
        console.log(c);
      }
      k1();
    }
    l1();
  }
  n1();
}
m1();
 // Output : 10 100 1000

/*Explanation  : 
In this example , we have multiple nested functions. This is a perfect example to understand closures.
Function k1() is defined inside l1(), which is defined inside n1(), which is defined inside m1().
So , when function k1() is invoked , its closure = function k1() + its lexcial scope which include variables a,b,c from its parent functions l1(), n1(), m1() respectively.
Hence , when k1() is invoked , it prints the values of a,b,c which are 10,100,1000 respectively.
This is a perfect example to understand how closures work in nested functions.
*/