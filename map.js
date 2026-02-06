const arr = [ 1 , 2 ,3 , 4, 5 , 6]

// map is used in arrays to transform one array into another array , it moves over all the elements of the array and transform into another aray //

const output = arr.map( (x) => {
   return x*2;
})

console.log(output);

// syntax is : arr.map(function()) where function() is the task that is to be done over the all the elements of the array and which tranforms into another array //

const triple = (x) => {
  return x*3;
}
const output2 = arr.map(triple);
console.log(output2);

// inside map function , you can pass a , normal function or even a arrow function
