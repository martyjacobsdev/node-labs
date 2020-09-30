'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

//Solution:  register the listener before omitting the error event 
const listener1 = () => {Error('timeout')}

ee.on('error', listener1)
process.stdin.resume() 

ee.emit('error',  Error('timeout'))


