const programmingLanguages = require('../data/programmingLanguages.json').data;
const frameworks = require('../data/frameworks.json').data;
const positiveStates = require('../data/positiveStates.json').data;

var xToY = [
  [
    'First you\'ll be',
  ],
  [
    'appalled',
    'dismayed',
    'furious',
    'shocked',
  ],
  [
    ',',
  ],
  [
    'then you\'ll be',
  ],
  positiveStates,
  [
    'by',
  ],
  [
    'these two lines of code',
    'this amazing function',
    'this one-liner',
    'this simple trick',
  ],
  [
    'in',
  ],
  [
    ...programmingLanguages,
    ...frameworks,
  ],
];

export default xToY;
