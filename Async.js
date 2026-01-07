//Data is a array of user objects
const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 28
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 34
  }
]

//fecthData is a function that performs the following logic after 1 second delay 
function fetchData() {
  setTimeout(() => {
    data.forEach((user, index) => {
      console.log(`User ${index + 1} : ${user.firstName} ${user.lastName} , Age : ${user.age}`)
    })
  }, 1000);
}

function createData(newUser) {
  setTimeout(() => {
    data.push(newUser);
    console.log('New user added successfully!');
  }, 2000);
}


createData({
  id: 3,
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 25
});

fetchData();


/*here are 2 timers set with different delays 
The fetchData function is set at a delay of 1 second and createData function is set at a delay of 2 seconds.
at t=0 ; both timers start counting down.
at t=1 second ; fetchData timer completes first and it executes its callback function which prints the existing users in the data array (which does not include the new user yet as createData has not executed yet)
at t=2 seconds ; createData timer completes and it executes its callback function which adds the new user to the data array and prints 'New user added successfully
*/

// To fix this issue we can use Promises or async/await to ensure that createData completes before fetchData is called.

// Using Promises to ensure createData completes before fetchData is called


function createDataPromise(newUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newUser);
      console.log('New user added successfully!');
      let error = false;
      if (!error) {
        resolve();
      }
      else {
        reject('Error: Something went wrong while adding new user');
      }
    }, 2000)
  })
}


createDataPromise({
  id: 4,
  firstName: 'Mitchell',
  lastName: 'Johnson',
  age: 30
}).then(fetchData).catch((err) => {
  console.log(err);
})

// Here , we create a new function createDataPromise which returns a Promise.
// Inside the Promise, we perform the same logic as before to add a new user after a delay of 2 seconds.
// If the operation is successful, we call resolve() to indicate that the Promise has been fulfilled.
// If there is an error, we call reject() with an error message.
// We then call createDataPromise and use .then() to call fetchData only after the Promise is resolved.
// We also use .catch() to handle any potential errors.



//using callbacks to ensure createData completes before fetchData is called


function createDataCallback(newUser, fecthData) {
  setTimeout(() => {
    data.push(newUser);
    console.log('New user added successfully!');
    fecthData();
  }, 3000)
}


createDataCallback({
  id: 5,
  firstName: 'Emma',
  lastName: 'Williams',
  age: 27
}, fetchData)


// Here, we modify the createData function to accept a callback function (fetchData) as a second parameter.
// After adding the new user, we call the fetchData function to ensure it runs only after the new user has been added.
// We then call createDataCallback with the new user object and the fetchData function as arguments.
// This way, fetchData will only execute after createDataCallback has completed its operation.
// Note: In real-world applications, using Promises or async/await is generally preferred over callbacks for better readability and error handling.

// using async/await to ensure createData completes before fetchData is called

async function createDataAsync() {
   await createDataPromise({
    id: 6,
    firstName: 'Olivia',
    lastName: 'Brown',
    age: 29
   })
   fetchData();
}

createDataAsync();

// Here, we define an async function createDataAsync.
// Inside this function, we use the await keyword to wait for createDataPromise to complete before proceeding to call fetchData.
// This ensures that fetchData is only called after the new user has been successfully added.
// Finally, we call createDataAsync to execute the logic.