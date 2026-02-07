/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

*/

var createCounter = function (init) {
  var value = init;
  return {
    increment: () => {
      value++;
      return value;
    },
    decrement: () => {
      value--;
      return value;
    },
    reset: () => {
      value = init;
      return value;
    }
  }
}

const counter = createCounter(10);

const arr = [];
arr.push(counter.increment());
arr.push(counter.increment());
arr.push(counter.increment());
arr.push(counter.reset());
arr.push(counter.decrement());
arr.push(counter.increment());
arr.push(counter.decrement());

console.log(arr);