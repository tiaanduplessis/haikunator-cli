#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const Haikunator = require('haikunator')

const haikunator = new Haikunator({
  adjectives: args.adjectives ? args.adjectives.split(',') : undefined,
  nouns: args.nouns ? args.nouns.split(',') : undefined,
  seed: args.seed,
  defaults: {
    delimiter: args.delimiter,
    tokenHex: args.hex || false,
    tokenLength: args.length,
    tokenChars: args.chars
  }
})

console.log(haikunator.haikunate())
