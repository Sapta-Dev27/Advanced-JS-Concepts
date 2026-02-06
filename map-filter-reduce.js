const users = [
  {
    firstName: "saptadev27",
    lastname: "paul",
    age: 22
  },
  {
    firstName: "anuska",
    lastname: "biswas",
    age: 23
  },
  {
    firstName: "ranit",
    lastname: "karmakar",
    age: 24
  },
  {
    firstName: "tanmoy",
    lastname: "das",
    age: 21
  },
  {
    firstName: "rohan",
    lastname: "jana",
    age: 25
  },

]
const extractNames = users.map((x) => {
  return x.firstName + " " + x.lastname;
})  
// map is moving over each "x" and extracting data from it 

console.log(extractNames);

const extractNames2 = users.filter((x) => {
  return x.age <= 23
}).map((y) => {
  return y.firstName + " " + y.lastname;
})  
// chaining of map over filter , first : filter extracts whose age is <= 23 into a new array and map(y) now moves over those filtered elements and extracts the data from there

console.log(extractNames2);