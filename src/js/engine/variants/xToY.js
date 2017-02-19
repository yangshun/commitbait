import programmingLanguages from 'data/programmingLanguages.json';
import frameworks from 'data/frameworks.json';
import positiveStates from 'data/positiveStates.json';

const xToY = [
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
  positiveStates.data,
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
    ...programmingLanguages.data,
    ...frameworks.data,
  ],
];

export default xToY;
