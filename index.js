#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const Haikunator = require('haikunator')

const adjectives = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const nouns = ['apple', 'avocado', 'lemon', 'lime', 'orange', 'watermelon']

const haikunator = new Haikunator({
  adjectives: args.adjectives ? args.adjectives.split(',') : adjectives,
  nouns: args.nouns ? args.nouns.split(',') : nouns,
  seed: args.seed,
  defaults: {
    delimiter: args.delimiter,
    tokenHex: args.hex || false,
    tokenLength: args.length,
    tokenChars: args.chars
  }
})

console.log(haikunator.haikunate())
