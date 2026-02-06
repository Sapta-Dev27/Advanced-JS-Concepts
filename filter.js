// filter in javascript is mainly used in order to filter various elements based on some given condition from a list .

const arr = [1,2,3,4,5,6,7,8,9,10]  // array of elements 

const output = arr.filter( (x) => {
  return x % 2 == 0 ; // filters the even no's from the array
})
console.log(output);

const output2 = arr.filter( (x) => {
  return x % 2 !=0 ;  // filters the odd no's from the array 
})
console.log(output2);


const output3 = arr.filter( (x) => {
  return x >=5 ;  // filters the elements that are greater than 5 
})
console.log(output3)

const output4 = arr.filter( (x) => {
  return x < 5 ;  // filters the elements that are less than  5
})
console.log(output4);