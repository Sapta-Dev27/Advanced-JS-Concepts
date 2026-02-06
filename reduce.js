// reduce in javascript is mainly used when we derive a single value from a given set of elements , like finding sum of elements , max / min no in a array . 

// in reduce() function , we have 2 arguments (accumulator,current) : 

const arr = [1,2,3,4,5,6,7,8,9,10]

const output = arr.reduce( (acc,curr) => {
  acc = acc + curr;
  return acc;     // here we , are taking (acc,curr) where acc = stores the total value , curr = current element
} , 0)  // and we have to pass the initial value of acc as the 2nd argument of reduce function

console.log(output);


const output2 = arr.reduce( (acc,curr) => {
  if(curr > acc){  // comapres the acc with the curr
    acc = curr ;  // stores the max 
  }
  return acc ;  // return it
} , 0);    // 2nd argument of reduce() function => 0

console.log(output2)


const output3 = arr.reduce( (acc, curr) => {
   if( acc > curr){   // compares the curr with acc
    acc = curr ;   // stores the mini
   }
   return acc ;
},10000)   // 2nd argument of reduce() function => 100000

console.log(output3)