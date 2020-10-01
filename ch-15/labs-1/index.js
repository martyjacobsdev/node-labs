'use strict'

const { env } = require('process')

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function

  //learned::  that the function was already have done -- returning a child process was done 
  //the options was to include an object , referencing env - which is key/value pairs 

  return require('child_process').spawnSync(process.argv[0], ['child.js'], { env : { MY_ENV_VAR : myEnvVar } })
}

module.exports = exercise
