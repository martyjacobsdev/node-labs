'use strict'

const { spawn } = require('child_process')
const { stdin } = require('process')

function exercise (command, args) {


//If a child process is started with the stdio option set to 
//['pipe', 'ignore', 'inherit'], how will the I/O of the child process behave?

  return spawn(command, args, { stdio: ['ignore', 'inherit', 'pipe'] })
}

module.exports = exercise