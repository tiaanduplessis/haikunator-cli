#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const Haikunator = require('haikunator')

const adjectives = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'clean', 'safe', 'respectful', 'punctual', 'enjoyable', 'favorite']
const nouns = ['apple', 'avocado', 'lemon', 'lime', 'orange', 'watermelon', 'carpool', 'cancellation', 'detour', 'noshow', 'rider', 'driver', 'waypoint', 'satisfaction', 'reliability', 'visibility', 'impact', 'favorite', 'itinerary', 'timeline', 'reimbursement', 'credit']

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
