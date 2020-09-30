'use strict'
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString())
      cb()
    }
  })
  writable.sink = sink
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()

// TODO: replace the pass through stream 
// with a transform stream that uppercases
// incoming characters
const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'UTF8',
    transform (chunk, enc, next) {
      chunk = chunk.toUpperCase()
      this.push(chunk)
      next()
    }
  })
}

const transform = createTransformStream()

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err)
  assert.deepStrictEqual(writable.sink, ['A', 'B', 'C'])
  console.log('passed!')
})