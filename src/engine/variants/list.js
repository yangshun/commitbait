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
  ['to', 'which will'],
  extremeDescriptors,
  improvementDescriptors,
  ['your use of', 'the way you think about', 'the way you code in',
    'the way you do testing in'],
  [...programmingLanguages, ...frameworks],
  ['forever', 'like never before']
];

export default list;
