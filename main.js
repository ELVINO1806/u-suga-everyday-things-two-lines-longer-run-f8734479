// Entry program for make.fun competition
// "Everyday Things, Two Lines, Longer Run"
// slug: u-suga-everyday-things-two-lines-longer-run-f8734479
//
// Writes the two-line entry text to /output/entry.txt.
// Standard library only. No network, no wall clock, no randomness.

const fs = require('fs');
const path = require('path');

const line1 = 'A washing machine is a whirlpool that eats dirty clothes and spits them out dizzy but clean.';
const line2 = 'It maps the spinning water, but leaves out that real whirlpools do not give your socks back.';

const entry = line1 + '\n' + line2;

// Output goes to the fixed competition path.
fs.mkdirSync(path.dirname('/output/entry.txt'), { recursive: true });
fs.writeFileSync('/output/entry.txt', entry, 'utf8');
