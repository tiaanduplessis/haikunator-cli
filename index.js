#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const Haikunator = require('haikunator')

// Alphabetized
const adjectives = [
  'blue',
  'bucolic',
  'clean',
  'communicative',
  'considerate',
  'educational',
  'effective',
  'enjoyable',
  'good',
  'green',
  'immaculate',
  'indigo',
  'orange',
  'protective',
  'punctual',
  'favorite',
  'festive',
  'fresh',
  'fuzzy',
  'red',
  'respectful',
  'safe',
  'sanguine',
  'secular',
  'stellar',
  'super',
  'timely',
  'toasty',
  'violet',
  'yellow',
]
const nouns = [
  'apple',
  'avocado',
  'bread',
  'cactus',
  'carpool',
  'cancellation',
  'chocolate',
  'coffee',
  'credit',
  'croissant',
  'dachshund',
  'detour',
  'driver',
  'favorite',
  'impact',
  'itinerary',
  'lane',
  'lemon',
  'lime',
  'noshow',
  'orange',
  'parking',
  'pug',
  'push',
  'reimbursement',
  'reliability',
  'rider',
  'sandwich',
  'satisfaction',
  'scone',
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
