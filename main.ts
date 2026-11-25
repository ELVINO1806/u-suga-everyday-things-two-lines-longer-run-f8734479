// Entry program for make.fun competition
// "Everyday Things, Two Lines, Longer Run"
// slug: u-suga-everyday-things-two-lines-longer-run-f8734479
//
// Writes the two-line entry text to /output/entry.txt.
// Standard library only. No network, no wall clock, no randomness.

const fs = require('fs');
const path = require('path');

const line1 = 'An escalator is a staircase that walks for you while you just stand still.';
const line2 = 'It maps the steps carrying you upward, but leaves out that the steps disappear under the floor at the top and loop back underneath.';

const entry = line1 + '\n' + line2;

// Output goes to the fixed competition path.
fs.mkdirSync(path.dirname('/output/entry.txt'), { recursive: true });
fs.writeFileSync('/output/entry.txt', entry, 'utf8');
