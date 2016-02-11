const improvementDescriptors = require('../data/improvementDescriptors.json').data;
const buzzwords = require('../data/buzzwords.json').data;
const measurableEntities = require('../data/measurableEntities.json').data;
const mindblowingSentences = require('../data/mindblowingSentences.json').data;

const why = [
  [
    'Reasons',
    'Why',
  ],
  [
    'you',
  ],
  [
    'have to use',
    'must use',
    'should be using',
  ],
  buzzwords,
  [
    'to',
  ],
  improvementDescriptors,
  [
    'your',
  ],
  measurableEntities,
  [
    '.',
  ],
  mindblowingSentences,
];

export default why;
