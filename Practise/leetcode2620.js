/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

var createCount = function(n) {
  var counter = n ;
  return function(){
    return counter ++ ;
  }
}

const counter = createCount(10);
console.log(counter ());
console.log(counter())
console.log(counter())