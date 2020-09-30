'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter()

// the  problem here is that the tick event is emitted 3 times, before the listener() function calls back 
 // and the count is already at 3.  THe asserts fail.   

 //the chicken or the egg problem...

 // the solution is ... 

 ee.on('tick', listener);

let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)

setTimeout(() => {
  ee.removeListener('tick', listener)
}, 100)

function listener () {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}

