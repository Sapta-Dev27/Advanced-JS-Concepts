//example 1 : 

console.log('Start of Execution')

setTimeout(()=> {
  console.log('From Timer of SetTimeOut after 5s')
}, 5000)

console.log('END OF EXECUTION')


//example 2 :

console.log('START OF EXECUTION')

document.getElementById('click-btn').addEventListener('click' , () => {
  console.log('Button is clicked')
})

console.log('END OF EXECUTION')


//example 3 :

console.log('START OF EXECUTION') 

setTimeout( () => {
  console.log('From Timer of SetTimeOut after 5s')
},5000)

fetch('https://api.netflix.com')
.then( () => {
  console.log('Data is fetched successfully from API')
})

console.log('END OF EXECUTION')


// https://medium.com/@saptarshi2027paul/understanding-the-javascript-event-loop-from-call-stack-to-microtasks-e68350b21c92?postPublishedType=repub

