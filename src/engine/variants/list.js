const programmingLanguages = require('../data/programmingLanguages.json').data;
const frameworks = require('../data/frameworks.json').data;
const numericalQuantities = require('../data/numericalQuantities.json').data;
const positiveDescriptors = require('../data/positiveDescriptors.json').data;
const techniqueDescriptors = require('../data/techniqueDescriptors.json').data;
const extremeDescriptors = require('../data/extremeDescriptors.json').data;
const improvementDescriptors = require('../data/improvementDescriptors.json').data;

const list = [
  numericalQuantities,
  positiveDescriptors,
  techniqueDescriptors,
  [
    'to',
    'which will',
  ],
  extremeDescriptors,
  improvementDescriptors,
  [
    'the way you code in',
    'the way you do testing in',
    'the way you think about',
    'your use of',
  ],
  [
    ...programmingLanguages,
    ...frameworks,
  ],
  [
    'forever',
    'like never before',
    'permanently',
  ],
];

export default list;
