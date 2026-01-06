/*Rest and Spread Properties for array and Object Literals*/

/* Spread and Rest Properties For array */

const arr1 = [1, 2, 3, 4, 5, 6];

function add2Nos(num1, num2, ...rest) {
  /*...rest is the rest operator which collects all the remaining elements into an array in this case
  into an array[3,4,5,6]*/
  console.log(rest);
  return num1 + num2; // calculates sum of first two numbers
}

const result = add2Nos(...arr1); // Using Spread operator to pass array elements as individual arguments
console.log(result);

function addAllNos(...numbers) {
  //...numbers is the rest operator which collects all the arguments into an array
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// Using Spread operator to pass array elements as individual arguments

const result1 = addAllNos(...arr1);
console.log(result1);


/* Spread and Rest Properties For Object */

// REST OPERATOR //
const person = {
  name: 'SaptaDev27',
  age: 22,
  city: 'Kolkata'
}

console.log(person); // this prints the whole object
/*
const { name } = person // Object Destructuring to extract name property
console.log(name); // prints 'SaptaDev27'
*/

const { name, ...personDetails } = person;
// Here ...personDetails is the rest operator which collects all the remaining properties of the object into a new object
console.log(name); // prints 'SaptaDev27'
console.log(personDetails); // prints { age: 22, city: 'Kolkata' }

//SPREAD OPERATOR //

const student = {
  college  : 'XYZ University',
  degree   : 'Bachelor of Science',
  ...person  // Using Spread operator to copy properties from person object
}

console.log(student); // prints the entire student object with properties from person object included
const {college , ...studentDetails} = student;

console.log(college); // prints 'XYZ University'
console.log(studentDetails); // prints { degree: 'Bachelor of Science', name: 'SaptaDev27', age: 22, city: 'Kolkata' }