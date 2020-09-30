'use strict'

//signature is (err, contents) or parameters 
const { promisify } = require('util')

/** nothing in here is asynchronyous -- no reason to wrap into a promise */
const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')  // this does not return 'A'
  }, 500)
}  // no return function, will return undefined 


const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}


/**
 * Callbacks 
 */
// opA((errorA, resultsA) => {
//   console.log(resultsA)
//   opB((errorB, resultsB) => {
//     console.log(resultsB)
//     opC((errorC, resultsC) => {
//       console.log(resultsC)
//     })
//   })
// })


/**
 * Promises
 */
// const myPromise = new Promise((resolve, reject) => {
//   resolve('A')  // like return, successfully completed the work 
// }) 
// const myPromiseB = new Promise((resolve, reject) => {
//   resolve('B')  // like return, successfully completed the work 
// }) 
// const myPromiseC = new Promise((resolve, reject) => {
//   resolve('C')
// })

// myPromise
// .then((value) => { console.log(value)} )
// .then((contents) => { 
//   myPromiseB.then((bcontents) => { 
//     console.log(bcontents);
//   })
//   .then((ccontents) => {    
//   myPromiseC
//     .then((ccontents) => {
//       console.log(ccontents)
//     })
//   })
// })

//myPromise.catch((error) => { console.error(error)} )

// arrow functions preferred for most cases
// =>  doesnt change the value of this with arrow function -- 


/**
 * Async/Await - convenient way of writing promises (also promises)
 */


// async function run () {

//   const myPromise = new Promise((resolve, reject) => {
//     resolve('A')  // like return, successfully completed the work 
//   }) 
//   const myPromiseB = new Promise((resolve, reject) => {
//     resolve('B')  // like return, successfully completed the work 
//   }) 
//   const myPromiseC = new Promise((resolve, reject) => {
//     resolve('C')
//   })

//   myPromise.then(print)
//   myPromiseB.then(print)
//   myPromiseC.then(print)

//   await myPromiseB
//   await myPromise
//   await myPromiseC
// }

// run().catch(console.error)



async function run() { 

  const five = new Promise((resolve, reject) => {
    resolve('5')
  })

  const six = new Promise((resolve, reject) => {
    resolve('6')
})

const seven = new Promise((resolve, reject) => {
    resolve('7')
})

// this is where you do the promise chaining 
five.then((contents) => { console.log(contents) })

seven.then((contents) => { console.log(contents) })

six.then((contents) => { console.log(contents) })

await seven
await six 
await five

}

run()