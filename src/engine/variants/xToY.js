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
    'this one-liner',
    'these 2 lines of code',
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
