#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const Haikunator = require('haikunator')

// Alphabetized
const adjectives = [
  'blue',
  'clean',
  'enjoyable',
  'green',
  'indigo',
  'orange',
  'punctual',
  'favorite',
  'red',
  'respectful',
  'safe',
  'violet',
  'yellow',
]
const nouns = [
  'apple',
  'avocado',
  'carpool',
  'cancellation',
  'credit',
  'detour',
  'driver',
  'favorite',
  'impact',
  'itinerary',
  'lemon',
  'lime',
  'noshow',
  'orange',
  'reimbursement',
  'reliability',
  'rider',
  'satisfaction',
  'timeline',
  'visibility',
  'watermelon',
  'waypoint',
]

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
